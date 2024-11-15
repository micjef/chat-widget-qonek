const TerserPlugin = require('terser-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const Dotenv = require('dotenv-webpack');


module.exports = {
  mode: 'production',
  entry: './chat-widget.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new Dotenv(),
    new JavaScriptObfuscator({
      rotateStringArray: true,
    }),
  ],
};
