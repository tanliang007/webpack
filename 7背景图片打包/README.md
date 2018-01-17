## 图片写入css

- css背景图样式编写完成后，我们可以试着用webpack去打包一下。你会发现终端中是报错的，具体错误可以看下图。

```
ERROR in ./src/entry.js
Module not found: Error: Can't resolve 'style-loader' in 'C:\Users\liang\Desktop\wangshangexexcise\webpack_study\webpack_demo7'
 @ ./src/entry.js 1:0-30

```

##### file-loader、url-loader
- 上面的错误是由于缺少loader的解析，之前已经讲了了CSS打包的loader。我们先安装两个解析图片用的loader。
安装file-loader和url-loader
	+ file-loader：解决引用路径的问题，拿background样式用url引入背景图来说，我们都知道，webpack最终会将各个模块打包成一个文件，因此我们样式中的url路径是相对入口html页面的，而不是相对于原始css文件所在的路径的。这就会导致图片引入失败。这个问题是用file-loader解决的，file-loader可以解析项目中的url引入（不仅限于css）,根据我们的配置，将图片拷贝到相应的路径，再根据我们的配置，修改打包后文件引用路径，使之指向正确的文件。

	+ url-loader：如果图片较多，会发很多http请求，会降低页面性能。这个问题可以通过url-loader解决。url-loader会将引入的图片编码，生成dataURl。相当于把图片数据翻译成一串字符。再把这串字符打包到文件中，最终只需要引入这个文件就能访问图片了。当然，如果图片较大，编码会消耗性能。因此url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，大于limit的还会使用file-loader进行copy。
     
##### 安装file-loader和url-loader
npm install --save-dev file-loader url-loader

- 安装好后，就可以使用这个loader了，记得在loader使用时不需要用require引入，在plugins才需要使用require引入。
```
	   //模块：例如解读CSS,图片如何转换，压缩
    module:{
        rules: [
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },{
               test:/\.(png|jpg|gif)/ ,
               use:[{
                   loader:'url-loader',
                   options:{
                       limit:500000,
                       outputPath:'images/',
                   }
               }]
            }
          ]
    },
```
- 为什么只使用了url-loader
      
我们并没有在webpack.config.js中使用file-loader，但是依然打包成功了。我们需要了解file-loader和url-loader的关系。url-loader和file-loader是什么关系呢？简答地说，url-loader封装了file-loader。url-loader不依赖于file-loader，即使用url-loader时，只需要安装url-loader即可，不需要安装file-loader，因为url-loader内置了file-loader。

 


