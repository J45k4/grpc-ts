import { TsFieldType, BasicFieldType } from "./TsFieldType";
import { TsInterface } from "./TsInterface";

it("Should render string of typescript string array type", () => {
	const field = new TsFieldType();
	field.basicFieldType = BasicFieldType.STRING;
	field.isBasicType = true;
	field.isListType = true;

	expect(field.render()).toBe("string[]");
});

it("Should render string of typescript string type", () => {
	const field = new TsFieldType();
	field.basicFieldType = BasicFieldType.STRING;
	field.isBasicType = true;
	field.isListType = false;

	expect(field.render()).toBe("string");
});

it("Should render custom type", () => {
	const customInterface = new TsInterface();
	customInterface.name = "Person";

	const fieldType = new TsFieldType();
	fieldType.isBasicType = false;
	fieldType.customFieldType = customInterface;

	expect(fieldType.render()).toBe("Person");
});

it("Should render custom list type", () => {
	const customInterface = new TsInterface();
	customInterface.name = "Person";

	const fieldType = new TsFieldType();
	fieldType.isBasicType = false;
	fieldType.isListType = true;
	fieldType.customFieldType = customInterface;

	expect(fieldType.render()).toBe("Person[]");
});
