import { TsFieldType, BasicFieldType } from "./TsFieldType";

export const TsBoolean = new TsFieldType();
TsBoolean.basicFieldType = BasicFieldType.BOOLEAN;
TsBoolean.isListType = false;
TsBoolean.isBasicType = true;

export const TsBooleanList = new TsFieldType();
TsBooleanList.basicFieldType = BasicFieldType.BOOLEAN;
TsBooleanList.isListType = true;
TsBooleanList.isBasicType = true;

export const TsString = new TsFieldType();
TsString.basicFieldType = BasicFieldType.STRING;
TsString.isListType = false;
TsString.isBasicType = true;

export const TsStringList = new TsFieldType();
TsStringList.basicFieldType = BasicFieldType.STRING;
TsStringList.isListType = true;
TsStringList.isBasicType = true;

export const TsNumber = new TsFieldType();
TsNumber.basicFieldType = BasicFieldType.NUMBER;
TsNumber.isListType = false;
TsNumber.isBasicType = true;

export const TsNumberList = new TsFieldType();
TsNumberList.basicFieldType = BasicFieldType.NUMBER;
TsNumberList.isListType = true;
TsNumberList.isBasicType = true;
