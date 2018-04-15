import { format } from "prettier";
import { printResponseTypeResolver } from "./ResponseResolversGeneration";

it("Should render createResponseTypeResolver", () => {
	const r = format(
		printResponseTypeResolver({
			responseType: "CreateUserResponse",
			fields: [
				{
					fieldName: "success",
					isBasicType: true,
					typeName: "boolean"
				},
				{
					isBasicType: false,
					typeName: "User",
					fieldName: "user"
				}
			]
		}),
		{
			useTabs: true,
			tabWidth: 4
		}
	);

	const expected = `exports.resolveResponseCreateUserResponse = input => {
	const res = {};
	res.success = input.getSuccess();
	if (input.getUser()) {
		res.user = input.getUser();
	}
	return res;
};
`;

	expect(r).toBe(expected);
});

it("Should render searchResponseUsersResponse", () => {
	const r = format(
		printResponseTypeResolver({
			responseType: "SearchUsersResponse",
			fields: [
				{
					fieldName: "users",
					isBasicType: false,
					typeName: "users"
				}
			]
		}),
		{
			useTabs: true,
			tabWidth: 4
		}
	);

	const expected = `exports.resolveResponseSearchUsersResponse = input => {
	const res = {};
	if (input.getUsers()) {
		res.users = input.getUsers();
	}
	return res;
};
`;

	expect(r).toBe(expected);
});
