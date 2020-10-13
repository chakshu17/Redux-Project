import React from "react";
import "./App.css";
import ToDoInput from './component/toDo'
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Store/reducer";

function App() {
	const store = createStore(reducer);
	return (
		<Provider store={store}>
			<div className="App">
				<ToDoInput />
			</div>
		</Provider>
	);
}

export default App;
