const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssWriteSvg = require('postcss-write-svg');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoader = [
  {
    loader: 'style-loader'
  },
	{
		loader: 'css-loader',
		options: {
			modules: true,
			camelCase: true
		}
	},
  {
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
          }),
          postcssWriteSvg({
            utf8: true
          })
        ]
      }
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
				use: cssLoader
			},
			{
				test: /\.scss$/,
				use: scssLoader
			}
		]
	}
};
