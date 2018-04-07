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


4.如何sass-rem全局化

依赖`sass-rem`基于`sass`实现的，所以只要在需要的地方引入。不过有个缺点是：`$rem-baseline: 10px;`也是要在引入`sass-rem`时定义，以后变更时需要每个地方修改下。
