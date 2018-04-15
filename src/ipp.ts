import { resolve } from "path";
import { loadSync } from "protobufjs";

const servicePath = resolve(__dirname, "seppo", "seppo_service.proto");

const s = loadSync(servicePath);

console.log("s", s);
