import { ADD_TODO, DELETE_TODO } from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
    todos: []
};

function todosApp(state = initialState, action) {
    const { todos } = state;

    switch (action.type) {
        case ADD_TODO:
            let id = 1;
            if (todos && todos.length > 0) id = _.get(_.last(todos), 'id') + 1;

            return {
                todos: [...todos, { id: id, text: action.payload }]
            };
        case DELETE_TODO:
            const newTodos = _.filter(todos, todo => todo.id !== action.id);
            return {
                todos: newTodos
            };
        default:
            return state;
    }
}

export default todosApp;
