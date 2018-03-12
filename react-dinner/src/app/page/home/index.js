import React from 'react';
import { Link } from 'react-router-dom';

import CartButton from '../../components/CartButton';
import styles from './index.scss';

class Home extends React.Component {
	render() {
		return (
			<div className={styles.homeWrapper}>
				<div className={styles.menu}>
					<ul>
						<li>
              <div className={styles.menuInfo}>
  							<div className={styles.menuImg}>图片</div>
  							<div className={styles.menuName}>菜名</div>
              </div>
							<div className={styles.menuOperate}>
                <CartButton />
              </div>
						</li>
            <li>
              <div className={styles.menuInfo}>
                <div className={styles.menuImg}>图片</div>
                <div className={styles.menuName}>菜名</div>
              </div>
              <div className={styles.menuOperate}>
                <CartButton />
              </div>
            </li>
            <li>
              <div className={styles.menuInfo}>
                <div className={styles.menuImg}>图片</div>
                <div className={styles.menuName}>菜名</div>
              </div>
              <div className={styles.menuOperate}>
                <CartButton />
              </div>
            </li>
					</ul>
				</div>
			</div>
		);
	}
};

export default Home;
