const config = require('./webpack.config.js');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');

config.mode = "production";

config.plugins.push(
    // AOT Compilation
    new AngularCompilerPlugin({
        hostReplacementPaths: {
            [path.join(__dirname, '../src/environments/environment.ts')]: path.join(__dirname, '../src/environments/environment.prod.ts')
        },
        mainPath: path.join(__dirname, '../src/main.ts'),
        nameLazyFiles: false,
        skipCodeGeneration: false,
        sourceMap: false,
        tsConfigPath: path.join(__dirname, '../tsconfig.json'),
    })
);

module.exports = config;
