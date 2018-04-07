import { load, Root, Namespace, Type, Service, Field, Enum } from "protobufjs";
import { resolve } from "path";
import { TsInterface } from "./TsInterface";
import { TsClassDeclaration } from "./TsClassDeclaration";
import { ITsType } from "./TsType";
import { isFieldBasicType } from "./TypeParser";
import { TsField } from "./TsField";
import { TsFieldType } from "./TsFieldType";
import {
	TsBoolean,
	TsNumber,
	TsString,
	TsBooleanList,
	TsNumberList,
	TsStringList
} from "./BasicTypes";
import { TsFile } from "./TsFile";
import { writeFileSync } from "fs";
import { TsEnum, TsEnumField } from "./TsEnum";
import { TsMethodDeclaration } from "./TsMethodDeclaration";

export const getNamespace = (root: Root): Namespace => {
	let namespace;
	Object.keys(root).forEach(key => {
		const field = root[key];
		if (field instanceof Namespace) {
			namespace = field;
		}
	});
	return namespace;
};

export const getTypes = (
	namespace,
	types: Map<string, ITsType>,
	type: Type,
	parentType?: Type
) => {
	const newTypeName = parentType ? parentType.name + type.name : type.name;
	if (type) {
		if (type instanceof Type) {
			type.nestedArray.forEach(newType => {
				getTypes(namespace, types, newType as Type, type);
			});

			let newInterface = types.get(type.name) as TsInterface;
			if (newInterface) {
				return;
			}

			newInterface = new TsInterface();
			newInterface.exported = true;
			newInterface.name = newTypeName;

			types.set(type.name, newInterface);

			type.fieldsArray.forEach(field => {
				const isBasicType = isFieldBasicType(field.type);

				const tsField = new TsField();
				tsField.fieldName = field.name;

				tsField.fieldType;

				switch (field.type) {
					case "bool":
						if (field.repeated) {
							tsField.fieldType = TsBooleanList;
						} else {
							tsField.fieldType = TsBoolean;
						}
						break;
					case "uint64":
						if (field.repeated) {
							tsField.fieldType = TsNumberList;
						} else {
							tsField.fieldType = TsNumber;
						}
						break;
					case "uint32":
						if (field.repeated) {
							tsField.fieldType = TsNumberList;
						} else {
							tsField.fieldType = TsNumber;
						}
						break;
					case "int64":
						if (field.repeated) {
							tsField.fieldType = TsNumberList;
						} else {
							tsField.fieldType = TsNumber;
						}
						break;
					case "int":
						if (field.repeated) {
							tsField.fieldType = TsNumberList;
						} else {
							tsField.fieldType = TsNumber;
						}
						break;
					case "bytes":
						if (field.repeated) {
							tsField.fieldType = TsStringList;
						} else {
							tsField.fieldType = TsString;
						}
						break;
					case "string":
						if (field.repeated) {
							tsField.fieldType = TsStringList;
						} else {
							tsField.fieldType = TsString;
						}
						break;
					default:
						const tsFieldType = new TsFieldType();
						tsFieldType.isBasicType = false;
						tsFieldType.isListType = field.repeated;
						tsField.fieldType = tsFieldType;

						let fieldType = types.get(field.type);
						if (!fieldType) {
							const parentType = namespace[field.type];
							getTypes(namespace, types, parentType);
							fieldType = types.get(field.type);
						}
						tsFieldType.customFieldType = fieldType;

						if (!tsFieldType.customFieldType) {
							console.log("customFieldType null", tsFieldType);
						}

						break;
				}

				newInterface.fields.push(tsField);
			});
		}

		if (type instanceof Enum) {
			const newEnum = new TsEnum();
			newEnum.name = type.name;
			newEnum.exported = true;

			Object.keys(type.values).forEach(key => {
				const enumKey = key;
				const enumValue = type.values[key];

				const newEnumField = new TsEnumField();
				newEnumField.fieldName = enumKey;
				newEnumField.fieldValueName = enumValue.toString();
				newEnum.fields.push(newEnumField);
			});

			types.set(type.name, newEnum);
		}
	}
};

export const ParseProto = (filepath: string) =>
	new Promise((resolve, reject) => {
		load(filepath, (err, root) => {
			if (err) {
				return reject(err);
			}

			const types: Map<string, ITsType> = new Map();
			const serviceClass: TsClassDeclaration = new TsClassDeclaration();
			serviceClass.exported = true;

			const namespace: Namespace = root.nestedArray[0] as Namespace;
			namespace.nestedArray.forEach(nestedNamespaceField => {
				if (
					nestedNamespaceField instanceof Type ||
					nestedNamespaceField instanceof Enum
				) {
					getTypes(namespace, types, nestedNamespaceField as Type);
				}
			});

			const clientOptionsIpField = new TsField();
			clientOptionsIpField.fieldName = "ip";
			clientOptionsIpField.fieldType = TsString;

			const clientOptionsPortField = new TsField();
			clientOptionsPortField.fieldName = "port";
			clientOptionsPortField.fieldType = TsNumber;

			const clientOptions = new TsInterface();
			clientOptions.name = "ClientOptions";
			clientOptions.exported = true;
			clientOptions.fields = [
				clientOptionsIpField,
				clientOptionsPortField
			];

			const clientOptionsType = new TsFieldType();
			clientOptionsType.isBasicType = false;
			clientOptionsType.customFieldType = clientOptions;

			const clientOptionsField = new TsField();
			clientOptionsField.fieldName = "args";
			clientOptionsField.fieldType = clientOptionsType;

			const methodDeclaration = new TsMethodDeclaration();
			methodDeclaration.name = "constructor";
			methodDeclaration.args.push(clientOptionsField);

			serviceClass.methods.push(methodDeclaration);

			namespace.nestedArray.forEach(nestedNamespaceField => {
				if (nestedNamespaceField instanceof Service) {
					serviceClass.name = nestedNamespaceField.name;
					serviceClass.exported = true;
					nestedNamespaceField.methodsArray.forEach(method => {
						const responseType = types.get(method.responseType);
						const requestType = types.get(method.requestType);

						const returnFieldType = new TsFieldType();
						returnFieldType.isBasicType = false;
						returnFieldType.customFieldType = responseType;

						const requestFieldType = new TsFieldType();
						requestFieldType.isBasicType = false;
						requestFieldType.customFieldType = requestType;

						const methodDeclaration = new TsMethodDeclaration();
						methodDeclaration.name = method.name;
						methodDeclaration.returnValueType = returnFieldType;

						const argsField = new TsField();
						argsField.fieldName = "args";
						argsField.fieldType = requestFieldType;

						methodDeclaration.args.push(argsField);

						serviceClass.methods.push(methodDeclaration);
					});
				}
			});

			const tsFile = new TsFile();

			tsFile.renderables.push(serviceClass);

			tsFile.renderables.push(clientOptions);

			types.forEach(value => {
				tsFile.renderables.push(value);
			});

			writeFileSync("testi.ts", tsFile.render());
		});
	});

const servicePath = resolve(__dirname, "seppo", "seppo_service.proto");

ParseProto(servicePath);

console.log("rootpath", __dirname);
