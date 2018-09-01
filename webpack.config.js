/**
 * Created by fuyongxia on 2018/8/17.
 */

var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var autoprefixer = require('autoprefixer')
var config = {
    mode: "development",
    devtool: "source-map",//方便调试
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
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
                        plugins: ['transform-decorators-legacy', 'transform-class-properties', 'transform-runtime']
                    }
                }
            },
            {
                test: /\.(css|scss)/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: 'css-loader'
                    },
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

        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html'
        }),
        //启用热加载，否则会报错Hot Module Replacement is disabled
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
    ],
    devServer: {
        contentBase: "public", //本地服务器所加载的页面所在的目录
        // colors: true, //终端中输出结果为彩色
        historyApiFallback: {
            // Paths with dots should still use the history fallback.
            // See https://github.com/facebookincubator/create-react-app/issues/387.
            disableDotRule: true,
        },
        // inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
};
module.exports = config;