export type InterfaceField = {
	fieldName: string;
	fieldType?: string;
	isListType?: boolean;
	required?: boolean;
};

export type EnumField = {
	fieldName: string;
	fieldValue: number;
};

export type InterfaceType = {
	interfaceName: string;
	interfaceFields: InterfaceField[];
};

export type EnumType = {
	enumName: string;
	enumFields: EnumField[];
};

export const printInterfaceField = (args: InterfaceField) => {
	if (args.isListType) {
		return `${args.fieldName}${!args.required ? "?" : ""}: ${
			args.fieldType
		}[];`;
	}
	return `${args.fieldName}${!args.required ? "?" : ""}: ${args.fieldType};`;
};

export const printInterface = (args: {
	interfaceName: string;
	interfaceFields: InterfaceField[];
}) => {
	return `export interface ${args.interfaceName} {
	${args.interfaceFields.map(p => printInterfaceField(p)).join("\n\t")}
}`;
};

export const printEnumField = (args: EnumField) => {
	return `${args.fieldName} = ${args.fieldValue}`;
};

export const printEnum = (args: {
	enumName: string;
	enumFields: EnumField[];
}) => {
	return `export enum ${args.enumName} {
	${args.enumFields.map(p => printEnumField(p)).join(",\n\t")}
}`;
};
