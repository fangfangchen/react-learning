import { ADD_TODO, TOGGLE_TODO, COMPLETE_TODO } from '../actions';

function todos(state = [], action) {
	switch(action.type) {
		case ADD_TODO:
			return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
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

		case COMPLETE_TODO:
			return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
			break;

		default:
			return state;
	}
}

export default todos;