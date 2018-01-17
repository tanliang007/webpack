## 引入第三方包
- 在工作中引用第三方的框架是必不可少的，比如引入JQuery或者Vue，但是很多小伙伴一遇到引入第三方的类库时就不知道如何操作了。这节课就学习一下如何优雅并正确的用webpack引入第三方库。

#### 举例引入jquery
- 安装好后，还需要引入到我们的entry.js中，这里直接使用import进行引入就可以。
```
import $ from 'jquery';
```
这里引入是不需要我们写相对路径的，因为jquery的包是在node_modules里的，只要写一个包名jquery，系统会自动为我们查找的。

引入好后我们就可以在entry.js里使用jquery，我们可以加入下面的代码，然后进行测试。

#### 用plugin全局引入
- webapck.config.js中配置的方法，这种不需要你在入口文件中引入，而是webpack给你作了全局引入。这个插件就是ProvidePlugin。

- ProvidePlugin是一个webpack自带的插件，Provide的意思就是装备、提供。因为ProvidePlugin是webpack自带的插件，所以要先再webpack.config.js中引入webpack。
```
const webpack = require('webpack');
```
- 配置好后，就可以在你的入口文件中使用了，而不用再次引入了。这是一种全局的引入，在实际工作中也可以很好的规范项目所使用的第三方库。
     


