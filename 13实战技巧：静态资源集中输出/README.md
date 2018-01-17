## 静态资源集中输出
- 在工作中引用第三方的框架是必不可少的，比如引入JQuery或者Vue，但是很多小伙伴一遇到引入第三方的类库时就不知道如何操作了。这节课就学习一下如何优雅并正确的用webpack引入第三方库。
工作中会有一些已经存在但在项目中没有引用的图片资源或者其他静态资源（比如设计图、开发文档），这些静态资源有可能是文档，也有可能是一些额外的图片。项目组长会要求你打包时保留这些静态资源，直接打包到制定文件夹。其实打包这些资源只需要用到copy-webpack-plugin。

使用copy-webpack-plugin
copy-webpack-plugin就是专门为我们作静态资源转移的插件，不过它不同上两节使用的插件，它是需要安装的。

##### 插件安装

插件的安装只要使用npm就可以了。

```
cnpm install --save-dev copy-webpack-plugin
```
如果在安装过程中出错，你可以使用npm来进行安装。

##### 引入插件
```
const copyWebpackPlugin= require("copy-webpack-plugin");
```
##### 配置插件

引入之后我们就可以在plugins里边进行配置插件了，我们先看下面的插件配置代码，然后再进行详细讲解。
```
new copyWebpackPlugin([{
        from:__dirname+'/src/public',
        to:'./public'
    }])
```

- from:要打包的静态资源目录地址，这里的\__dirname是指项目目录下，是node的一种语法，可以直接定位到本机的项目目录中。

- to:要打包到的文件夹路径，跟随output配置中的目录。所以不需要再自己加\__dirname。
配置好后，我们就可以使用webpack 进行打包了，你会发现图片按照我们的配置打包了过去。

     


