import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { getCartProducts } from '../reducers';
import { removeFromCart } from '../actions';

class Cart extends Component {
	render() {
		const { products, removeFromCart } = this.props;

		return(
			<div>
				<h3>Cart</h3>
				<p>Please add some products to cart.</p>
				{products.map(product => {
					const { id, title, price, quantity } = product;
					<CartItem
						key={id}
						title={title}
						price={price}
						quantity={quantity}
						onRemove={() => removeFromCart(product.id)} />
				})}
				<button>checkout</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: getCartProducts(state)
	}
}

function mapDispatchToProps() {
	return { removeFromCart };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
