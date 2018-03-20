import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import styles from './index.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      username: '12',
      password: ''
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleLogin = () => {
    this.props.login();
  }

	render () {
		return (
			<div className={styles.loginWrapper}>
				<Header />
				<div className={styles.main}>
					<form>
						<div className={styles.row}>
							<input type="text" placeholder="请输入账号" value={this.state.username} onChange={this.handleUserNameChange} />
						</div>
						<div className={styles.row}>
							<input type="password" placeholder="请输入密码" onChange={this.handlePasswordChange} value={this.state.password} />
						</div>

						<button className={classnames(styles.loginBtn, 'btn-primary')} onClick={this.handleLogin}>登录</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
};

const mapStateToProps =(state) => ({
  username: state.username,
  password: state.password
});

function mapDispatchToProps(dispatch) {
  return {
    login : function() {
      return dispatch({type: 'USER_LOGIN'});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
