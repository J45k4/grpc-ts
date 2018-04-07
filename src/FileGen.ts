import { IRenderable } from "./IRenderable";

import { format } from "prettier";

export class FileGen implements IRenderable {
	public fileName: string;

	public renderables: IRenderable[] = [];

	render(): string {
		return this.renderables.map(p => p.render()).join("\n");
	}
}
