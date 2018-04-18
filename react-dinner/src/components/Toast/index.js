import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './index.scss';

function ToastElem(props) {
  return(
    <div className={styles.toast}>{props.message}</div>
  );
}

class Toast {
  constructor() {
    this.target = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(this.target);
    this.duration = 2000;
  }

  show = (msg) => {
    ReactDOM.render(<ToastElem message={msg} />, this.target);

    setTimeout(() => {
      this.hide();
    }, this.duration);

    // return new Promise(resolve => {
    //   setTimeout(() => resolve(), 100)
    // });
  }

  hide = () => {
    ReactDOM.unmountComponentAtNode(this.target);
  }
}

export default new Toast();
