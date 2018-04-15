export const capitalizeFirstLetter = s => {
	return s.charAt(0).toUpperCase() + s.slice(1);
};

export const deCapalizeFirstLetter = s => {
	return s.charAt(0).toLowerCase() + s.slice(1);
};

export const capitilizeOnlyFirstLetter = s => {
	const newS = s.toLowerCase();
	return exports.capitalizeFirstLetter(newS);
};
