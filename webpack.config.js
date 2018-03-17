const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    home: './index.js'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 9002
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './s.html'
    }),
    new StyleLintPlugin({
        files: '**/*.css'
    })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // loader: 'postcss-loader',
        // options: {
        //   sourceMap: true,
        //   config: {
        //       ctx: {
        //           cssnext: {
        //               warnForDuplicates: false
        //           },
        //           pxtorem: {
        //               propList: ['*'],
        //               rootValue: 75
        //           },
        //           cssnano: {}
        //       }
        //   },
        // }
      }
    ],
  },
}
