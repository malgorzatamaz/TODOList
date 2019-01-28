import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import _ from 'lodash';


class App extends Component {
    state = {
        todos: [
            { id: 1, text: 'todo1' },
            { id: 2, text: 'todo2' },
            { id: 3, text: 'todo3' }
        ]
    };

    addTodo = text => {
        const { todos } = this.state;
        const id = _.get(_.last(todos), 'id') + 1;

        console.log(text);

        this.setState({
            todos: [...todos, { id, text }]
        });
    };

    deleteTodo = id => {
        const { todos } = this.state;

        const newTodos = _.remove(todos, todo => todo.id !== id);
        this.setState({
            todos: newTodos
        });
    };

    render() {
        const { todos } = this.state;

        return (
            <div>
                <AddTodo addTodo={this.addTodo} />
                <TodoList todos={todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default App;
