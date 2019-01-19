import React, { Component } from 'react';
import _ from 'lodash';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return (
            <div>
                {_.map(todos, todo => (
                    <Todo
                        deleteTodo={this.props.deleteTodo}
                        todo={todo}
                        key={todo.id}
                    />
                ))}
            </div>
        );
    }
}

export default TodoList;
