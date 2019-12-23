const config = require('./webpack.config.js');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');

config.mode = "development";

config.plugins.push(
    // JIT Compilation
    new AngularCompilerPlugin({
        mainPath: path.join(__dirname, '../src/main.ts'),
        nameLazyFiles: true,
        skipCodeGeneration: true,
        sourceMap: true,
        tsConfigPath: path.join(__dirname, '../tsconfig.json'),
    })
);

config.devServer = {
    contentBase: config.output.path,
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    port: 9000,
    proxy: {
        '/api': 'http://localhost:3000'
    }
};

config.devtool = 'source-map';

module.exports = config;
