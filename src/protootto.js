const grpc = require("grpc");
const service = require("./hello_service_grpc_pb");
const messages = require("./hello_service_pb");
const resolvers = require("./resolvers");
exports.HelloClient = class {
	constructor(args) {}
	sayHello(args) {
		return new Promise((resolve, reject) => {
			const req = new messages.SayHelloRequest();
			req.setYourname(args.yourName);
		});
	}
};
