import { TsField } from "./TsField";
import { TsFieldType, BasicFieldType } from "./TsFieldType";

it("Should render field", () => {
	const fieldType = new TsFieldType();
	fieldType.basicFieldType = BasicFieldType.STRING;
	fieldType.isBasicType = true;
	fieldType.isListType = false;

	const field = new TsField();
	field.fieldName = "name";
	field.fieldType = fieldType;

	expect(field.render()).toBe("name: string");
});
