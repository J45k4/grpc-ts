export type EnumObjectField = {
	fieldName: string;
	fieldValue: number;
};

export type PrintEnumObjectArgs = {
	name: string;
	fields: EnumObjectField[];
};

export const printEnumObject = (args: PrintEnumObjectArgs) => {
	return `exports.${args.name} = {
	${args.fields.map(p => `${p.fieldName}: ${p.fieldValue}`).join(",\n\t")}		
}
`;
};
