import React, { PureComponent } from 'react';

import styles from './Header.scss';

class Footer extends PureComponent {
	render () {
		return(
			<div className={styles.header}>
				<p>MEETYOU DINNER</p>
			</div>
		);
	}
};

export default Footer;