export const ADD = "add";

export const actionCreater = (value) => {
	if (value === undefined) {
		value: "Chakshu";
	}
	return {
		type: ADD,
		value: value,
	};
};
