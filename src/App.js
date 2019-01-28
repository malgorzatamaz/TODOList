import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import store from './redux/store';
import { Provider } from 'react-redux'

// dpienczykowski@gmail.com
// przerobić na reduxa, dodać testy, zrobić brancha

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AddTodo/>
                <TodoList />
            </Provider>
        );
    }
}

export default App;
