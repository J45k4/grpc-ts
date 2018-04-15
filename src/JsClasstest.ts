import { JsClass } from "./JsClass";

it("Should render exported basic class", () => {
	const exportedClass = new JsClass();
	exportedClass.exported = true;
	exportedClass.name = "HelloClient";

	const expected = `exports.HelloClient = class {

}`;

	expect(exportedClass.render()).toBe(expected);
});

it("Should render not exported basic class", () => {
	const notExportedClass = new JsClass();
	notExportedClass.exported = false;
	notExportedClass.name = "HelloClient";

	const expected = `class HelloClient {

}`;
	expect(notExportedClass.render()).toBe(expected);
});
