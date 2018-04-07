import { IRenderable } from "./IRenderable";

export enum VariableTypes {
	const = "const",
	var = "var",
	let = "let"
}

export class JsVariableDeclaration {
	public name: string;
	public variableType: VariableTypes;
	public value: IRenderable;

	render(): string {
		return `${this.variableType} ${this.name} = ${this.value.render()};`;
	}
}
