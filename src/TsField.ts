import { TsFieldType } from "./TsFieldType";
import { IRenderable } from "./IRenderable";

export class TsField implements IRenderable {
	public fieldName: string;
	public fieldType: TsFieldType;

	render() {
		return this.fieldName + ": " + this.fieldType.render();
	}
}
