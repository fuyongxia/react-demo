/**
 * Created by fuyongxia on 2018/8/29.
 */
/**
 * Created by fuyongxia on 2018/8/17.
 */
var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var MiniCssExtractPlugin=require('mini-css-extract-plugin');
var autoprefixer = require('autoprefixer');
const ManifestPlugin = require('webpack-manifest-plugin');
var UglifyJsPlugin=require('uglifyjs-webpack-plugin');
var OptimizeCSSAssetsPlugin=require("optimize-css-assets-webpack-plugin");
// const pkgJson=require('./package.json')
var config = {
    mode: "production",
    entry: {
        libs: ['react','react-dom'],
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath:'/',
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-decorators-legacy', 'transform-class-properties']
                    }
                }
            },
            {
                test: /\.(css|scss)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            plugins: () => [
                                // require('postcss-flexbugs-fixes'),
                                autoprefixer
                            ]
                        }

                    }
                ]
                
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/[name].[hash:8].[ext]',
                }
            }

        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: __dirname + '/public/index.html'
        }),
        //将css代码单独提取出来生成一个文件
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',//ExtractTextPlugin4,不支持contenthash,所以舒勇miniCssExtractPlugin

        }),

        new ManifestPlugin({
            fileName: 'asset-manifest.json',
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_debugger: true,
                        drop_console: true

                    }

                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        // splitChunks: {
        //     cacheGroups: {
        //         // styles: {
        //         //     name: 'styles',
        //         //     test: /\.css$/,
        //         //     chunks: 'all',
        //         //     enforce: true
        //         // }
        //     }
        // }

        // splitChunks: {
        //     cacheGroups: {
        //         commons: {
        //             chunks: "all",
        //             name: 'commons',
        //           
        //             minSize: 0,
        //             // 至少为两个 chunks 的公用代码
        //             minChunks: 2
        //         }
        //     }
        // }

    },

};
module.exports = config;