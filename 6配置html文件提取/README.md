## 插件配置:HTML文件的提取
我们把index.html直接放到了dist文件夹下，这肯定是不正确的，应该放到我们src目录下。但是前期我们为了循序渐进的学习，所以把index.html放到了dist目录下。
 


```
- 然后我们配置webpack.config.js文件，先引入我们的html-webpack-plugin插件。 
const htmlPlugin= require('html-webpack-plugin');
引入后使用npm进行安装包。
npm install --save-dev html-webpack-plugin
```
##### 最后在webpack.config.js里的plugins里进行插件配置，配置代码如下。
       new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
           
        })

- minify：是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
- hash：为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
- template：是要打包的html模版路径和文件名称。        

上边的都配置完成后，我们就可以在终端中使用webpack，进行打包。就看到index.html文件已经被打包到我们的dist目录下了，并且自动为我们引入了路口的JS文件。





