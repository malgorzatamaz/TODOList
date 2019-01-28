import React, { Component } from 'react';
import _ from 'lodash';
import Todo from './Todo';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions/actions';

class TodoList extends Component {
    render() {
        const { todos, deleteTodo } = this.props;
        return (
            <div className="todo-list">
                {_.map(todos, todo => (
                    <Todo deleteTodo={deleteTodo} todo={todo} key={todo.id} />
                ))}
            </div>
        );
    }
}

const mapDispatchToProps = {
    deleteTodo
};

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
