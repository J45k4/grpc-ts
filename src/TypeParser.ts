export const isFieldBasicType = (type: string): boolean => {
	if (
		type === "bool" ||
		type === "string" ||
		type === "uint64" ||
		type === "uint32" ||
		type === "int64" ||
		type === "int" ||
		type === "bytes"
	) {
		return true;
	}
	return false;
};

export const convertBasicType = (type: string): string => {
	switch (type) {
		case "bool":
			return "boolean";
		case "uint64":
			return "number";
		case "uint32":
			return "number";
		case "int64":
			return "number";
		case "int":
			return "number";
		case "bytes":
			return "string";
		default:
			return "string";
	}
};
