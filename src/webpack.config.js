const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    '/app.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: __dirname
      }
    ]
  },
    sassLoader: {
    includePaths: [path.resolve(__dirname, "./scss")]
  },
  devServer: {
    contentBase: '../public'
  },
  plugins: (process.env.NODE_ENV === 'production') && [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ]
}