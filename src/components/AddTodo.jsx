import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/actions';

class AddTodo extends Component {
    state = {
        text: ''
    };

    textChanged = event => {
        this.setState({
            text: event.target.value
        });
    };

    addTodo = () => {
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        });
    };

    render() {
        const { text } = this.state;

        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter text..."
                    value={text}
                    onChange={this.textChanged}
                />
                <button onClick={this.addTodo}>Add</button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addTodo
};

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);
