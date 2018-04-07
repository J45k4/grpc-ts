import { IRenderable } from "./IRenderable";

export class JsIfStatement implements IRenderable {
	public statement: string;
	public content: IRenderable[] = [];

	render(): string {
		return `if (${this.statement}) {
	${this.content.map(p => p.render()).join(",")}
}`;
	}
}
