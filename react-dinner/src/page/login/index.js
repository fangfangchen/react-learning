import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import * as actions from '../../actions/login';
import styles from './index.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    console.log(props);

  }

	render () {
    const { username, password, loginStatus, handleUserNameChange, handlePasswordChange, handleLogin } = this.props;
    let loginText = '';

    if (loginStatus === 1) {
      loginText = '登录成功！';
      setTimeout(() => {
        this.props.history.push('/');
      }, 1000);
    } else if (loginStatus == 0) {
      loginText = '登录失败！';
    } else if (loginStatus == 2) {
      loginText = '';
    }

		return (
			<div className={styles.loginWrapper}>
				<Header />
				<div className={styles.main}>
					<form>
            <p style={{ color: '#f02', fontSize: 14 }}>{loginText}</p>
						<div className={styles.row}>
							<input type="text" placeholder="请输入账号" value={username} onChange={(e) => {handleUserNameChange(e.target.value)}} />
						</div>
						<div className={styles.row}>
							<input type="password" placeholder="请输入密码" onChange={(e) => {handlePasswordChange(e.target.value)}} value={password} />
						</div>

						<button className={classnames(styles.loginBtn, 'btn-primary')} onClick={handleLogin}>登录</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
};

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  loginState: PropTypes.string
};

// 用于建立组件跟store的state的映射关系
const mapStateToProps =(state) => {
  return {
    username: state.login.username,
    password: state.login.password,
    loginStatus: state.login.loginStatus
  };
};

// 用于建立组件跟store.dispatch的映射关系
const mapDispatchToProps = (dispatch) => {
  return {
    handleUserNameChange: (username) => {
      return dispatch(actions.userNameChange(username));
    },
    handlePasswordChange: (password) => {
      return dispatch(actions.passWordChange(password));
    },
    handleLogin: () => {
      return dispatch(actions.login());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
