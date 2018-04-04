import React, { Component, PropTypes } from 'react';

import Product from './Product';

export default class CartItem extends Component {
	render() {
		const { title, price, quantity, onRemove } = this.props;
		return(
			<Product title={title} price={price} quantity={quantity} onClick={onRemove} />
		);
	}
}
