import { capitilizeOnlyFirstLetter } from "./strings";

export type ResponseTypeResolverField = {
	isListType?: boolean;
	isBasicType?: boolean;
	fieldName: string;
	typeName: string;
};

export type ResponseTypeResolverArgs = {
	responseType: string;
	fields: ResponseTypeResolverField[];
};

export const printResponseTypeFieldResolve = (
	args: ResponseTypeResolverField
) => {
	if (args.isBasicType) {
		if (args.isListType) {
			return `res.${
				args.fieldName
			} = input.get${capitilizeOnlyFirstLetter(args.fieldName)}List();`;
		}
		return `res.${args.fieldName} = input.get${capitilizeOnlyFirstLetter(
			args.fieldName
		)}();`;
	}

	if (args.isListType) {
		return `if (input.get${capitilizeOnlyFirstLetter(
			args.fieldName
		)}List()) {
			res.${args.fieldName} = input.get${capitilizeOnlyFirstLetter(
			args.fieldName
		)}List().map(p => exports.resolveResponse${args.typeName}(p));
		}`;
	}

	return `if (input.get${capitilizeOnlyFirstLetter(
		args.fieldName
	)}() != null) {
		res.${args.fieldName} = exports.resolveResponse${
		args.typeName
	}(input.get${capitilizeOnlyFirstLetter(args.fieldName)}());
	}`;
};

export const printResponseTypeResolver = (args: ResponseTypeResolverArgs) => {
	return `
	exports.resolveResponse${args.responseType} = input => {
		const res = {};
		${args.fields.map(p => printResponseTypeFieldResolve(p)).join("\n")}
		return res;
	}
	`;
};
