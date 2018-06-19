import {
	printRequirePackages,
	printClientConstructor,
	printServiceClient
} from "./ClientGeneration";
import { format } from "prettier";
import { writeFileSync } from "fs";

it("Should render package requires", () => {
	const expected = `const grpc = require("grpc");
const service = require("./user_service_grpc_pb");
const messages = require("./user_service_pb");
const resolvers = require("./resolvers");`;

	expect(
		printRequirePackages({
			serviceNameLockerCase: "user"
		})
	).toBe(expected);
});

it("Should print client constructor", () => {
	const expected = `constructor(args) {
		this.client = new service.UserClient(
		args.ip + ":" + args.port,
		grpc.credentials.createInsecure()
	);
}`;

	expect(
		printClientConstructor({
			serviceName: "User"
		})
	).toBe(expected);
});

it("Should print client", () => {
	const r = format(
		printServiceClient({
			serviceName: "User",
			methods: [
				{
					methodName: "createUser",
					requestTypeName: "CreateUserRequest",
					responseTypeName: "CreateUserResponse"
				}
			]
		}),
		{
			useTabs: true,
			tabWidth: 4
		}
	);

	const expected = `exports.UserClient = class {
    constructor(args) {
		this.client = new service.UserClient(
			args.ip + ":" + args.port,
        	grpc.credentials.createInsecure()
        );
   	}
    createUser(args) {
        return new Promise((resolve, reject) => {
            const req = resolvers.resolveRequestCreateUserRequest(args);

            this.client.createUser(req, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(
                	resolvers.resolveResponseCreateUserResponse(res)
                );
            });
		});
	}
};`;

	writeFileSync("rrrrrr", r);
	writeFileSync("yyyyyy", expected);

	expect(r).toBe(expected);
});
