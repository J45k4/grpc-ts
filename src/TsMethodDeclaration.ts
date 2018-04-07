import { TsField } from "./TsField";
import { ITsType } from "./TsType";
import { TsFieldType } from "./TsFieldType";
import { IRenderable } from "./IRenderable";

export class TsMethodDeclaration implements IRenderable {
	public name: string;
	public args: TsField[] = [];
	public returnValueType: TsFieldType;

	render(): string {
		return `${this.name}(${
			this.args.length > 0 ? this.args.map(p => p.render()).join(",") : ""
		})${this.returnValueType ? `: ${this.returnValueType.render()}` : ""};`;
	}
}
