import { ITsType } from "./TsType";
import { TsField } from "./TsField";
import { IRenderable } from "./IRenderable";

export class TsInterface implements ITsType, IRenderable {
	public name: string;
	public exported: boolean;
	public fields: TsField[] = [];

	render() {
		return `${this.exported ? "export " : ""}interface ${this.name} {
	${this.fields.map(p => p.render() + ";").join("\n\t")}
}`;
	}
}
