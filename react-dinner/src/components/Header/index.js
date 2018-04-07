import React, { PureComponent } from 'react';

import styles from './index.scss';

class Footer extends PureComponent {
	render () {
		return(
			<div className={styles.header}>
				<p onClick={e => console.log(e)}>
          <a href="#/">MEETYOU DINNER</a>
        </p>
			</div>
		);
	}
};

export default Footer;
