import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartButton from '../../components/CartButton';
import styles from './index.scss';

class Home extends React.Component {
	render() {
		return (
			<div className={styles.homeWrapper}>
        <Header />
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
        <Footer />
			</div>
		);
	}
};

export default Home;