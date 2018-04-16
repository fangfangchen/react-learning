import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';

import CartButton from '../../components/CartButton';
import styles from './index.scss';
import * as actions from '../../actions/home';

class Home extends React.Component {

  onJumpToOrderList = () => {
    this.props.history.push('/user/1');
  }

	render() {
    const { lists, add, minus, order, cancel } = this.props;

		return (
			<div className={styles.homeWrapper}>
        <div className={styles.orderList}><a href="#/user/1">查看订单 >></a></div>
				<div className={classnames(styles.menu, 'one-pixel-border')}>
					<ul>
            {lists.map(list => {
              return <li key={list.id}>
                <div className={styles.menuInfo}>
                  <div className={styles.menuImg}>
                    <img src={list.image} />
                  </div>
                  <div className={styles.menuName}>{list.name}</div>
                </div>
                <div className={styles.menuOperate}>
                  <CartButton add={() => add(list.id)} minus={() => minus(list.id)} value={list.number || 0} />
                </div>
              </li>
            })}
          </ul>
        </div>
        <div className={styles.operation}>
          <button className="btn btn-sm btn-default" onClick={cancel}>取消</button>
          <button className="btn btn-sm btn-primary" onClick={order}>预定</button>
        </div>
			</div>
		);
	}
};


function mapStateToProps(state) {
  const orderList = state.home.orderList;
  const lists = state.home.lists;
  return {
    lists: lists.map(list => {
      const curOrder = orderList[list.id]
      if (curOrder) {
        return {
          ...list,
          number: curOrder
        };
      }
      return list;
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (...args) => dispatch(actions.add(...args)),
    minus: (...args) => dispatch(actions.minus(...args)),
    order: (...args) => dispatch(actions.order(...args)),
    cancel: (...args) => dispatch(actions.cancel(...args))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
