## webpack优化抽离第三方库
- 在工作中引用第三方的框架是必不可少的，比如引入JQuery或者Vue，但是很多小伙伴一遇到引入第三方的类库时就不知道如何操作了。这节课就学习一下如何优雅并正确的用webpack引入第三方库。

##### 抽离的第一步是修改入口文件，把我们的JQuery也加入到入口文件中，看下面的代码。
```
 entry:{
    entry:'./src/entry.js',
    jquery:'jquery'
 },
```
##### 第二步：引入插件

```
我们需要引入optimize优化插件，插件里边是需要配置的，具体配置项看下面的代码。
new webpack.optimize.CommonsChunkPlugin({
    //name对应入口文件中的名字，我们起的是jQuery
    name:'jquery',
    //把文件打包到哪里，是一个路径
    filename:"assets/js/jquery.min.js",
    //最小打包的文件模块数，这里直接写2就好
    minChunks:2
}),

```
- minChunks一般都是固定配置，但是不写是不行的，你会打包失败。

- filename是可以省略的，这是直接打包到了打包根目录下，我们这里直接打包到了dist文件夹下边。

- 配置完成后，我们可以先删掉以前打包的dist目录，然后用webpack再次打包，你会发现jquery被抽离了出来，并且我们的entry.js文件变的很小。

### 如何打包多个第三方库
第一步:我们先用npm 进行安装。
```
npm instawll vue --save
```
第二步：在入口配置中引入vue和jquery
```
entry:{
    entry:'./src/entry.js',
    jquery:'jquery',
    vue:'vue'
},
```
只是多比上边多加了一个vue选项。

第三步：修改CommonsChunkPlugin配置

需要修改两个位置：

- 第一个是在name属性里把原来的字符串改为数组，因为我们要引入多个模块，所以是数组；
第二个是在filename属性中把我们输出的文件名改为匹配付[name],这项操作就是打包出来的名字跟随我们打包前的模块。
```
new webpack.optimize.CommonsChunkPlugin({
    //name对应入口文件中的名字，我们起的是jQuery
    name:['jquery','vue'],
    //把文件打包到哪里，是一个路径
    filename:"assets/js/[name].js",
    //最小打包的文件模块数，这里直接写2就好
    minChunks:2
}),
```
- 配置好后，我们就可以在控制台输入webpack进行打包了。你会看到我们预想的结果，jquery和vue都被我们抽离出来了。
     


