import { JsRequireDeclaration } from "./JsRequireDeclaration";
import { JsVariableDeclaration, VariableTypes } from "./JsVariableDeclaration";
import { JsClass } from "./JsClass";
import { JsClassMethod } from "./JsClassMethod";
import { JsNew } from "./JsNew";
import { JsMethodExecution } from "./JsMethodExecution";
import { JsReturnDeclaration } from "./JsReturnDeclaration";
import { JsIfStatement } from "./JsIfStatement";
import { JsArrowFunction } from "./JsArrowFunction";
import { FileGen } from "./FileGen";
import { writeFileSync } from "fs";
import { format } from "prettier";

const requireGrpc = new JsRequireDeclaration();
requireGrpc.path = "grpc";

const grpcVariable = new JsVariableDeclaration();
grpcVariable.name = "grpc";
grpcVariable.variableType = VariableTypes.const;
grpcVariable.value = requireGrpc;

const requireService = new JsRequireDeclaration();
requireService.path = "./hello_service_grpc_pb";

const serviceVariable = new JsVariableDeclaration();
serviceVariable.name = "service";
serviceVariable.variableType = VariableTypes.const;
serviceVariable.value = requireService;

const requireMessages = new JsRequireDeclaration();
requireMessages.path = "./hello_service_pb";

const messagesVariable = new JsVariableDeclaration();
messagesVariable.name = "messages";
messagesVariable.variableType = VariableTypes.const;
messagesVariable.value = requireMessages;

const requireResolvers = new JsRequireDeclaration();
requireResolvers.path = "./resolvers";

const resolversVariable = new JsVariableDeclaration();
resolversVariable.name = "resolvers";
resolversVariable.variableType = VariableTypes.const;
resolversVariable.value = requireResolvers;

const helloClientClass = new JsClass();
helloClientClass.exported = true;
helloClientClass.name = "HelloClient";

const helloClientConstructorMethod = new JsClassMethod();
helloClientConstructorMethod.name = "constructor";
helloClientConstructorMethod.args.push("args");

const requestClass = new JsClass();
requestClass.name = "messages.SayHelloRequest";

const requestClassNew = new JsNew();
requestClassNew.jsClass = requestClass;

const requestVariable = new JsVariableDeclaration();
requestVariable.name = "req";
requestVariable.variableType = VariableTypes.const;
requestVariable.value = requestClassNew;

const rejectExecution = new JsMethodExecution();
rejectExecution.name = "reject";
rejectExecution.args.push("err");

const rejectReturn = new JsReturnDeclaration();
rejectReturn.value = rejectExecution;

const checkErrorStatement = new JsIfStatement();
checkErrorStatement.statement = "err";
checkErrorStatement.content.push(rejectReturn);

const resolveExecution = new JsMethodExecution();
resolveExecution.name = "resolve";
resolveExecution.args.push("res");

const sayHelloCallback = new JsArrowFunction();
sayHelloCallback.args.push("err", "res");
sayHelloCallback.content.push(checkErrorStatement);

const setYourNameExecution = new JsMethodExecution();
setYourNameExecution.name = "req.setYourname";
setYourNameExecution.args.push("args.yourName");

const sayHelloExecution = new JsMethodExecution();
sayHelloExecution.name = "this.client.sayHello";
sayHelloExecution.args.push("req", sayHelloCallback.render());

const promiseHandler = new JsArrowFunction();
promiseHandler.args.push("resolve", "reject");
promiseHandler.content.push(requestVariable);
promiseHandler.content.push(setYourNameExecution);

const returnClass = new JsClass();
returnClass.name = "Promise";

const newDeclaration = new JsNew();
newDeclaration.jsClass = returnClass;
newDeclaration.args.push(promiseHandler.render());

const returnDeclaration = new JsReturnDeclaration();
returnDeclaration.value = newDeclaration;

const helloClientSayHelloMethod = new JsClassMethod();
helloClientSayHelloMethod.name = "sayHello";
helloClientSayHelloMethod.args.push("args");
helloClientSayHelloMethod.content.push(returnDeclaration);

helloClientClass.methods.push(
	helloClientConstructorMethod,
	helloClientSayHelloMethod
);

const file = new FileGen();
file.renderables.push(
	grpcVariable,
	serviceVariable,
	messagesVariable,
	resolversVariable,
	helloClientClass
);

writeFileSync(
	"protootto.js",
	format(file.render(), {
		tabWidth: 4,
		useTabs: true
	})
);
