import { ITsType } from "./TsType";
import { IRenderable } from "./IRenderable";

export enum BasicFieldType {
	STRING = "string",
	NUMBER = "number",
	BOOLEAN = "boolean"
}

export class TsFieldType implements IRenderable {
	public isBasicType: boolean;
	public isListType: boolean;
	public basicFieldType: BasicFieldType;
	public customFieldType: ITsType;

	public render(): string {
		if (this.isBasicType) {
			if (this.isListType) {
				return this.basicFieldType + "[]";
			}
			return this.basicFieldType;
		}

		if (this.isListType) {
			return this.customFieldType.name + "[]";
		}

		return this.customFieldType.name;
	}
}
