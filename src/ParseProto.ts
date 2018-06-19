import { Root, Namespace, Type, Service, Enum } from "protobufjs";
import {
	printRequestTypeResolver,
	RequestTypeResolverField,
	RequestTypeResolverArgs
} from "./RequestResolversGeneration";
import { format } from "prettier";
import {
	ResponseTypeResolverArgs,
	ResponseTypeResolverField,
	printResponseTypeResolver
} from "./ResponseResolversGeneration";
import {
	InterfaceType,
	InterfaceField,
	printInterface,
	EnumType,
	EnumField,
	printEnum
} from "./TypesGeneration";
import {
	ClassDeclarationArgs,
	ClassDeclarationMethod,
	printClassDeclaration
} from "./ClientDeclarationGenerator";
import {
	ServiceClientArgs,
	ClientMethodArgs,
	printServiceClient
} from "./ClientGeneration";
import {
	printRequestEnumResolver,
	printResponseEnumResolver
} from "./PrintEnumResolvers";
import {
	PrintEnumObjectArgs,
	EnumObjectField,
	printEnumObject
} from "./printEnumObject";

type GetTypesContainer = {
	resolvers: string;
	types: string;
	jsEnums: string;
};

export const getTypes = (
	container: GetTypesContainer,
	namespace,
	type: Type,
	parentType?: Type
) => {
	const newTypeName = parentType ? parentType.name + type.name : type.name;
	if (type) {
		if (type instanceof Type) {
			type.nestedArray.forEach(newType => {
				getTypes(container, namespace, newType as Type, type);
			});

			const requestResolver: RequestTypeResolverArgs = {
				requestType: newTypeName,
				fields: []
			};

			const responseResolver: ResponseTypeResolverArgs = {
				responseType: newTypeName,
				fields: []
			};

			const interfaceType: InterfaceType = {
				interfaceName: newTypeName,
				interfaceFields: []
			};

			type.fieldsArray.forEach(field => {
				let fieldTypeName = field.type;
				if (type.nested && type.nested[field.type]) {
					fieldTypeName = type.name + field.type;
				}

				const requestField: RequestTypeResolverField = {
					fieldName: field.name,
					typeName: field.type,
					isListType: field.repeated
				};

				const responseField: ResponseTypeResolverField = {
					fieldName: field.name,
					typeName: field.type,
					isListType: field.repeated
				};

				const interfaceField: InterfaceField = {
					fieldName: field.name,
					isListType: field.repeated,
					required: field.required
				};

				switch (field.type) {
					case "bool":
						requestField.isBasicType = true;
						responseField.isBasicType = true;
						interfaceField.fieldType = "boolean";
						break;
					case "uint64":
						requestField.isBasicType = true;
						responseField.isBasicType = true;
						interfaceField.fieldType = "number";
						break;
					case "uint32":
						requestField.isBasicType = true;
						responseField.isBasicType = true;
						interfaceField.fieldType = "number";
						break;
					case "int64":
						requestField.isBasicType = true;
						responseField.isBasicType = true;
						interfaceField.fieldType = "number";
						break;
					case "int":
						requestField.isBasicType = true;
						responseField.isBasicType = true;
						interfaceField.fieldType = "number";
						break;
					case "bytes":
						requestField.isBasicType = true;
						responseField.isBasicType = true;
						interfaceField.fieldType = "string";
						break;
					case "string":
						requestField.isBasicType = true;
						responseField.isBasicType = true;
						interfaceField.fieldType = "string";
						break;
					default:
						requestField.isBasicType = false;
						responseField.isBasicType = false;
						interfaceField.fieldType = fieldTypeName;
						break;
				}
				requestResolver.fields.push(requestField);
				responseResolver.fields.push(responseField);
				interfaceType.interfaceFields.push(interfaceField);
			});

			container.resolvers += format(
				printRequestTypeResolver(requestResolver),
				{
					useTabs: true,
					tabWidth: 4
				}
			);

			container.resolvers += format(
				printResponseTypeResolver(responseResolver),
				{
					useTabs: true,
					tabWidth: 4
				}
			);

			container.types += format(printInterface(interfaceType), {
				useTabs: true,
				tabWidth: 4
			});
		}

		if (type instanceof Enum) {
			const enumType: EnumType = {
				enumName: newTypeName,
				enumFields: []
			};

			const enumObject: PrintEnumObjectArgs = {
				name: newTypeName,
				fields: []
			};

			container.resolvers += printRequestEnumResolver(type.name);
			container.resolvers += printResponseEnumResolver(type.name);

			// const responseResolver: ResponseTypeResolverArgs = {
			// 	responseType: newTypeName,
			// 	fields: []
			// };

			Object.keys(type.values).forEach(key => {
				const enumKey = key;
				const enumValue = type.values[key];

				const enumField: EnumField = {
					fieldName: enumKey,
					fieldValue: enumValue
				};

				enumType.enumFields.push(enumField);

				const enumObjectField: EnumObjectField = {
					fieldName: enumKey,
					fieldValue: enumValue
				};

				enumObject.fields.push(enumObjectField);
			});

			const r = printEnum(enumType);

			container.types += r + "\n";

			container.jsEnums += printEnumObject(enumObject);
		}
	}
};

export const parseProto = (root: Root) => {
	const getTypesContainer: GetTypesContainer = {
		types: "",
		resolvers: "",
		jsEnums: ""
	};

	let clientDeclaration = "";
	let clientImplementation = "";

	const namespace: Namespace = root.nestedArray[0] as Namespace;
	namespace.nestedArray.forEach(nestedNamespaceField => {
		if (
			nestedNamespaceField instanceof Type ||
			nestedNamespaceField instanceof Enum
		) {
			getTypes(
				getTypesContainer,
				namespace,
				nestedNamespaceField as Type
			);
		}

		if (nestedNamespaceField instanceof Service) {
			getTypesContainer.resolvers =
				`const messages = require("./${nestedNamespaceField.name.toLocaleLowerCase()}_service_pb");
` + getTypesContainer.resolvers;

			const classDeclaration: ClassDeclarationArgs = {
				serviceName: nestedNamespaceField.name,
				methods: []
			};

			const serviceClientArgs: ServiceClientArgs = {
				serviceName: nestedNamespaceField.name,
				methods: []
			};

			nestedNamespaceField.methodsArray.forEach(m => {
				const classMethod: ClassDeclarationMethod = {
					methodName: m.name,
					requestType: m.requestType,
					responseType: m.responseType
				};
				classDeclaration.methods.push(classMethod);

				const clientMethod: ClientMethodArgs = {
					methodName: m.name,
					requestTypeName: m.requestType,
					responseTypeName: m.responseType
				};
				serviceClientArgs.methods.push(clientMethod);
			});

			clientDeclaration +=
				`import * as types from "./types";
` + printClassDeclaration(classDeclaration);

			clientImplementation += format(
				printServiceClient(serviceClientArgs),
				{
					tabWidth: 4,
					useTabs: true
				}
			);
		}
	});

	return {
		clientDeclaration,
		clientImplementation,
		types: getTypesContainer.types,
		resolvers: getTypesContainer.resolvers,
		enumObjects: getTypesContainer.jsEnums
	};
};
