var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const museUiThemePath = path.join(
  __dirname,
  'node_modules',
  'muse-ui',
  'src/styles/themes/variables/default.less'
)
const prod = require('./config/prod');
const test = require('./config/test');
const dev = require('./config/dev');
const PUBLICPATH = process.env.NODE_ENV === 'production'? prod.PUBLICPATH: (process.env.NODE_ENV === 'testing' ? test.PUBLICPATH : dev.PUBLICPATH);
const VERSION = process.env.NODE_ENV === 'production'? prod.VERSION: (process.env.NODE_ENV === 'testing' ? test.VERSION : dev.VERSION);
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, `./${PUBLICPATH.replace(/\"/g, "")}/`),
    publicPath: `/${PUBLICPATH.replace(/\"/g, "")}/`,
    filename: `build.js?version=${VERSION.replace(/\"/g, "")}`
  },
  module: {
    loaders: [
      {
        test: /muse-ui.src.*?js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: [
              'vue-style-loader',
              'css-loader',
              {
                loader: 'less-loader',
                options: {
                  globalVars: {
                    museUiTheme: `'${museUiThemePath}'`,
                  }
                }
              }
            ]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lint: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'views': path.resolve(__dirname, 'src/views'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'api': path.resolve(__dirname, 'src/api'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'store': path.resolve(__dirname, 'src/store'),
      'router': path.resolve(__dirname, 'src/router'),
      'filters': path.resolve(__dirname, 'src/filters'),
      'muse-components': 'muse-ui/src'
    }
  },
  devServer: {
    contentBase: `./${PUBLICPATH.replace(/\"/g, "")}`,
    historyApiFallback: {
      index: `/${PUBLICPATH.replace(/\"/g, "")}/index.html`
    },
    port: 8080,
    noInfo: true,
    inline: true,
    hot: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'development') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': dev
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      inject: true
    }),
  ])
}
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false;
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': prod
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
