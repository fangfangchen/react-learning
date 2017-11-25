import React from 'react';
import './ListItem.scss';
import PubSub from 'pubsub-js';

class Item extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	handlePlay(item) {
		PubSub.publish('PLAY_MUSIC', item);
	}

	handleDelete(item, e) {
		e.stopPropagation();
		alert(`你要删除 ${item.title} 音乐`);
		PubSub.publish('DELETE_MUSIC', item);
	}

	render() {
		const item = this.props.musicItem;
		return (
			<li className={`components-listitem row ${this.props.isFocus ? 'focus' : ''}`} onClick={() => this.handlePlay(item)}>
				<p><strong>{item.title}</strong> - {item.artist}</p>
				<p className="-col-auto delete" onClick={(e) => this.handleDelete(item, e)}></p>
			</li>
		);
	}
};

export default Item;