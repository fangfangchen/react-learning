import React, { Component, PropTypes } from 'react';

import Product from './Product';

export default class ProductItem extends Component {
	render() {
		const { title, price, inventory } = this.props.product;
		const action = <button>add to cart</button>;
		const addToCartAction = (
			<button onClick={this.props.onAddToCartClicked} disabled={inventory > 0 ? '' : 'disabled'}>
				{inventory > 0 ? 'Add to cart' : 'Sold out'}
			</button>
		);
		return(
			<Product title={title} price={price} inventory={inventory} action={addToCartAction} />
		);
	}
}

ProductItem.propTypes = {
	products: PropTypes.shape({
		title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
	}),
	onAddToCartClicked: PropTypes.func.isRequired
};
