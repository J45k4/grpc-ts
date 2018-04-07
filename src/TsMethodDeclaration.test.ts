import { TsMethodDeclaration } from "./TsMethodDeclaration";

it("Should render basic method declaration without args and returnvalue", () => {
	const customMethod = new TsMethodDeclaration();
	customMethod.name = "createUser";

	expect(customMethod.render()).toBe("createUser();");
});
