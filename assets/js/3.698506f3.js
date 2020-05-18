(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{168:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网文档"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/yuezhilunhui2009/vue-cli3-preset-seed",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),s("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("用于交互式搭建基于 vue 技术栈项目的工具，通常安装在全局 node_module 中。它提供的命令主要有以下几个：")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("用于本地开发以及编译打包，提供的命令主要是：")]),t._v(" "),t._m(6),t._m(7),t._v(" "),s("p",[t._v("一个 Vue CLI preset 是一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在命令提示中选择它们。")]),t._v(" "),s("p",[t._v("官方 preset 示例：")]),t._v(" "),t._m(8),t._m(9),t._v(" "),s("ul",[s("li",[t._v("可以预设项目的 vue-plugin-xxx")]),t._v(" "),s("li",[t._v("可以预设 router、vuex")]),t._v(" "),s("li",[t._v("可以预设 cssPreprocessor")]),t._v(" "),s("li",[t._v("可以预设 vue.config.js")]),t._v(" "),s("li",[t._v("可以开启或者关闭插件的 prompts")]),t._v(" "),s("li",[t._v("可以提供一套文件目录结构")]),t._v(" "),s("li",[t._v("可以执行 "),s("a",{attrs:{href:"https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generator"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#%E7%AC%AC%E4%B8%89%E6%96%B9%E6%8F%92%E4%BB%B6%E7%9A%84%E5%AF%B9%E8%AF%9D",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prompt"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("preset 可以是本地或者远程项目")])]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),s("p",[t._v("通过引用本地 preset 创建项目的方式进行代码调试")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),s("ol",[t._m(21),t._v(" "),s("li",[t._v("根据入口代码发现调用链 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/bin/vue.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("bin/vue"),s("OutboundLink")],1),t._v(" -> "),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/create.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib/create"),s("OutboundLink")],1),t._v(" -> "),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/Creator.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib/Creator"),s("OutboundLink")],1),t._v(" -> "),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/util/loadRemotePreset.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("util/loadRemotePreset"),s("OutboundLink")],1),t._v(" -> "),s("a",{attrs:{href:"https://www.npmjs.com/package/download-git-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("download-git-repo"),s("OutboundLink")],1),t._v("；")]),t._v(" "),s("li",[t._v("最终看到 vue-cli3 使用了 "),s("a",{attrs:{href:"https://www.npmjs.com/package/download-git-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("download-git-repo"),s("OutboundLink")],1),t._v(" 这个 npm 包；")]),t._v(" "),s("li",[t._v("回头看看 "),s("code",[t._v("vue create --preset <url/gitRepoName>")]),t._v(" 命令参数的传递过程发现 url 是透传到 "),s("a",{attrs:{href:"https://www.npmjs.com/package/download-git-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("download-git-repo"),s("OutboundLink")],1),t._v(" 的；")]),t._v(" "),s("li",[t._v("根据 "),s("a",{attrs:{href:"https://www.npmjs.com/package/download-git-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("download-git-repo"),s("OutboundLink")],1),t._v(" 文档我们直接使用 Direct + clone 模式；")]),t._v(" "),t._m(22)]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),s("ul",[t._m(33),t._v(" "),s("li",[t._v("可以使上面列表中的工具针对特定版本区间的浏览器生成对应的兼容性代码；")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli3 中有 @babel/preset-env 和 Autoprefixer 会用到 browserlist 配置"),s("OutboundLink")],1),t._v("；")]),t._v(" "),s("li",[t._v("browserlist 配置参考：\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/browserslist/browserslist"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("与 browserlist 配合的工具配置参考：\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/browserslist/browserslist-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/browserslist/browserslist-example"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("一个在线工具，用于查看 browserlist 配置文件匹配到哪些浏览器：\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://browserl.ist/?q=defaults",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://browserl.ist/?q=defaults"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("注意：并不是项目中所有依赖都支持低版本浏览器，例如 vue 本身不支持低于 IE9 的浏览器；")])]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),s("ul",[s("li",[t._v("在 /generator/index.js 中利用 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/GeneratorAPI.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeneratorAPI"),s("OutboundLink")],1),t._v(" 进行目录文件编辑：")])]),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),s("p",[t._v("目的是令 writeFileTree 函数不写文件直接退出，这样 vue-cli3 在写 README.md 时会直接跳过。")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vue-cli-3-preset-web-项目骨架开发小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3-preset-web-项目骨架开发小结"}},[this._v("#")]),this._v(" Vue CLI 3 Preset Web 项目骨架开发小结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue-cli-3-基本认识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3-基本认识"}},[this._v("#")]),this._v(" Vue CLI 3 基本认识")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"vue-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli"}},[this._v("#")]),this._v(" @vue/cli")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用于创建项目")]),t._v("\nvue create\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动 VUE GUI")]),t._v("\nvue ui\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部分 vue [command] 的命令实际是 @vue/cli-service 提供的")]),t._v("\nvue inspect\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部分 vue [command] 的命令实际是 @vue/cli-service-global 提供的")]),t._v("\nvue serve\nvue build\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v("在开发一个 preset 项目时通常关注 "),e("code",[this._v("vue create")]),this._v(" 和 "),e("code",[this._v("vue inspect")]),this._v(" 命令。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"vue-cli-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-service"}},[this._v("#")]),this._v(" @vue/cli-service")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地开发调试")]),t._v("\nvue-cli-service serve\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包编译")]),t._v("\nvue-cli-service build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查 webpack 最终配置")]),t._v("\nvue-cli-service inspect\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码书写格式检查")]),t._v("\nvue-cli-service lint\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"preset-项目开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preset-项目开发"}},[this._v("#")]),this._v(" Preset 项目开发")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"useConfigFiles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"router"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vuex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cssPreprocessor"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sass"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"configs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postcss"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslintConfig"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jest"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用-preset-初始化项目特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-preset-初始化项目特点"}},[this._v("#")]),this._v(" 使用 preset 初始化项目特点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"preset-项目的结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preset-项目的结构"}},[this._v("#")]),this._v(" preset 项目的结构")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── README.md\n├── projectTemplate\n├── generator.js  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# generator (可选)")]),t._v("\n├── prompts.js    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prompt 文件 (可选)")]),t._v("\n├── index.js      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# service 插件")]),t._v("\n└── package.json\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"preset-项目的调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preset-项目的调试"}},[this._v("#")]),this._v(" preset 项目的调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# ./my-preset 应当是一个包含 preset.json 的文件夹")]),this._v("\nvue create --preset ./my-preset my-project\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 或者，直接使用当前工作目录下的 json 文件：")]),this._v("\nvue create --preset my-preset.json my-project\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"问题记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题记录"}},[this._v("#")]),this._v(" 问题记录")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1、如何从任意-git-仓库获取-remote-preset-初始化项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、如何从任意-git-仓库获取-remote-preset-初始化项目"}},[this._v("#")]),this._v(" 1、如何从任意 git 仓库获取 remote preset 初始化项目")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[this._v("#")]),this._v(" 背景")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("获取远程 preset 说明包含 github、gitlab、bitbucket 三个云仓库；")]),this._v(" "),e("li",[this._v("尝试直接在 --preset 后填写完整 url 直接报 404 或 auth 相关错误；")]),this._v(" "),e("li",[this._v("添加 --clone 参数后报 'git clone' failed with status 128 错误；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[this._v("#")]),this._v(" 解决方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 关键点：")]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v('# 1. 在 git 仓库 url 前添加 "direct:"')]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 2. 添加 --clone 参数")]),this._v("\nvue create --preset direct:https://github.com/121595113/baize.git --clone preset-seed-demo\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"解决过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决过程"}},[this._v("#")]),this._v(" 解决过程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("打开全局 node_modules/@vue/cli 扫一眼目录结构，从 bin 目录找到 "),e("code",[this._v("vue create --preset")]),this._v(" 入口；")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("反映到 vue create --preset 这边就是 "),e("code",[this._v("vue create --preset direct:<git url></git> --clone <projectName>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2、preset-项目如何配置-eslint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、preset-项目如何配置-eslint"}},[this._v("#")]),this._v(" 2、preset 项目如何配置 eslint")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"背景-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景-2"}},[this._v("#")]),this._v(" 背景")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("preset 项目可以在 preset.json 中配置 eslint 插件，例如：@vue/cli-plugin-eslint；")]),this._v(" "),e("li",[this._v("preset 项目可以在 generator/index.js 中配置 eslint 相关依赖及配置；")]),this._v(" "),e("li",[this._v("两种配置是否会冲突，比较晕；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"结论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[this._v("#")]),this._v(" 结论")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("preset.json 中添加 @vue/cli-plugin-eslint 这个插件带来的是 eslint 整套配置，包含依赖、rule、githook；")]),this._v(" "),e("li",[this._v("generator/index.js 中配置 eslint 主要通过自己改写 package.json 以及 eslintConfig 内容来配置 eslint，每一处都需要自己写；")]),this._v(" "),e("li",[this._v("preset.json 与 generator/index.js 的配置可能会产生冲突，例如对 eslintConfig rules 进行配置，如果配置项是数组，那么最终创建的项目里此项会合并两处配置，导致配置错误；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3、browserlist-有什么作用，如何正确配置-browserlist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、browserlist-有什么作用，如何正确配置-browserlist"}},[this._v("#")]),this._v(" 3、browserlist 有什么作用，如何正确配置 browserlist")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"背景-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景-3"}},[this._v("#")]),this._v(" 背景")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在使用多种项目脚手架都看到过 browserlist，经常看到这样的默认配置：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("last "),e("span",{pre:!0,attrs:{class:"token number"}},[this._v("1")]),this._v(" version\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[this._v("1")]),this._v("%\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"结论-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结论-2"}},[this._v("#")]),this._v(" 结论")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("browserlist 作用于以下工具：\n"),s("ul",[s("li",[t._v("Autoprefixer")]),t._v(" "),s("li",[t._v("Babel")]),t._v(" "),s("li",[t._v("postcss-preset-env")]),t._v(" "),s("li",[t._v("eslint-plugin-compat")]),t._v(" "),s("li",[t._v("stylelint-no-unsupported-browser-features")]),t._v(" "),s("li",[t._v("postcss-normalize")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4、如何删除-vue-cli3-创建的默认目录或文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何删除-vue-cli3-创建的默认目录或文件"}},[this._v("#")]),this._v(" 4、如何删除 vue-cli3 创建的默认目录或文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"背景-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景-4"}},[this._v("#")]),this._v(" 背景")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("自己编写的 preset 有一套自定义目录结构，但是 vue-cli3 创建项目后总会有一些默认结构：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("/public\n/src/main.js\n/src/App.vue\n/src/components/HelloWorld.vue\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"结论-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结论-3"}},[this._v("#")]),this._v(" 结论")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// generator")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rootOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除 vue-cli3 默认的 /src 和 /public 目录")]),t._v("\n  api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("files")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据自定义模板生成项目结构")]),t._v("\n  api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./template'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5、如何让-vue-cli3-使用项目模板的-readme-md"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、如何让-vue-cli3-使用项目模板的-readme-md"}},[this._v("#")]),this._v(" 5、如何让 vue-cli3 使用项目模板的 README.md")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"结论-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结论-4"}},[this._v("#")]),this._v(" 结论")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在 /generator/index.js 中修改环境变量:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 屏蔽 generator 之后的文件写入操作")]),t._v("\napi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onCreateComplete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_CLI_SKIP_WRITE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_6、preset-项目如何将配置保存成单个文件，而不是包含在-package-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、preset-项目如何将配置保存成单个文件，而不是包含在-package-json"}},[this._v("#")]),this._v(" 6、preset 项目如何将配置保存成单个文件，而不是包含在 package.json")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"结论-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结论-5"}},[this._v("#")]),this._v(" 结论")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在 preset.json 中修改变量：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("useConfigFiles: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[this._v("true")]),this._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);