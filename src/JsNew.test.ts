import { JsClass } from "./JsClass";
import { JsNew } from "./JsNew";

it("Should render basic class new", () => {
	const classDeclaration = new JsClass();
	classDeclaration.name = "HelloClient";

	const newDeclaration = new JsNew();
	newDeclaration.jsClass = classDeclaration;

	const expected = `new HelloClient();`;

	expect(newDeclaration.render()).toBe(expected);
});
