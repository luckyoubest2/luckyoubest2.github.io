import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as a,c as l,a as e,b as t,d as n,e as i}from"./app-fe086850.js";const c={},p=e("p",null,"代码编程的学习路径：",-1),d=e("li",null,"基础知识：ES6, MySQL，HTML，Markdown，正则表达式",-1),h=e("li",null,"脚本/开发工具：AutoHotkey，Electron",-1),u={href:"https://www.typescriptlang.org/zh/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.javascript.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://router.vuejs.org/zh/index.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://next.vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://element-plus.gitee.io/zh-CN/guide/quickstart.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://stylus-lang.com/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://sass.bootcss.com/documentation",target:"_blank",rel:"noopener noreferrer"},x={href:"http://lesscss.cn/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.tailwindcss.cn/docs",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.midwayjs.org/docs/intro",target:"_blank",rel:"noopener noreferrer"},j={href:"https://axios-http.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},V={href:"http://editorconfig.org",target:"_blank",rel:"noopener noreferrer"},L={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/airbnb/javascript#translation",target:"_blank",rel:"noopener noreferrer"},H={href:"http://commitizen.github.io/cz-cli/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://next.vue-test-utils.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/vuejs/vue-jest",target:"_blank",rel:"noopener noreferrer"},N={href:"https://kulshekhar.github.io/ts-jest/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://docs.github.com/cn/actions/learn-github-actions",target:"_blank",rel:"noopener noreferrer"},B=i(`<h2 id="visual-studio-code" tabindex="-1"><a class="header-anchor" href="#visual-studio-code" aria-hidden="true">#</a> Visual Studio Code</h2><p>本地代码编辑器使用 Visual Studio Code，其插件生态成熟，能实现大部分的需求。</p><p>GitHub Copilot，CodeGeeX，Tabnine，aiXcoder 插件均可以辅助补全代码。Tabnine 和 aiXcoder 有免费版，可以预测一到两行的代码。CodeGeeX 由清华大学开发，提供完整补全功能。</p><h3 id="修改快捷键" tabindex="-1"><a class="header-anchor" href="#修改快捷键" aria-hidden="true">#</a> 修改快捷键</h3><p>选择「菜单栏」&gt;「文件」&gt;「首选项」&gt;「键盘快捷方式」，修改或解绑快捷键。</p><p>以 PicGo 图床为例，其默认配置放置于 <code>%AppData%\\picgo\\data.json</code>，推荐快捷键为</p><ul><li>剪贴板图片上传：<code>ctrlOrCmd+alt+q</code></li><li>打开文件管理器上传：<code>ctrlOrCmd+alt+e</code></li><li>打开输入框输入路径上传：<code>ctrlOrCmd+alt+x</code></li></ul><p>另外，右键对应快捷方式，点击「重置按键绑定」，即可将快捷键设为默认。</p><h3 id="排除文件夹" tabindex="-1"><a class="header-anchor" href="#排除文件夹" aria-hidden="true">#</a> 排除文件夹</h3><p>在 VS Code 中点击快捷键 Ctrl/Command+Shift+P，输入「setting」，在设置中添加排除文件夹选项。注意：排除文件夹不能使用全路径，只能使用规则排除。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;**/blog&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//隐藏指定文件夹</span>
  <span class="token property">&quot;**/[Pp]lugins&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//使用中括号时表示不区分大小写</span>
  <span class="token property">&quot;**/*.pyc&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//隐藏所有 pyc 文件</span>
  <span class="token property">&quot;**/*.d.ts&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//隐藏所有 d.ts 文件</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在线-ide" tabindex="-1"><a class="header-anchor" href="#在线-ide" aria-hidden="true">#</a> 在线 IDE</h2><p>在线 IDE 最大的优势是开箱即用，无需搭建环境，避免本地环境错误导致的各类 bug。</p>`,13),I={href:"https://stackblitz.com/",target:"_blank",rel:"noopener noreferrer"},Q=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),X={href:"https://codepen.io/pen/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://codesandbox.io/s/",target:"_blank",rel:"noopener noreferrer"},J=e("h2",{id:"mysql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql","aria-hidden":"true"},"#"),t(" MySQL")],-1),O={href:"https://downloads.mysql.com/archives/installer/",target:"_blank",rel:"noopener noreferrer"},R=e("hr",{class:"footnotes-sep"},null,-1),U={class:"footnotes"},W={class:"footnotes-list"},Y={id:"footnote1",class:"footnote-item"},F={href:"https://www.51cto.com/article/718302.html",target:"_blank",rel:"noopener noreferrer"},K=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function Z($,ee){const o=s("ExternalLinkIcon");return a(),l("div",null,[p,e("ul",null,[d,h,e("li",null,[t("编程语言："),e("a",u,[t("TypeScript 4.x"),n(o)]),t(" + "),e("a",_,[t("JavaScript"),n(o)])]),e("li",null,[t("前端框架："),e("a",f,[t("Vue 3.x"),n(o)]),e("ul",null,[e("li",null,[t("构建工具："),e("a",b,[t("Vite 2.x"),n(o)])]),e("li",null,[t("路由工具："),e("a",k,[t("Vue Router 4.x"),n(o)])]),e("li",null,[t("状态管理："),e("a",g,[t("Vuex 4.x"),n(o)])])])]),e("li",null,[t("UI 框架："),e("a",m,[t("Element Plus"),n(o)]),e("ul",null,[e("li",null,[t("CSS 预编译："),e("a",v,[t("Stylus"),n(o)]),t(" / "),e("a",S,[t("Sass"),n(o)]),t(" / "),e("a",x,[t("Less"),n(o)])]),e("li",null,[t("CSS 后处理器：PostCSS，"),e("a",C,[t("tailwindcss"),n(o)])])])]),e("li",null,[t("Node.js 框架："),e("a",y,[t("Midway"),n(o)])]),e("li",null,[t("HTTP 工具："),e("a",j,[t("Axios"),n(o)]),e("ul",null,[e("li",null,[t("Git Hook 工具："),e("a",w,[t("husky"),n(o)]),t(" + "),e("a",q,[t("lint-staged"),n(o)])]),e("li",null,[t("代码规范："),e("a",V,[t("EditorConfig"),n(o)]),t(" + "),e("a",L,[t("Prettier"),n(o)]),t(" + "),e("a",E,[t("ESLint"),n(o)]),t(" + "),e("a",G,[t("Airbnb JavaScript Style Guide"),n(o)])]),e("li",null,[t("提交规范："),e("a",H,[t("Commitizen"),n(o)]),t(" + "),e("a",P,[t("Commitlint"),n(o)])]),e("li",null,[t("单元测试："),e("a",z,[t("vue-test-utils"),n(o)]),t(" + "),e("a",M,[t("jest"),n(o)]),t(" + "),e("a",T,[t("vue-jest"),n(o)]),t(" + "),e("a",N,[t("ts-jest"),n(o)])]),e("li",null,[t("自动部署："),e("a",A,[t("GitHub Actions"),n(o)])])])])]),B,e("p",null,[e("a",I,[t("StackBlitz"),n(o)]),t("：StackBlitz 界面类似 Visual Studio Code，可以直接 push 和拉取 GitHub 仓库的代码进行查看和编辑，项目支持离线开发，同时所有应用程序会自动部署在其服务器上。"),Q]),e("p",null,[e("a",X,[t("CodePen"),n(o)]),t("：CodePen 是一个在线的 HTML、CSS 和 JavaScript 代码编辑器，能够编写代码并即时预览效果，便于项目分享预览。CodePen 也一个庞大的前端社区，上面有来自全球开发者分享的各种各样炫酷的效果，并且这些代码都是开源和共享的。")]),e("p",null,[e("a",D,[t("CodeSandbox"),n(o)]),t("：CodeSandbox 编辑体验与 VSCode 类似，并支持 GitHub 导出、静态文件托管、本地项目导入等。缺点：不能直接导入 GitHub 项目。")]),J,e("p",null,[t("在 Windows 平台上，需要先设置 "),e("a",O,[t("MySQL Server"),n(o)]),t("，然后使用数据库软件进行连接。如果使用本地数据库且未将 MySQL Server 设为自动启动，每次开机后需要手动启动。启动流程为：右键点击菜单栏最左侧，选择「计算机管理」>「服务和应用程序」>「服务」>「MYSQL57」，双击启动即可。")]),R,e("section",U,[e("ol",W,[e("li",Y,[e("p",null,[e("a",F,[t("六个好用的在线代码编辑器，你选哪个？"),n(o)]),t(),K])])])])])}const ne=r(c,[["render",Z],["__file","index.html.vue"]]);export{ne as default};