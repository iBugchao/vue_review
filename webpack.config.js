const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry:{
		app:__dirname+'/src/main.js',
	},
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'bundle.js'
	},
	module:{
		rules:[	//新版webpack使用rules而不是loaders
			{
				test:/\.css$/,
				loader:'style-loader!css-loader',
			},
			{
				test:/\.(jpg|svg)$/,
				loader:'url-loader?limit=4096&name=[name].[ext]'
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				//排除 node_modules下所有
				exclude:/node_modules/,
				options:{
					presets:['es2015'],
					plugins:['transform-runtime']
				}
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'./index.html',
		}),
		new VueLoaderPlugin()
	],
	devServer:{
		contentBase:path.resolve(__dirname,'dist'),
		host:'localhost',
		compress:true,
		port:8080
	}
}
