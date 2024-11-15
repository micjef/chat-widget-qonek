const TerserPlugin = require('terser-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const Dotenv = require('dotenv-webpack');


module.exports = {
  mode: 'production',
  entry: './chat-widget.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    library: 'initChatWidget', // Expose as a global variable
    libraryTarget: 'window',
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
  resolve: {
    fallback: {
      "path": false,
      "os": false,
      "crypto": false
    }
  }
};
