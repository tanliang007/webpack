## 插件配置：配置JS压缩
现在你写的JS代码，在上线之前，都是需要进行压缩的，在没有webpack和gulp这些工具前，你可能需要找一个压缩软件或者在线进行压缩，在Webpack中可以很轻松的实现JS代码的压缩，它是通过插件的方式实现的，这里我们就先来引入一个uglifyjs-webpack-plugin(JS压缩插件，简称uglify)。
 
- 我们需要在webpack.config.js中引入uglifyjs-webpack-glugin插件
- const uglify = require('uglifyjs-webpack-plugin');
```
引入后在plugins配置里 new 一个 uglify对象就可以了，代码如下。
    plugins:[
        new uglify()
    ],
```

##### 这时候在终端中使用webpack进行打包，你会发现JS代码已经被压缩了。如果你用的VSCode的话，可以按Alt+Z让他文件自动换行，查看效果。