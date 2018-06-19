import { capitilizeOnlyFirstLetter } from "./strings";

export type RequestTypeResolverField = {
	isListType?: boolean;
	isBasicType?: boolean;
	fieldName: string;
	typeName: string;
};

export type RequestTypeResolverArgs = {
	requestType: string;
	fields: RequestTypeResolverField[];
};

export const printRequestTypeResolverField = (
	args: RequestTypeResolverField
) => {
	if (args.isBasicType) {
		if (args.isListType) {
			return `if (input.${args.fieldName}) {
				req.set${capitilizeOnlyFirstLetter(args.fieldName)}List(input.${args.fieldName})
			}`;
		}
		return `if (input.${args.fieldName}) {
			req.set${capitilizeOnlyFirstLetter(args.fieldName)}(input.${args.fieldName});
		}`;
	}

	if (args.isListType) {
		return `if (input.${args.fieldName}) {
			req.set${capitilizeOnlyFirstLetter(args.fieldName)}List(input.${
			args.fieldName
		}.map(p => exports.resolveRequest${args.typeName}(p)));
		}`;
	}

	return `if (input.${args.fieldName}) {
		req.set${capitilizeOnlyFirstLetter(args.fieldName)}(exports.resolveRequest${
		args.typeName
	}(input.${args.fieldName}));
	}`;
};

export const printRequestTypeResolver = (args: RequestTypeResolverArgs) => {
	return `
	exports.resolveRequest${args.requestType} = input => {
		const req = new messages.${args.requestType}();
		${args.fields.map(p => printRequestTypeResolverField(p)).join("\n")}
		return req;
	}`;
};
