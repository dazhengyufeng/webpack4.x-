const path = require('path')//导入node的path
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common');

let prodConfig = {
    mode:'production',//生产模式
    output:{
        filename:'main.[hash].js',//输出的文件名
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            },
        ]
    },
    plugins: [
        /*抽离css文件*/
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
    ],
};

module.exports = merge(common,prodConfig)