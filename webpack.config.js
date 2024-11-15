const TerserPlugin = require('terser-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');


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
    new JavaScriptObfuscator({
      rotateStringArray: true,
    }),
  ],
};
