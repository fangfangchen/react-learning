import React, { Component } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <hr/>
        <ProductList />
        <hr/>
        <Cart />
      </div>
    )
  }
}
