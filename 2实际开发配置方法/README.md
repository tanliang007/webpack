## 配置文件webpack.config.js
- 上一个小demo我们对Webpack有了初步了解，但是它的终端打包方案，在实际开发中并不使用，而是使用Webpack的配置文件的方式进行设置。
  + webpack.config.js就是Webpack的配置文件，这个文件需要自己在项目根目录下手动建立。建立好后我们对其进行配置，先看下面的代码（webpack.config.js的基本结构），这是一个没有内容的标准webpack配置模版。  
  
### 步骤 
##### 1.在 webpack.config.js 写入以下内容

```javascript
const path = require('path');
module.exports={
    //入口文件的配置项
    entry:{
        entry:'./src/entry.js'
    },
    //出口文件的配置项
    output:{
        //输出的路径，用了Node语法
        path:path.resolve(__dirname,'dist'),
        //输出的文件名称
        filename:'bundle.js'
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module:{},
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{}
}
```

##### 2.使用 webpack 打包构建

```bash
$ 直接 webpack
```

