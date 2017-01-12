var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var html = require('html-withimg-loader');

var plugins = [];

if (process.argv.indexOf('--colors') > -1) { //生产环境
    plugins.push(new webpack.DefinePlugin({ //编译成生产版本
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
}

plugins.push(new ExtractTextPlugin('[name]/[name].css')); //css单独打包

plugins.push(new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
    filename: __dirname + '/paibotMB/index.html', //生成的html存放路径，相对于 path
    template: './index.html', //html模板路径
    inject: true
}));
plugins.push( new HtmlWebpackPlugin({
        template: 'html-withimg-loader!./index.html',
        filename: __dirname + '/paibotMB/index.html'
}));

module.exports = {
    watch: true,
    entry: {
        index: './src/index/index.js' //编译的入口文件
    },
    output: {
        publicPath: '/paibotMB/', //静态资源访问路径
        path: __dirname + '/paibotMB/', //编译到当前目录
        filename: '[name]/[name].js' //编译后的文件名字
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/, //排除
            loader: 'babel?presets=es2015'
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 5 version", "Firefox > 10", "ie 10", "ie 9", "ie 8", "ie 7"]}')
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 5 version", "Firefox > 10", "ie 10", "ie 9", "ie 8", "ie 7"]}!less-loader')
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 5 version", "Firefox > 10", "ie 10", "ie 9", "ie 8", "ie 7"]}!scss-loader')
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(png|jpg)$/,
            exclude: /^node_modules$/,
            loader: 'url?limit=8192&name=images/[name].[ext]'
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['jsx', 'babel?presets[]=es2015,presets[]=react']
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }]
    },
    plugins, //plugins在上面已经定义好，这里相当于是plugins:plugins
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    }
};