export type ClientMethodArgs = {
	methodName: string;
	requestTypeName: string;
	responseTypeName: string;
};

export type ServiceClientArgs = {
	serviceName: string;
	methods: ClientMethodArgs[];
};

export const printRequirePackages = (args: {
	serviceNameLockerCase: string;
}) => {
	return `const grpc = require("grpc");
const service = require("./${args.serviceNameLockerCase.toLowerCase()}_service_grpc_pb");
const messages = require("./${args.serviceNameLockerCase.toLowerCase()}_service_pb");
const resolvers = require("./resolvers");`;
};

export const printClientConstructor = (args: { serviceName: string }) => {
	return `constructor(args) {
		this.client = new service.${args.serviceName}Client(
		args.ip + ":" + args.port,
		grpc.credentials.createInsecure()
	);
}`;
};

export const printClientMethod = (args: ClientMethodArgs) => {
	return `${args.methodName}(args) {
		return new Promise((resolve, reject) => {
			const req = resolvers.resolveRequest${args.requestTypeName}(args);

			this.client.${args.methodName}(req, (err, res) => {
				if (err) {
					return reject(err);
				}
				return resolve(resolvers.resolveResponse${args.responseTypeName}(res));
			})
		})	
	}`;
};

export const printServiceClient = (args: ServiceClientArgs) => {
	return `
${printRequirePackages({
		serviceNameLockerCase: args.serviceName
	})}

exports.${args.serviceName} = class {
	${printClientConstructor({
		serviceName: args.serviceName
	})}
	${args.methods.map(p => printClientMethod(p)).join("\n")}
}`;
};
