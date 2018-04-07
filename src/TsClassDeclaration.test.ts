import { TsClassDeclaration } from "./TsClassDeclaration";
import { TsMethodDeclaration } from "./TsMethodDeclaration";

it("Should render basic class declaration", () => {
	const customMethod = new TsMethodDeclaration();
	customMethod.name = "createUser";

	const customClassDeclaration = new TsClassDeclaration();
	customClassDeclaration.name = "UserService";
	customClassDeclaration.methods.push(customMethod);

	const expected = `declare class UserService {
	createUser();
}`;

	expect(customClassDeclaration.render()).toBe(expected);
});
