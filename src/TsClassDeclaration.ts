import { ITsType } from "./TsType";
import { TsMethodDeclaration } from "./TsMethodDeclaration";
import { IRenderable } from "./IRenderable";

export class TsClassDeclaration implements ITsType, IRenderable {
	public name: string;
	public exported: boolean;
	public methods: TsMethodDeclaration[] = [];

	render(): string {
		return `${this.exported ? "export " : ""}declare class ${this.name} {
	${this.methods.map(p => p.render()).join("\n\t")}
}`;
	}
}
