import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    deleteTodo = id => {
        const { todo, deleteTodo } = this.props;
        deleteTodo(todo.id);
    };

    render() {
        const { todo } = this.props;
        return (
            <div className="todo">
                <span className="todo__text">{todo.text}</span>
                <div className="todo__button" onClick={this.deleteTodo}>
                    Delete
                </div>
            </div>
        );
    }
}

export default Todo;
