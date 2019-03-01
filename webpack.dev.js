const path = require('path')//导入node的path
const merge = require('webpack-merge');
const common = require('./webpack.common');

let devConfig = {
    mode:'development',//开发模式
    output:{
        filename:'main.js',//输出的文件名
        path: path.resolve(__dirname, 'dist'),
    },
    devtool:'inline-source-map',
    module: {
        rules: [
            {   test: /\.css$/,//正则匹配引入的是什么类型的文件
                use: ['style-loader','css-loader']//用数组中从右向左的去处理引入的文件
            },//开发环境css用style-loader和css-loader,生产环境是提出出单独的文件
        ]//rules数组是规则,其中的每一个对象都是一条规则
    },//module模块配置css
    devServer: {
            contentBase: './dist'
   },
};

module.exports = merge(common,devConfig)