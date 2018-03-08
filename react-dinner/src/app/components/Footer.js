import React, { PureComponent } from 'react';
import styles from './Footer.scss';

class Footer extends PureComponent {
	render () {
		return(
			<div className={styles.footer}>
				<p>Copyright Chan.</p>
			</div>
		);
	}
};

export default Footer;