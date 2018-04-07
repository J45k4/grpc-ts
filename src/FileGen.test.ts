import { TsFieldType, BasicFieldType } from "./TsFieldType";
import { TsInterface } from "./TsInterface";
import { TsField } from "./TsField";
import { FileGen } from "./FileGen";

it("Should render basic typescript file", () => {
	const stringType = new TsFieldType();
	stringType.isBasicType = true;
	stringType.basicFieldType = BasicFieldType.STRING;

	const personInterface = new TsInterface();
	personInterface.name = "IPerson";

	const personListType = new TsFieldType();
	personListType.isBasicType = false;
	personListType.customFieldType = personInterface;
	personListType.isListType = true;

	const firstNameField = new TsField();
	firstNameField.fieldName = "firstName";
	firstNameField.fieldType = stringType;

	const lastNameField = new TsField();
	lastNameField.fieldName = "lastname";
	lastNameField.fieldType = stringType;

	const friendsField = new TsField();
	friendsField.fieldName = "friends";
	friendsField.fieldType = personListType;

	personInterface.fields.push(firstNameField, lastNameField, friendsField);

	const file = new FileGen();
	file.fileName = "file.d.ts";
	file.renderables.push(personInterface);
	file.renderables.push(personInterface);

	const expected = `interface IPerson {
	firstName: string;
	lastname: string;
	friends: IPerson[];
}
interface IPerson {
	firstName: string;
	lastname: string;
	friends: IPerson[];
}`;

	expect(file.render()).toBe(expected);
});
