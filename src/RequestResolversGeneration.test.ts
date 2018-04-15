import { printRequestTypeResolver } from "./RequestResolversGeneration";
import { format } from "prettier";

it("Should render requestResolvers", () => {
	const r = format(
		printRequestTypeResolver({
			requestType: "CreateUserRequest",
			fields: [
				{
					isBasicType: true,
					fieldName: "name",
					typeName: "string"
				},
				{
					isBasicType: true,
					fieldName: "lastName",
					typeName: "string"
				}
			]
		}),
		{
			tabWidth: 4,
			useTabs: true
		}
	);

	const expected = `exports.resolveRequestCreateUserRequest = input => {
	const req = new messages.CreateUserRequest();
	req.setName(input.name);
	req.setLastname(input.lastName);
	return req;
};
`;

	expect(r).toBe(expected);
});
