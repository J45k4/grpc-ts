import { JsRequireDeclaration } from "./JsRequireDeclaration";

it("Should render require statement", () => {
	const grpcRequire = new JsRequireDeclaration();
	grpcRequire.path = "grpc";

	const expected = `require("grpc")`;
	expect(grpcRequire.render()).toBe(expected);
});
