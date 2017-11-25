import React from 'react';
import { Link } from 'react-router'
import Progress from '../components/Progress';
import $ from 'jquery';
import jPlayer from '../../static/js/jquery.jplayer.min';
import './player.scss';

let duration = 0;

const REPEAT_TYPE = ['one', 'cycle', 'random'];
const Page = React.createClass({
	getInitialState() {
		return {
			progress: 0,
			volume: 0,
			leftTime: 1,
			isPlay: true,
			repeatType: REPEAT_TYPE[0]
		};
	},

	componentDidMount() {
		$(this.player)
			.jPlayer({
				ready: function () {
					$(this).jPlayer('setMedia', {
						mp3: 'http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a'
					}).jPlayer('pause');
				},
				vmode: 'window',
				smoothPlayBar: true
			})
			.bind($.jPlayer.event.timeupdate, e => {
				duration = e.jPlayer.status.duration;
				this.setState({
					progress: Math.round(e.jPlayer.status.currentPercentAbsolute),
					volume: e.jPlayer.options.volume * 100
				});
			});
	},

	componentWillUnmount() {
		$(this.player).unbind($.jPlayer.event.timeupdate);
	},

	play() {
		$(this.player).jPlayer(this.state.isPlay ? 'pause' : 'play');
		this.setState({
			isPlay: !this.state.isPlay
		});
	},

	prev() {

	},

	next() {

	},

	changeRepeat() {
		this.setState({
			repeatType: REPEAT_TYPE[1]
		});
	},

	handleProgressChange(progress) {
		$(this.player).jPlayer('play', duration * progress);
	},

	handleVolumeChange(volume) {
		$(this.player).jPlayer('volume', volume);
	},

	// 子组件与父组件通信
	render() {
		return(
			<div className="player-page">
        <h1 className="caption">
        	<Link to="/list">我的私人音乐坊 &gt;</Link>
        </h1>
        <div className="mt20 row">
        	<div className="controll-wrapper">
        		<h2 className="music-title">{this.props.currentMusitItem.title}</h2>
        		<h3 className="music-artist mt10">{this.props.currentMusitItem.artist}</h3>
        		<div className="row mt20">
        			<div className="left-time -col-auto">-{this.state.leftTime}</div>
        			<div className="volume-container">
        				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
        				<div className="volume-wrapper">
	                <Progress
										progress={this.state.volume}
										onProgressChange={this.handleVolumeChange}
										bgColor='#aaa'
	                />
        				</div>
        			</div>
        		</div>
        		<div style={{height: 10, lineHeight: '10px'}}>
              <Progress
								progress={this.state.progress}
								onProgressChange={this.handleProgressChange}
								bgColor="#f00"
							 />
							<div ref={player => this.player = player}></div>
        		</div>
        		<div className="mt35 row">
        			<div>
          			<i className="icon prev" onClick={this.prev}></i>
          			<i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
          			<i className="icon next ml20" onClick={this.next}></i>
        			</div>
        			<div className="-col-auto">
        				<i className={`icon repeat-${this.state.repeatType}`} onClick={this.changeRepeat}></i>
        			</div>
        		</div>
        	</div>
        	<div className="-col-auto cover">
        		<img src={this.props.currentMusitItem.cover} alt={this.props.currentMusitItem.title}/>
        	</div>
        </div>
    </div>
		);
	}
});

export default Page;