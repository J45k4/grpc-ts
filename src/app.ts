#!/usr/bin/env node

import { load } from "protobufjs";

import { parseProto } from "./parseProto";
import { resolve, join } from "path";
import { writeFileSync } from "fs";

const servicePath = resolve(__dirname, "seppo", "seppo_service.proto");

let inputServicePath = "";
let outputDir = "";

process.argv.forEach(function(arg, index) {
	if (arg === "-i") {
		inputServicePath = process.argv[index + 1];
	}
	if (arg === "-o") {
		outputDir = process.argv[index + 1];
	}
});

console.log("outputDir", outputDir);
console.log("input", inputServicePath);

load(inputServicePath, (err, root) => {
	if (err) {
		console.log("err", err);
		return;
	}

	const r = parseProto(root);

	writeFileSync(join(outputDir, "types.d.ts"), r.types);
	writeFileSync(join(outputDir, "types.js"), r.enumObjects);
	writeFileSync(join(outputDir, "resolvers.js"), r.resolvers);
	writeFileSync(join(outputDir, "client.d.ts"), r.clientDeclaration);
	writeFileSync(join(outputDir, "client.js"), r.clientImplementation);
});
