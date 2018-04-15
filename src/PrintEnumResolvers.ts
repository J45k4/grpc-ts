export const printRequestEnumResolver = name => {
	return `exports.resolveRequest${name} = input => input
`;
};

export const printResponseEnumResolver = name => {
	return `exports.resolveResponse${name} = input => input
`;
};
