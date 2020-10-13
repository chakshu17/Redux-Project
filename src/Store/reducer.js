const intialState = {
	todo: ["Chakshu", "Kishnani", "SON_GOKU"],
};

const reducer = (state = intialState, action) => {
	if ((action.type = "add")) {
		let newTodo = [];
		newTodo = state.todo;

		newTodo.push(action.value);
		console.log(newTodo);

		return {
			...state,
			todo: newTodo,
		};
	} else {
		return state;
	}
};

export default reducer;
