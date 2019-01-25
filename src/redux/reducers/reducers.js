import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO } from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
    todos: [
        { id: 1, text: 'todo1' },
        { id: 2, text: 'todo2' },
        { id: 3, text: 'todo3' }
    ]
};

function todosApp(state = initialState, action) {
    const { todos } = state;

    switch (action.type) {
        case ADD_TODO:
            const id = _.get(_.last(todos), 'id') + 1;

            return {
                todos: [...todos, { id: id, text: action.payload }]
            };
        case DELETE_TODO:
            const newTodos = _.remove(todos, todo => todo.id !== action.id);
            return {
                todos: newTodos
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todosApp
});
export default rootReducer;
