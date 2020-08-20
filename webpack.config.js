const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
  mode: 'production',
  entry: './js/index.js',

  output: {
    path: path.resolve(__dirname, '/dist/js'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}