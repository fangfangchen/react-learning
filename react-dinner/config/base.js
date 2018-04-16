const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssWriteSvg = require('postcss-write-svg');

const cssLoader = [
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
      plugins: function() {
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
        ],
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
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/index.js')
  ],
  output: {
    publicPath: '/dist',
    path: path.resolve(__dirname, '../dist'),
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
              presets: ['es2015', 'stage-0', 'react'],
              plugins: [
                ["transform-es2015-for-of", { "loose": true }]
              ]
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
