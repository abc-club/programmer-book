* [vscode这篇就够了](https://juejin.im/post/5d37bd5551882503ea1c680e)
* [VSCode折腾log插件](https://juejin.im/post/5c1e2612e51d452aaa7c43fe)
* [21 个VSCode 快捷键，让代码更快，更有趣](https://juejin.im/post/5d34fdfff265da1b897b0c8d)
* [VS Code 快速使用指南](https://juejin.im/post/5bc86b0b5188255ca00cc58f)
* [ React Native vscode插件](https://blog.csdn.net/asce1885/article/details/71075432)
* [10款VS Code插件神器，第7款超级实用！](https://zhuanlan.zhihu.com/p/111004160)

## 安装

## 插件

### 总览

* prettier 格式化代码
* Auto Close Tag 自动闭合 HTML 标签
* Auto Import Typescript 自动 import 提示
* Auto Rename Tag 修改 HTML 标签时，自动修改匹配的标签
* Beautify css/sass/scss/less css/sass/less 格式化
* Better Comments 编写更加人性化的注释
* Bookmarks 添加行书签
* Can I Use HTML5、CSS3、SVG 的浏览器兼容性检查
* Code Runner 运行选中代码段（支持大量语言，包括 Node）
* Code Spellchecker 单词拼写检查
* CodeBing 在 VSCode 中弹出浏览器并搜索，可编辑搜索引擎
* Color Highlight 颜色值在代码中高亮显示
* Color Info 小窗口显示颜色值，rgb,hsl,cmyk,hex 等等
* Color Picker 拾色器
* Document This 注释文档生成
* ESLint ESLint 插件，高亮提示
* EditorConfig for VS Code EditorConfig 插件
* Emoji 在代码中输入 emoji
* File Peek 根据路径字符串，快速定位到文件
* Font-awesome codes for html FontAwesome 提示代码段
* Git Blame 在状态栏显示当前行的 Git 信息
* Git History(git log) 查看 git log
* GitLens 显示文件最近的 commit 和作者，显示当前行 commit 信息
* Guides 高亮缩进基准线
* Gulp Snippets Gulp 代码段
* HTML CSS Class Completion CSS class 提示
* HTML CSS Support css 提示（支持 vue）
* HTMLHint HTML 格式提示
* Indenticator 缩进高亮
* IntelliSense for css class names css class 输入提示
* JavaScript (ES6) code snippets ES6 语法代码段
* JavaScript Standard Style Standard 风格
* Less IntelliSense less 变量与混合提示
* Lodash Lodash 代码段
* MochaSnippets Mocha 代码段
* Node modules resolve 快速导航到 Node 模块
* Code Outline 展示代码结构树
* Output Colorizer 彩色输出信息
* Partial Diff 对比两段代码 X 或文件
* Path Autocomplete 路径完成提示
* Path Intellisense 另一个路径完成提示
* PostCss Sorting css 排序
* Prettify JSON 格式化 JSON
* Project Manager 快速切换项目
* Quokka.js 不需要手动运行，行内显示变量结果
* REST Client 发送 REST 风格的 HTTP 请求
* React Native Storybooks storybook 预览插件，支持 react
* React Playground 为编辑器提供一个 react 组件运行环境，方便调试
* React Standard Style code snippets react standar 风格代码块
* Sass sass 插件
* Settings Sync VSCode 设置同步到 Gist
* Sort Typescript Imports typescript 的 import 排序
* Sort lines 排序选中行
* String Manipulation 字符串转换处理（驼峰、大写开头、下划线等等）
* Syncing vscode 设置同步到 gist
* TODO Parser Todo 管理
* TS/JS postfix completion ts/js 前缀提示
* TSLint TypeScript 语法检查
* Test Spec Generator 测试用例生成（支持 chai、should、jasmine）
* TypeScript Import TS 自动 import
* TypeSearch TS 声明文件搜索
* Types auto installer 自动安装@types 声明依赖
* VSCode Great Icons 文件图标拓展
* Version Lens package.json 文件显示模块当前版本和最新版本
* View Node Package 快速打开选中模块的主页和代码仓库
* VueHelper Vue2 代码段（包括 Vue2 api、vue-router2、vuex2）
* filesize 状态栏显示当前文件大小
* ftp-sync 同步文件到 ftp
* gitignore .gitignore 文件语法
* htmltagwrap 快捷包裹 html 标签
* language-stylus Stylus 语法高亮和提示
* markdownlint Markdown 格式提示
* npm Intellisense 导入模块时，提示已安装模块名称
* npm 运行 npm 命令
* stylelint css/sass/less 代码风格
* vetur 目前比较好的 Vue 语法高亮
* vscode-database 操作数据库，支持 mysql 和 postgres
* vscode-icons 文件图标，方便定位文件
* vscode-random 随机字符串生成器
* vscode-styled-components styled-components 高亮支持
* vscode-styled-jsx styled-jsx 高亮支持
* wakatime 记录编程活动的插件
* git patch 打包差量包

#### 新增

Bracket Pair Colorizer 大括号匹配

### 详解

#### Settings Sync VSCode 设置同步到 Gist

步骤：http://shanalikhan.github.io/2015/12/15/Visual-Studio-Code-Sync-Settings.html

#### git patch

* 把 patch 文件放入项目根目录
* ctrl+p
* > git
* 选择 patch 文件

#### prettier

https://prettier.io/

1.  创建配置文件(优先级从上到下)
    .prettierrc
    .editconfig
    编辑器默认配置

```
// .prettierrc
{
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false
}
```

**语法可参考官网或者插件说明**

2.  修改编辑器用户设置，把 formatOnSave 设置为 true，表示在保存时格式化代码
    "editor.formatOnSave": true

## 快捷键

### 安装 code 命令

打开命令面板　输入 code 选择安装
