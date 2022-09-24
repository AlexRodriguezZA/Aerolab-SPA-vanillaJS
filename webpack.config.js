const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPluguin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',}
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebpackPluguin({
        patterns: [{ from: './src/styles/styles.css',
        to: '' }],
      })
  ]
}