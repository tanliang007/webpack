## CSS分离:extract-text-webpack-plugin
  这个插件就可以完美的解决我们提取CSS的需求，但是webpack官方其实并不建议这样作。
```
npm install --save-dev extract-text-webpack-plugin
```
- 引入：安装完成后，需要先用require引入。
    + const extractTextPlugin = require("extract-text-webpack-plugin");
    + 设置Plugins：引入成功后需要在plugins属性中进行配置。这里只要new一下这个对象就可以了。 new ExtractTextPlugin("/index.css")
    + 这里的/css/index.css是分离后的路径位置。这部配置完成后，包装代码：还要修改原来我们的style-loader和css-loader。
```
修改代码如下
module:{
        rules: [
            {
              test: /\.css$/,
              use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
               //use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
                //fallback:编译后用什么loader来提取css文件
            },{
               test:/\.(png|jpg|gif)/ ,
               use:[{
                   loader:'url-loader',
                   options:{
                       limit:500000
                   }
               }]
            }
          ]
    },
```
## html-withimg-loader 处理img标签的图片
```
安装：
npm install html-withimg-loader -D

```

##### file-loader、url-loader
```
在rules选项中配置
{
    test:  /\.(html)$/,
    use:[ 'html-withimg-loader'] 
}
```


     


