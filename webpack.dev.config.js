const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    path.join(__dirname, 'src', 'index.js')
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.less$/,
      loaders: ["style-loader", "css-loder", "less-loader"]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./src/index.html"
    })
  ]
}