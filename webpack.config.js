const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { compilerOptions } = require('@nodegui/vue-nodegui/dist/vueLoader');

module.exports = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, './main.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue: path.resolve(__dirname, './node_modules/@nodegui/vue-nodegui/dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            compilerOptions,
          },
        },
      },
      {
        test: /\.node$/,
        use: [{ loader: 'node-loader' }, { loader: 'file-loader' }],
      },
      {
        test: /\.(png|jpe?g|gif|svg|bmp)$/i,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
});
