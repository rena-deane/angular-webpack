module.exports = {

  context: __dirname + '/src',
  entry: './app.js',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        loader: 'babel'
      },
      { test: /\.scss/,
        exclude: '/node_modules',
        loader: 'style!css!sass'
      },
      { test: /\.json/,
        exclude: '/node_modules',
        loader: 'json'
      }
    ]
  }

}