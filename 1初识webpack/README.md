## 了解什么是 webpack
#### webpack官方网站:https://doc.webpack-china.org/concepts

- WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Sass，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。在3.0出现后，Webpack还肩负起了优化项目的责任。
  + 打包：可以把多个Javascript文件打包成一个文件，减少服务器压力和下载带宽。
  + 转换：把拓展语言转换成为普通的JavaScript，让浏览器顺利运行。
  + 优化：前端变的越来越复杂后，性能也会遇到问题，而WebPack也开始肩负起了优化和提升性能的责任。
- 专注于打包构建
  + 现在的前端网页功能丰富，特别是SPA（single page web application 单页应用）技术流行后，JavaScript的复杂度增加和需要一大堆依赖包，还需要解决SCSS，Less……新增样式的扩展写法的编译工作。所以现代化的前端已经完全依赖于WebPack的辅助了。
  + 主要对 JavaScript 资源进行打包构建
  + 支持像写 node 一样去写前端代码
  + 支持各种主流的模块化规范
  + 你要做的是：按照模块化的方式去写代码
    * require 加载包
    * module.exports 导出接口
  + webpack 帮你去把模块化的代码构建成可以在浏览器运行的 JavaScript

### 关于版本

- 目前已到v3.10.0版本

## 起步

##### 1.安装 webpack

```
对项目目录进行安装
  执行命令npm init生成package.json文件
  继续输入命令npm install --save-dev(-D) webpack标识把webpack保存到package中的devDependencies(开发依赖)
  
```

##### 2.新建以下目录结构

```
dist 是我们编译打包好的文件,用于生产环境。
src  你可以理解成src是源码文件,用于开发环境。
  main.js
  foo.js
index.html
```

##### 3.在 main.js 写入以下内容

```javascript
const foo = require('./foo')
console.log(foo.foo)
foo.fn()
```

##### 4.在 foo.js 中写入以下内容：

```javascript
module.exports = {
  foo: 'bar',
  fn: function () {
    console.log('fff')
  }
}
```

##### 5.使用 webpack 打包构建

```bash
指定 src/main.js 为入库，通过 webpack 打包构建到 dist/bundle.js 文件中
如果 bundle.js 没有，则直接创建，如果已存在，则直接覆盖
$ webpack src/main.js dist/bundle.js
```

注意：在页面中确保加载执行的是打包构建之后的 dist/bundle.js

