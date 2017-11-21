const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

var cssLoader = [
  {
    loader: 'css-loader'
  }, {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: function () {
        return [
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions'
            ]
          })
        ]
      }
    }
  }
];

const scssLoader = cssLoader.concat([
	{
		loader: 'sass-loader',
		options: {
			outputStyle: 'expanded'
		}
	}
]);

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		path.resolve(__dirname, './app/index.js'),
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'app.js',
		publicPath: '/'
	},
	// devServer: {
	//   contentBase: path.join(__dirname, "dist"),
	//   compress: true,
	//   port: 3000
	// },
	module: {
		rules: [
			{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssLoader
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: scssLoader
        })
      },
			{
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true'
          }
        ],
        exclude: /node_modules/
      }
		]
	},
	plugins: [
		new ExtractTextPlugin('app.css'),
		// 开启全局的模块热替换（HMR）
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
};
