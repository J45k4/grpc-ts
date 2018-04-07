import { IRenderable } from "./IRenderable";
import { JsClassMethod } from "./JsClassMethod";

export class JsClass implements IRenderable {
	public name: string;
	public exported: boolean;
	public methods: JsClassMethod[] = [];

	render(): string {
		if (this.exported) {
			return `exports.${this.name} = class {
${this.methods.map(p => p.render()).join("\n")}
			}`;
		} else {
			return `class ${this.name} {

}`;
		}
	}
}
