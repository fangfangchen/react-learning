import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import CartButton from '../../components/CartButton';
import styles from './index.scss';

class Home extends React.Component {

  onJumpToOrderList = () => {
    this.props.history.push('/user/1')
  }

	render() {
		return (
			<div className={styles.homeWrapper}>
        <div className={styles.orderList}><a href="#/user/1">查看订单 >></a></div>
				<div className={classnames(styles.menu, 'one-pixel-border')}>
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
        <div className={styles.operation}>
          <button className="btn btn-sm btn-default">取消</button>
          <button className="btn btn-sm btn-primary">预定</button>
        </div>
			</div>
		);
	}
};

export default Home;
