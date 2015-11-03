var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080', 
    'webpack/hot/only-dev-server',
    './src/js/entry.js' 
  ],
  output: {
    path: __dirname + '/assets/',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, exclude: /node_modules/, loader: "raw" },
      //{ test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
