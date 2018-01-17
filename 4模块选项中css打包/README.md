## 模块:CSS文件打包
 Webpack在生产环境中有一个重要的作用就是减少http的请求数，就是把多个文件打包到一个js里，这样请求数就可以减少好多。
这次看一下css怎么打包
### Loaders的概念
- Loaders是Webpack最重要的功能之一，他也是Webpack如此盛行的原因。通过使用不同的Loader，Webpack可以的脚本和工具，从而对不同的文件格式进行特定处理。
 * 可以把SASS文件的写法转换成CSS，而不在使用其他转换工具。
 * 可以把ES6或者ES7的代码，转换成大多浏览器兼容的JS代码。
 * 可以把React中的JSX转换成JavaScript代码。
##### 1.打包CSS文件：
- 要打包CSS你必须先要有个CSS文件，在/src目录下，我们建立一个css文件夹，在文件夹里建立index.css文件。代码内容如下。
- ./src/css/index.css
```javascript
   body{
    background-color: skyblue;
    color: white;
    }
```

##### CSS文件建立好后，需要引入到入口文件中，才可以打包到，这里我们引入到entry.js中。
- /src/entery.js中在首行加入代码：

```
import css from './css/index.css';
```
##### CSS和引入做好后，我们就需要使用loader来解析CSS文件了，这里我们需要两个解析用的loader，分别是style-loader和css-loader。
- style-loader:
 * 它是用来处理css文件中的url()等
- css-loader
 * 它是用来将css插入到页面的style标签。


