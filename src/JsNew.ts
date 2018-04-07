import { IRenderable } from "./IRenderable";
import { JsClass } from "./JsClass";

export class JsNew implements IRenderable {
	public jsClass: JsClass;
	public args: string[] = [];

	render(): string {
		return `new ${this.jsClass.name}(${this.args.join(",")});`;
	}
}
