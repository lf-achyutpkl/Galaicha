var webpack = require('webpack');

//plugins
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"]},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader', query: {name: 'fonts/[name].[ext]'}},
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
