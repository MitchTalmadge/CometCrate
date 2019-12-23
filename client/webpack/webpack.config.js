const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, '../src');
const outputPath = path.join(__dirname, '../dist');

const config = {
    cache: true,
    entry: {
        polyfills: path.join(srcPath, 'polyfills.ts'),
        vendor: path.join(srcPath, 'vendor/index.ts'),
        main: path.join(srcPath, 'main.ts')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.jsx'],
        modules: ['node_modules'],
        alias: {
            // Force all modules to use the same jquery version.
            'jquery': path.join(__dirname, '../node_modules/jquery/src/jquery'),
            'src': srcPath,
            '@': srcPath,
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: '@ngtools/webpack',
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.(component|directive)\.html$/,
                use: [
                    "to-string-loader",
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    },
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                },
                exclude: [/\.(component|directive)\.html$/]
            },
            {
                test: /\.(component|directive)\.css$/,
                use: ["to-string-loader", "css-loader"]
            },
            {
                test: /\.(component|directive)\.scss$/,
                use: [
                    "to-string-loader",
                    "css-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            prependData:
                                `
                                $env: ${process.env.NODE_ENV}; 
                                @import "@/app/styles/global/_global.scss";
                                `
                        }
                    }
                ],
            },
            {
                test: /\.css(\?v=[\d.]+)?$/,
                use: ["style-loader", "css-loader"],
                exclude: [/\.(component|directive)\.css$/]
            },
            {
                test: /\.scss(\?v=[\d.]+)?$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: [/\.(component|directive)\.scss$/]
            },
            {
                test: /\.xml$/,
                use: "xml-loader"
            },
            {
                test: /\.yaml/,
                use: ["json-loader", "yaml-loader"]
            },
            {
                test: /manifest\.json/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './resources/json/[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg|ico)(\?v=[\d.]+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 8192,
                            name: './resources/images/[hash].[ext]',
                        }
                    },
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)(\?v=[\d.]+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './resources/fonts/[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        // This plugin removes all un-used locales from moment (a nearly 200kb reduction).
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),

        // Aliases for JS libraries.
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "window.jQuery": 'jquery',
            tether: 'tether',
            Tether: 'tether',
            "window.tether": 'tether',
            "window.Tether": 'tether',
            Popper: 'popper.js'
        }),

        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html.ejs'),
            favicon: path.join(srcPath, 'assets/favicon.ico'),
            filename: path.join(outputPath, 'index.html'),
            inject: 'body',
            minify: {
                minifyCSS: true,
                minifyJS: true,
                removeComments: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true
            },
            chunks: ['polyfills', 'vendor', 'main'],
            chunksSortMode: 'manual'
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                main: {
                    name: "main",
                    minChunks: Infinity
                },
                vendor: {
                    name: "vendor",
                    minChunks: Infinity
                },
                polyfills: {
                    name: "polyfills",
                    minChunks: Infinity
                },
            }
        }
    },
    output: {
        path: outputPath,
        filename: './resources/js/[name]-[chunkhash].js',
        chunkFilename: './resources/js/[name]-[chunkhash].js',
        sourceMapFilename: './resources/js/[name]-[chunkhash].map'
    },
    node: {
        global: true,
        process: true,
        Buffer: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false,
        clearTimeout: true,
        setTimeout: true
    }
};

module.exports = config;
