var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000', 
    'webpack/hot/only-dev-server',
    './build/js/entry.js' 
  ],
  output: {
    path: __dirname + '/app/',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
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
