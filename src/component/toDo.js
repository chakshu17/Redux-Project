import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from '../Store/action'
import ToDoList from "./toDoList";
export class ToDoInput extends Component {
	toDoItem;

	onChangeHandler(event) {
		this.toDoItem = event.target.value;
	}
	onAddTodo(){
		// console.log('helo');
		 this.props.add(this.toDoItem)
	}
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.toDoItem}
					onChange={(event) => this.onChangeHandler(event)}
				/>
				<button onClick={()=>this.onAddTodo()} >Add</button>
				<ToDoList list={this.toDoItem} />
			</div>
		);
	}
}

const mapDispatchtoProps= (dispatch) =>{
	return{
		add:(value)=>dispatch(action.actionCreater(value))
	}
}
export default connect(null,mapDispatchtoProps)(ToDoInput);
