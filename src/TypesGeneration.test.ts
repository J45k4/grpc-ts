import {
	InterfaceField,
	InterfaceType,
	printInterface,
	EnumType,
	printEnum
} from "./TypesGeneration";
import { format } from "prettier";

it("Should render interface", () => {
	const tagInterface: InterfaceType = {
		interfaceName: "Tag",
		interfaceFields: [
			{
				fieldName: "id",
				fieldType: "number"
			},
			{
				fieldName: "name",
				fieldType: "string"
			}
		]
	};

	const expected = `export interface Tag {
	id: number;
	name: string;
}`;

	expect(format(printInterface(tagInterface))).toBe(format(expected));
});

it("Should render enum", () => {
	const createState: EnumType = {
		enumName: "createUserState",
		enumFields: [
			{
				fieldName: "SUCCESS",
				fieldValue: 0
			},
			{
				fieldName: "FAILED",
				fieldValue: 1
			}
		]
	};

	const expected = `export enum createUserState {
	SUCCESS = 0,
	FAILED = 1
}`;

	expect(printEnum(createState)).toBe(expected);
});
