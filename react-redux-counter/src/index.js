import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers';
import Counter from './components/Counter';

const store = createStore(counter);

const render = () => ReactDOM.render(
	<Counter
		value={store.getState()}
		onIncrement={() => store.dispatch({type: 'INCREMENT'})}
		onDecrement={() => store.dispatch({type: 'DECREMENT'})}
	/>,
	document.getElementById('root')
);

render();

// store.subscribe(listen);
// 监听state变化（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。
store.subscribe(render);