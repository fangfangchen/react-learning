import React, { PureComponent } from 'react';
import classnames from 'classnames';

import styles from './index.scss';

class OrderList extends PureComponent {
  constructor(props) {
    super(props);

    console.log(props.match.url + ', ' + props.match.path);

    this.state = {};
  }

  render () {
    return (
      <div className={styles.userWrapper}>
        <div className={styles.main}>
          <img src="http://api.qrserver.com/v1/create-qr-code/?data=http://estatic.seeyouyima.com/rn.meiyou.com/index.html?path=%2Fcomponents%2Fbutton&size=150x150" width="150" height="150" />
          <div className={classnames(styles.order, 'one-pixel-border')}>
            <p>取餐号：20180313123456</p>
            <p>【华思露】沙茶牛肉<span>2</span>份</p>
          </div>
          <p className={classnames(styles.takeTime, 'gray')}>取餐时段：18:30 ~ 19:30</p>
        </div>
      </div>
    );
  }
};

export default OrderList;
