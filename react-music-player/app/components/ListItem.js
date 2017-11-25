import React from 'react';
import './ListItem.scss';

class Item extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	handleDelete() {

	}

	render() {
		const items = this.props.musicItem;
		return (
			<li className={`components-listitem row ${this.props.isFocus ? 'focus' : ''}`}>
				<p><strong>{items.title}</strong> - {items.artist}</p>
				<p className="-col-auto delete" onClick={this.props.onDelete}></p>
			</li>
		);
	}
};

export default Item;