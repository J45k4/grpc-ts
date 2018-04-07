import { IRenderable } from "./IRenderable";

export class JsRequireDeclaration implements IRenderable {
	public path: string;

	render(): string {
		return `require("${this.path}")`;
	}
}
