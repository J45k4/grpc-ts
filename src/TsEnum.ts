import { ITsType } from "./TsType";
import { IRenderable } from "./IRenderable";

export class TsEnumField implements IRenderable {
	public fieldName: string;
	public fieldValueName: string;

	render(): string {
		return `${this.fieldName} = ${this.fieldValueName}`;
	}
}

export class TsEnum implements ITsType, IRenderable {
	public name: string;
	public exported: boolean;
	public fields: TsEnumField[] = [];

	render(): string {
		return `${this.exported ? "export " : ""}enum ${this.name} {
	${this.fields.map(p => p.render()).join(",\n\t")}
}`;
	}
}
