## 配置文件:服务和热更新
- 执行命令下载 cnpm install webpack-dev-server –save-dev下载该模块的。下载好后，需要配置一下devServer。最简单的devServer配置项只有四个。
  
### 步骤 
##### 1.在 webpack.config.js 写入以下内容

```javascript
  devServer:{
        //contentBase:配置服务器基本运行路径，用于找到程序打包地址。
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        //服务端压缩是否开启
        compress:true,
        //配置服务端口号
        port:1717
    }
```

##### 2.配置package.json

```bash
/package.json
"scripts": {
    "server":"webpack-dev-server"
 },
配置好保存后，在终端里输入 npm  run  server  打开服务器。然后在浏览器地址栏输入http://localhost:8888就可以看到结果了。
```

