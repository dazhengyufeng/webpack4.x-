const path = require('path')//导入node的path
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',//入口enter文件
    module: {
        rules: [
            // {
            //     loader: 'file-loader',
            //     options: {},
            // },//打包图片
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    },//优化图片为base64,url-loader可以代替file-loader
                ]
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },//babel把es6转es5(失败了)
        ]
    },
    plugins: [
        /*自动添加带哈希值的css和js*/
        new HtmlWebpackPlugin({
            title:'img',
            filename:'index.html',//最终生成的名字
            template: path.resolve(__dirname, 'src/main.html'),
        }),
        /*清楚dist目录*/
        new CleanWebpackPlugin(['dist/*']),
    ],
};