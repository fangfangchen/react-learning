import React from 'react';
import Header from './components/Header';
import $ from 'jquery';
import jPlayer from '../static/js/jquery.jplayer.min';
import PubSub from 'pubsub-js';
import { MUSIC_LIST } from './config/musicList';


const REPEAT_TYPE = ['once', 'cycle', 'random'];
const App = React.createClass({
	getInitialState() {
		return {
			currentMusitItem: MUSIC_LIST[0],
			listItem: MUSIC_LIST,
			repeatType: REPEAT_TYPE[0]
		};
	},

	playMusic(musitItem) {
		$('#player').jPlayer('setMedia', {
			mp3: musitItem && musitItem.file
		}).jPlayer('play');

		this.setState({
			currentMusitItem: musitItem
		});
	},

	playNext(type = 'next') {
		const index = this.findMusicIndex(this.state.currentMusitItem);
		let len = this.state.listItem.length;
		let newIndex = null;
		if (type == 'next') {
			newIndex = (index + 1) % len;
		} else {
			newIndex = (index - 1 + len) % len;
		}
		this.playMusic(this.state.listItem[newIndex]);
	},

	findMusicIndex(item) {
		return this.state.listItem.indexOf(item);
	},

	playWhenEnd(repeatType) {
		switch (repeatType) {
			case 'once':
				this.playMusic(this.state.currentMusitItem);
				break;
			case 'cycle':
				let index = this.findMusicIndex(this.state.currentMusitItem);
				let newIndex = (index + 1) % this.state.listItem.length;
				this.playMusic(this.state.listItem[newIndex]);
				break;
			case 'random':
				let random = parseInt(Math.random() * this.state.listItem.length, 10);
				this.playMusic(this.state.listItem[random]);
				break;
		}
	},

	componentDidMount() {
		$('#player')
			.jPlayer({
				vmode: 'window',
				smoothPlayBar: true
			})
			.bind($.jPlayer.event.ended, e => {
				this.playWhenEnd(this.state.repeatType);
			});
		this.playMusic(this.state.currentMusitItem);

		PubSub.subscribe('PLAY_MUSIC', (msg, item) => {
			this.playMusic(item);
		});

		PubSub.subscribe('DELETE_MUSIC', (msg, deleteItem) => {
			this.setState({
				listItem: this.state.listItem.filter(item => {
					return item !== deleteItem;
				})
			});
			if (deleteItem == this.state.currentMusitItem) {
				this.playNext();
			}
		});

		PubSub.subscribe('PLAY_PREV', () => {
			this.playNext('prev');
		});

		PubSub.subscribe('PLAY_NEXT', () => {
			this.playNext();
		});

		PubSub.subscribe('REPEAT_TYPE', () => {
			let index = REPEAT_TYPE.indexOf(this.state.repeatType);
			let newIndex = (index + 1) % REPEAT_TYPE.length;
			this.setState({
				repeatType: REPEAT_TYPE[newIndex]
			});
		});
	},

	componentWillUnMount() {
		PubSub.unsubscribe('PLAY_MUSIC');
		PubSub.unsubscribe('DELETE_MUSIC');
		PubSub.unsubscribe('PLAY_PREV');
		PubSub.unsubscribe('PLAY_NEXT');
		PubSub.unsubscribe('REPEAT_TYPE');
		PubSub.unsubscribe('REPEAT_TYPE');
		$('player').bind($.jPlayer.event.ended);
	},

	// 子组件与父组件通信
	render() {
		return(
			<div>
				<Header />
				{ React.cloneElement(this.props.children, this.state) }
			</div>
		);
	}
});

export default App;