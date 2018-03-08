import React from 'react';

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
						<div className="row">
							<input type="text" />
						</div>
						<div className="row">
							<input type="password" />
						</div>

						<button>登录</button>
					</form>
				</div>
				<Footer />
			</div>			
		);
	}
};

export default Login;
