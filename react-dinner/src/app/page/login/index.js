import React from 'react';
import classnames from 'classnames';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './index.scss';

class Login extends React.Component {
	render () {
		return (
			<div className={styles.loginWrapper}>
				<Header />
				<div className={styles.main}>
					<form>
						<div className={styles.row}>
							<input type="text" placeholder="请输入账号" />
						</div>
						<div className={styles.row}>
							<input type="password" placeholder="请输入密码" />
						</div>

						<button className={classnames(styles.loginBtn, 'btn-primary')}>登录</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
};

export default Login;