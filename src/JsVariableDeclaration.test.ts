import { JsRequireDeclaration } from "./JsRequireDeclaration";
import { JsVariableDeclaration, VariableTypes } from "./JsVariableDeclaration";

it("Should render const type grpc variable with grpc require", () => {
	const requireGrpc = new JsRequireDeclaration();
	requireGrpc.path = "grpc";

	const v = new JsVariableDeclaration();
	v.name = "grpc";
	v.variableType = VariableTypes.const;
	v.value = requireGrpc;

	const expected = `const grpc = require("grpc");`;
	expect(v.render()).toBe(expected);
});
