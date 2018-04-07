import { IRenderable } from "./IRenderable";

export class JsMethodExecution implements IRenderable {
	public name: string;
	public args: string[] = [];

	render(): string {
		return `${this.name}(${this.args.join(", ")})`;
	}
}
