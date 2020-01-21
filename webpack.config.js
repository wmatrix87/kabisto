const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extensions = ['*', '.js', '.jsx', '.css', '.scss', '.png'];

const DEVELOPMENT = 'development';
const isDevelopment = process.env.NODE_ENV === DEVELOPMENT;

module.exports = {
  resolve: {
    extensions,
  },
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'inline-cheap-module-source-map' : 'source-map',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index-bundle.js',
  },
  devServer: {
    stats: {
      children: false,
      maxModules: 0,
    },
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
