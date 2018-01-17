##  学习Babel配置

- Babel是一个编译JavaScript的平台，它的强大之处表现在可以通过编译帮你达到：

    使用下一代的javascript（ES6，ES7,……）代码，即使当前浏览器没有完成支持；
    使用基于JavvScript进行扩展语言，比如React的JSX;

```
安装依赖包：

npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-env

babel-core：babel的核心包；
babel-loader：babel的loader包；
babel-preset-es2015：解析es6的包；
babel-preset-env：现在官方推荐使用的是babel-preset-env。
babel-preset-react：解析React的JSX的包；
```

##### 配置
```
    module: {
    rules: [{		
        {
        test: /\.js$/, 是一个正则，代表js或者jsx后缀的文件要使用下面的loader
        loader: "babel-loader"
        },
        use:{
          loader:'babel-loader',
        },
        exclude: /node_modules/  排除掉第三方包不处理
       }
    	]
    }
   
     创建一个.babelrc,webpack中的babel会自动调用该文件的配置到babel中转换js
     {
	    "presets":["env"]
			大概意思就是，通过 env 这个预设，或者说转换器，他可以根据你配置的选项，自动添加一些其他的转换器，来满足你当前的装换需求。
     }
```
     


