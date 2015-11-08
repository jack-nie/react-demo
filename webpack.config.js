var webpack = require('webpack');
var htmlWebPackPlugin = require('html-webpack-plugin');
var path = require('path');
var SRC_PATH = path.join(__dirname, 'src');
var TARGET_PATH = path.join(__dirname, 'assets');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080', 
    'webpack/hot/only-dev-server',
    path.join(SRC_PATH, 'js', 'entry.js')
  ],
  output: {
    path: TARGET_PATH,
    filename: '[name].js',
    publicPath: ''
  },
  module: {
    loaders: [
      { test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader"  },
      { test: /\.png$/, exclude: /node_modules/, loader: "url-loader?limit=100000"  },
      { test: /\.jpg$/, exclude: /node_modules/, loader: "file-loader"  },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebPackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ]
};
