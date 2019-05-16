const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const absolutize = v => path.join(__dirname, v);

module.exports = {
  entry: absolutize('src/index.ts'),
  resolve: {
    extensions: ['.ts']
  },

  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'none' : 'cheap-eval-source-map',

  module: {
    rules: [{ test: /\.ts?$/, loader: 'ts-loader' }]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      cwd: process.cwd()
    })
  ],

  output: {
    path: absolutize('dist'),
    libraryTarget: 'commonjs'
  }
};
