import React from 'react';
import ListItem from '../components/ListItem';

const MusicList = React.createClass({
	handleDelete(index) {
		console.log(`delete: ${index}`);
	},

	render() {
		let list = this.props.listItem.map((item, index) => {
			return <ListItem key={item.id} musicItem={item} isFocus={item == this.props.currentMusitItem} onDelete={() => this.handleDelete(index)} />;
		});
		return(
			<div>{list}</div>
		);
	}
});

export default MusicList;