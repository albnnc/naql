const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const absolutize = v => path.join(__dirname, v);

module.exports = {
  entry: {
    index: absolutize('src/index.ts'),
    'parsers/url/index': absolutize('src/parsers/url/index.ts'),
    'reformers/index': absolutize('src/reformers/index.ts'),
    'stringifiers/url/index': absolutize('src/stringifiers/url/index.ts'),
    'stringifiers/sql/index': absolutize('src/stringifiers/sql/index.ts'),
    'utils/index': absolutize('src/utils/index.ts')
  },
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
