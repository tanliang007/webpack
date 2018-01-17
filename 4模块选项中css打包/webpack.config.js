const path = require('path');
module.exports={
    //入口文件的配置项
    entry:{
			//里面的entery是可以随便写的
			entry:'./src/entry.js'
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
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    },
    //插件，用于生产模版和各项功能
    plugins:[],
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
