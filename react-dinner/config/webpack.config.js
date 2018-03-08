const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoader = [
	{
		loader: 'css-loader',
		options: {
			modules: true,
			camelCase: true
		}
	}
];

const scssLoader = cssLoader.concat({
	loader: 'sass-loader',
  options: {
    // like handwriting style, other options are compact,nested and compressed
    outputStyle: 'expanded'
  }
});

module.exports = {
	entry: path.resolve(__dirname, '../src/app/index.js'),
  output: {
    publicPath: '/dist',
    filename: './app.js'
  },
  module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'stage-0', 'react']
						}
					}
				]
			},
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
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('app.css')
	]
};