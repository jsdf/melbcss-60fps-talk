var makeHotSiteConfig = require('hot-site/makeConfig');

module.exports = makeHotSiteConfig({
  devtool: 'cheap-eval-sourcemap',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: 'node_modules',
      }
    ],
  },
});