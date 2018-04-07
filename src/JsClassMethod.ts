import { IRenderable } from "./IRenderable";

export class JsClassMethod implements IRenderable {
	name: string;
	args: string[] = [];
	content: IRenderable[] = [];

	render(): string {
		return `	${this.name}(${this.args.join(",")}) {
			${this.content.map(p => p.render())}
	}`;
	}
}
