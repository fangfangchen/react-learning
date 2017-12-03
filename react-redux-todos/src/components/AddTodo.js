import React, { findDOMNode, Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
	handleClick() {
		const text = this.refs.input.value;
		this.props.onAddClick(text);
		this.refs.input.value = '';
	}

	render() {
		return (
			<div>
				<input type="text" ref="input" />
				<button onClick={e => this.handleClick(e)}>Add</button>
			</div>
		);
	}
};

AddTodo.PropTypes = {
	onAddClick: PropTypes.func.isRequired
}

export default AddTodo;