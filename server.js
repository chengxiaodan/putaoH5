var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


// var proxy = [{
// 	path: '/*/*', //必须得有一个文件地址，如果顶层文件夹名字不同，则用/*/代替
// 	target: 'http://bbs.putao.com',
// 	host: 'bbs.putao.com',
// 	secure: false
// }];
var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	// proxy: proxy,
	progress: true,
	stats: {
		colors: true
	}
});

//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
	res.sendFile(__dirname + '/paibandP.html')
});
server.listen(8060, function() {
	console.log('正常打开8060端口')
});