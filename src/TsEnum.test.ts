import { TsEnumField, TsEnum } from "./TsEnum";

it("Should render enum field", () => {
	const newField = new TsEnumField();
	newField.fieldName = `FIELD_NAME`;
	newField.fieldValueName = `"testi"`;

	const expected = `FIELD_NAME = "testi"`;

	expect(newField.render()).toBe(expected);
});

it("Should render enum", () => {
	const succcessField = new TsEnumField();
	succcessField.fieldName = `SUCCESS`;
	succcessField.fieldValueName = `"success"`;

	const failedField = new TsEnumField();
	failedField.fieldName = `FAILED`;
	failedField.fieldValueName = `"failed"`;

	const responseState = new TsEnum();
	responseState.name = "ResponseState";
	responseState.exported = true;
	responseState.fields = [succcessField, failedField];

	const expected = `export enum ResponseState {
	SUCCESS = "success",
	FAILED = "failed"
}`;
	expect(responseState.render()).toBe(expected);
});
