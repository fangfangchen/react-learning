import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { getCartProducts, getTotal } from '../reducers';
import { removeFromCart, checkout } from '../actions';
import Thead from './Thead';

class Cart extends Component {
	render() {
		const { products, removeFromCart, total, checkout, checkoutPending } = this.props;
		const hasProducts = products.length;
		const checkoutAllowed = hasProducts && !checkoutPending;

		const content = 
			products.map(product => {
				const { id, title, price, quantity } = product;
				return (
					<CartItem
						key={id}
						title={title}
						price={price}
						quantity={quantity}
						onRemove={() => removeFromCart(product.id)} />
				);
			});

		return(
			<div>
				<h3>Cart</h3>
				{
					hasProducts ? 
						<table>
							<Thead />
							<tbody>
								{content}
							</tbody>
						</table> : <p>Please add some products to cart.</p>
				}
				<p style={{ marginTop: 10 }}>Total: {total}</p>
				<div style={{ marginTop: 10 }}>
					<button onClick={checkout} disabled={checkoutAllowed ? '' : 'disabled'}>checkout</button>
				</div>
			</div>
		);
	}
}

Cart.propTypes = {
  // data
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  total: PropTypes.string,
  //error: PropTypes.string,
  checkoutPending: PropTypes.bool,

  // actions
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}


function mapStateToProps(state) {
	return {
		products: getCartProducts(state),
		total: getTotal(state)
	}
}

export default connect(mapStateToProps, { removeFromCart, checkout })(Cart);
