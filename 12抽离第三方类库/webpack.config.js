const path = require('path');
const htmlPlugin= require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
module.exports={
  devtool: 'eval-source-map',
    //入口文件的配置项
    entry:{
			//里面的entery是可以随便写的
      entry:'./src/entry.js',
      jquery:'jquery',
      // vue:'vue'
		},
    //出口文件的配置项
    output:{
			 //打包的路径文职  __dirname(是node中的一个变量)
			//  C:\Users\liang\Desktop\wangshangexexcise\webpack_study\webpack_demo2
			 path:path.resolve(__dirname,'dist'),
			 //打包的文件名称
			 filename:'bundle.js'
		},
    //模块：例如解读CSS,图片如何转换，压缩
    module:{
      rules: [
        {
          test: /\.css$/,
          use:ExtractTextPlugin.extract({fallback:"style-loader",use:["css-loader"]}),
          //use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
          //fallback:编译后用什么loader来提取css文件
        },
        {
          test:/\.(png|jpg|gif)/ ,
          use:[{
              loader:'url-loader',
              options:{
                  limit:1000,  //修改这个参数查看变化
                  outputPath:'img/',
              }
          }]
       },
        {
        test: /\.(html)$/,
        use:[ 'html-withimg-loader'] 
       },
       {
        test: /\.js$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
        use:{
          loader:'babel-loader',
        },
        exclude: /node_modules/
        }
      ]
    },
    //插件，用于生产模版和各项功能
    plugins:[
      new htmlPlugin({
        minify:{
            removeAttributeQuotes:true
        },
        hash:true,
        template:'./src/index.html'     
      }),
      new ExtractTextPlugin("style.css"),
      new webpack.ProvidePlugin({
        $:"jquery"
      }),
      new webpack.optimize.CommonsChunkPlugin({
        //name对应入口文件中的名字，我们起的是jQuery
        name:'jquery',
        //把文件打包到哪里，是一个路径
        filename:"assets/js/jquery.min.js",
        //最小打包的文件模块数，这里直接写2就好
        minChunks:2
    }),
    ],
    //配置webpack开发服务功能
    devServer:{
       //配置服务器基本运行路径，用于找到程序打包地址。
       contentBase:path.resolve(__dirname,'dist'),
       //服务器的IP地址，可以使用IP也可以使用localhost
       host:'localhost',
       //服务端压缩是否开启
       compress:true,
       //配置服务端口号
       port:1717
    }
}
