import React from 'react';
import './Progress.scss';

class Progress extends React.Component {
	constructor(props) {
	  super(props);
	  this.handleChange = this.handleChange.bind(this);
	}

	defaultProps() {
		return {
			baColor: '#2f9842'
		};
	}

	handleChange(e) {
		const progressBar = this.progressBar;
		const progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
		this.props.onProgressChange(progress);
	}

	render() {
		return(
			<div className="component-progress" onClick={this.handleChange} ref={progressBar => this.progressBar = progressBar}>
				<div className="progress" style={{width: `${this.props.progress}%`, backgroundColor: this.props.bgColor}}></div>
			</div>
		);
	}
};

export default Progress;