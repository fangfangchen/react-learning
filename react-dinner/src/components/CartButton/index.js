import React, { PureComponent } from 'react';

import styles from './index.scss';

class CartButton extends PureComponent {
  render() {
    const { add, minus, value } = this.props;

    return (
      <div className={styles.cart}>
        <button className={styles.cartBtn} onClick={minus} disabled={value <= 0 ? 'disabled' : ''}>-</button>
        <input type="text" value={value} />
        <button className={styles.cartBtn} onClick={add} disabled={value >= 2 ? 'disabled' : ''}>+</button>
      </div>
    );
  }
};

export default CartButton;
