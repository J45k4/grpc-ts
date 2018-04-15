export type ClassDeclarationMethod = {
	methodName: string;
	requestType: string;
	responseType: string;
};

export type ClassDeclarationArgs = {
	serviceName: string;
	methods: ClassDeclarationMethod[];
};

export const printClassDeclarationConstructor = (args: {
	serviceName: string;
}) => {
	return `constructor(args: {
		ip: string,
		port: number
	});`;
};

export const printClassDeclarationMethod = (args: ClassDeclarationMethod) => {
	return `${args.methodName}(args: types.${
		args.requestType
	}): Promise<types.${args.responseType}>;`;
};

export const printClassDeclaration = (args: ClassDeclarationArgs) => {
	return `export class ${args.serviceName} {
		${printClassDeclarationConstructor({
			serviceName: args.serviceName
		})}
		${args.methods.map(p => printClassDeclarationMethod(p)).join("\n")} 
	}`;
};
