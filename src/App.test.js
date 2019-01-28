import React from 'react';
import configureStore from 'redux-mock-store';
import todosApp from './redux/reducers/reducers';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

import { addTodo, deleteTodo } from './redux/actions/actions';
import { ADD_TODO } from './redux/actions/actionTypes';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import './setupTests.js';

describe('redux tests', () => {
    const initialState = {
        todos: [
            { id: 1, text: 'todo1' },
            { id: 2, text: 'todo2' },
            { id: 3, text: 'todo3' }
        ]
    };

    it('checks todos rendering with redux', () => {
        const mockStore = configureStore();
        const store = mockStore(initialState);
        const container = mount(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );

        expect(container.find(Todo).length).toEqual(3);
    });

    it('checks addTodo action', () => {
        const text = 'Todo';
        const expectedAction = {
            type: ADD_TODO,
            payload: text
        };
        expect(addTodo(text)).toEqual(expectedAction);
    });

    it('checks if addTodo is working', () => {
        const text = 'Todo';
        const testTodos = todosApp(undefined, addTodo(text));
        expect(testTodos).toEqual({
            todos: [{ id: 1, text: 'Todo' }]
        });
    });

    it('checks if deleteTodo is working', () => {
        const newState = todosApp(initialState, deleteTodo(1));
        expect(newState).toEqual({
            todos: [{ id: 2, text: 'todo2' }, { id: 3, text: 'todo3' }]
        });
    });

    it('checks store actions', () => {
        const mockStore = configureStore();
        const store = mockStore();

        store.dispatch(addTodo('text'));
        expect(store.getActions()).toEqual([
            {
                type: ADD_TODO,
                payload: 'text'
            }
        ]);
    });
});
