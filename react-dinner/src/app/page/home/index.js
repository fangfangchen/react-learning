import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.scss';

class Home extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Link to="/login">登录</Link>
				</div>
				<div className={styles.menu}>
					<ul>
						<li>
							<div className="menu-img">图片</div>
							<div className="menu-info">菜名</div>
							<div className="menu-operate">按钮</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default Home;