import { ADD_TODO, TOGGLE_TODO } from '../actions';

function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO:
			return Object.assign({}, state, {
				todos: [
					...state,
					{
						text: action.text,
						completed: false
					}
				]
			});
			break;

		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.map((todo, index) => {
					if (index == todo.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						})
					}
					return todo;
				})
			});
			break;

		default:
			return state;
	}
}

export default todos;