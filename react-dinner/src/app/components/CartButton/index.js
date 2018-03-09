import React, { PureComponent } from 'react';

import styles from './index.scss';

class CartButton extends PureComponent {
  render() {
    return (
      <div className={styles.cart}>
        <button className={styles.cartBtn}>-</button>
        <input type="text" value="0" />
        <button className={styles.cartBtn}>+</button>
      </div>
    );
  }
};

export default CartButton;
