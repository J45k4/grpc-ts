import { IRenderable } from "./IRenderable";

export class JsArrowFunction implements IRenderable {
	public args: string[] = [];
	public content: IRenderable[] = [];

	render(): string {
		return `(${this.args.join(", ")}) => {
		${this.content.map(p => p.render()).join("\n")}
	}`;
	}
}
