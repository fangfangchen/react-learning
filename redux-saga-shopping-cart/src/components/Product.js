import React, { Component, PropTypes } from 'react';

export default class Product extends Component {
	render() {
		const { title, price, inventory, action } = this.props;
		return(
			<tr>
				<td>{title}</td>
				<td>{price}</td>
				<td>{inventory}</td>
				<td>{action}</td>
			</tr>
		);
	}
}

Product.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number,
	inventory: PropTypes.number,
	action: React.PropTypes.node
};