import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { GET_ALL_PRODUCTS, addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';

class ProductList extends Component {
	render() {
		const { products, addToCart } = this.props;
		return (
			<div>
        <h3>Products</h3>
        <table>
					<thead>
						<tr>
							<th width="150">名称</th>
							<th width="50">价格</th>
							<th width="50">数量</th>
							<th width="80">操作</th>
						</tr>
					</thead>
					<tbody>
						{products.map(product => (
							<ProductItem
								key={product.id}
								product={product}
								onAddToCartClicked={() => addToCart(product.id)} />
						))}
					</tbody>
				</table>	
			</div>
		);
	}
}


ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    }),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		products: getVisibleProducts(state.products)
	};
}

function mapDispatchToProps(dispatch) {
	return { addToCart };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
