const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    // polyfills: './src/polyfills.js',
    app: './src/index.js'
  },
  // entry: {
  //   // app: './src/index.js',
  //   // print: './src/print.js',
  //   // app: './src/index.js'
  //   index: './src/index.js',
  //   // another: './src/another-module.js'
  // },
  devtool: 'source-map',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader']
  //     }
  //   ]
  // },
  module: {
    rules: [
      // {
      //   test: require.resolve('index.js'),
      //   use: 'imports-loader?this=>window'
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new UglifyJsPlugin()
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'Caching'
    // }),
    // new webpack.HashedModuleIdsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'runtime'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement'
    // }),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports = config;
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
// const path = require('path')
//
// const serverConfig = {
//   target: 'node',
//   entry: {
//     page1: './page1.js'
//   },
//   output: {
//     path: __dirname + '/build',
//     filename: 'lib.node.js'
//   }
// }
//
// const clientConfig = {
//   target: 'web',
//   entry: {
//     page1: './page1.js'
//   },
//   output: {
//     path: __dirname + '/build',
//     filename: 'lib.js'
//   }
// };
//
// module.exports = [serverConfig, clientConfig];
// module.exports = {
//   entry: {
//     page1: './page1.js',
//     page2: './page2.js',
//     page3: './page3.js'
//   },
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/build'
//   },
//   resolve: {
//     extensions: ['', '.coffee', '.js']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader'
//       },
//       {
//         test: /\.css$/,
//         use: 'css-loader'
//       },
//       {
//         test: /\.ts$/,
//         use: 'ts-loader'
//       }
//     ]
//   },
//   plugins: [
//     new webpack.optimize.UglifyJsPlugin(),
//     new HtmlWebpackPlugin({template: './src/index.html'})
//   ]
// }
