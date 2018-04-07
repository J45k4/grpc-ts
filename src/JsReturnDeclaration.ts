import { IRenderable } from "./IRenderable";

export class JsReturnDeclaration implements IRenderable {
	public value: IRenderable;

	public render(): string {
		return `return ${this.value.render()}`;
	}
}
