Dinner demo build bu React.

问题：

1.刷新页面显示`Cannot GET /login`

[When I refresh the browser Cannot GET thiscurrent router](https://github.com/ReactTraining/react-router/blob/v4.1.1/FAQ.md#why-doesnt-my-application-render-after-refreshing)


2.css-modules 大小写

	{
	  test: /\.css$/,
	  loader: 'style!css?modules&camelCase',
	}


3.`C:\Users\Administrator\Desktop\react-learning\react-dinner\node_modules\webpack-dev-server\bin\webpack-dev-server.js:393
    throw e;
    ^

Error: No loader specified`


丢失了`sass-loader`。
`const scssLoader = cssLoader.concat({
  options: {
    // like handwriting style, other options are compact,nested and compressed
    outputStyle: 'expanded'
  }
});`
