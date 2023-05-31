const g=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},d=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of d(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=g(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&d(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=g(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=g(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=g(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/DailyRoutine.html\":{\"title\":\"每日仪式\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"每日仪式是个人生活习惯的核心。它看起来可能会显得固化、死板、功利，有人反馈「透露着一股形式主义气息」，但是，这正是我想要的：遵循一个固定、程序化的流程，有规律地养成习惯，实现自我提升。\"]},{\"header\":\"仪式清单\",\"slug\":\"仪式清单\",\"contents\":[]},{\"header\":\"5AM Club\",\"slug\":\"_5am-club\",\"contents\":[\"5AM Club 是我的高效早晨方案：\",\"早上 5 点起床，使用手环震动闹钟。\",\"泡杯咖啡，准备早餐，开始第一个工作番茄。\",\"工作 25 分钟休息 5 分钟，休息期间完成每日必须：拍照打卡发 SNS，吃早餐。\",\"每天最低完成 8 个番茄，之后可进入长休息区间，进行家务打扫、健身、娱乐。\",\"晚上 10 点睡觉，保证充足的睡眠时间。\",\"Huberman Lab 建议早晨不一定需要进食，可以到中午再进食，改变身体的新陈代谢周期；醒来后两到四小时再摄入咖啡因，并尽量避免在午后摄入咖啡因，以防下午的 cafferine crush。请根据个人情况灵活调整计划。\"]},{\"header\":\"每日\",\"slug\":\"每日\",\"contents\":[\"早上创造美好情绪：赞美、仪式感、吃好吃的、看搞笑视频、听歌。\",\"唱歌：唱一首你喜欢的歌曲（外语美声歌曲可以增加脂肪消耗，例如：秋山雅史的《千の風になって》）。\",\"自拍视频：说一句话（比如当天的目标）来鼓励自己。在前一天想好录制内容，以获得积极情绪。\",\"参考积极心理学，收集积极情绪材料，放在显眼的地方：家人的照片、取得的成绩、美好的回忆、憧憬的未来、向往的地方、喜欢的艺术（音乐、名画、诗句）。\",\"人际连接：通过直播连麦与陌生人沟通 15 分钟，例如：播客、抖音语音电台直播 PK。\",\"别人很重要：帮助别人，能让人更健康、更幸福。当心情不好时，去帮助其他人，心情会变得更好。\",\"表扬和自我表扬：赞美自己、家人，发挥标志性优势，总比弥补缺点更有效。\",\"微习惯：\",\"每工作 20 分钟，休息 20 秒，然后做 10 个深蹲；出书房或上完厕所，再做 15 个俯卧撑。在运动前，在白板上写出正字，每一组动作用一个笔画表示。进阶阶段可以用固定机位拍摄视频，监督运动习惯。拍摄时，使用关键句「切掉/保留」，配合 Quickcut 快速剪辑视频。\",\"睡前：每天泡脚 20 分钟（水温 40℃），短时间的泡脚可以帮助睡眠更快入睡。此外，每天睡前 90 分钟，淋浴（水温 38~43℃，淋浴 10 分钟）或泡澡也可以助你更快进入睡眠状态。[1]\",\"间隔学习：穿插学习不同领域内容\",\"阅读看书：每天花 30 分钟读书，并输出笔记。\",\"墨墨背单词：每天背 20 个单词，虽然用处不大，但可以让脑子换个思路。\",\"笔记复习：利用 SuperMemo 记忆模型，复习心理认知、沟通理论和行为反思等笔记。\",\"当日回顾：每天记录 3 件好事，总结好事发生的原因，并与家人分享。\",\"这可以是日常生活中常见的小事，比如读到一本好书、吃到一道好菜、听到一个亲友的好消息、在公交车上有人为你让座、孩子今天会走路了，等等。\"]},{\"header\":\"定期\",\"slug\":\"定期\",\"contents\":[\"月底反思：检查日记和成果，对当月进行复盘，并将其同步给家人，征求意见、批评并记录。 \",\"每月复盘参照 Allison Seboldt，作者会分享他的收入并反思上个月的成就。\",\"阅读 JustinJ ackson，作者在 2018 年初创办 Transistor 以来，一直在分享他的项目，整理了在此过程中学到的许多经验教训。\",\"积极自我介绍：每三个月，讲述一个「最佳的我」的故事，植入你的优势，进行自我肯定。\"]},{\"header\":\"自我监控\",\"slug\":\"自我监控\",\"contents\":[\"为了更好地监督自己，我制定了一套自我监控方案，以记录自己的私人工作状态。\",\"开机（8 点）启动录屏命令，并检测护眼提醒是否开启。可参考 FFmpeg 录屏方案来修改命令：\",\"ffmpeg -f gdigrab -r 0.1 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 -b:v 0 -crf 32 output.mp4 -f dshow -s 640x480 -i video='USB2.0 PC CAMERA' -filter_complex 'overlay=W-w-1:H-h-50' -y \",\"晚上 10 点执行关机程序：静音、关闭护眼提醒、关闭录屏终端，并使用 dvr-scan 删除视频中的静止帧。这些步骤可以通过 AutoHotkey 命令自动完成。\",\"Send, {Volume_Mute} Process, Close, Stretchly.exe Process, Close, pwsh.exe Sleep, 500000 Run, PowerShell.exe -NoExit -Command &{dvr-scan -i output.mp4 -o %A_YYYY%-%A_MM%-%A_DD%_Scanned.avi}, D:\\\\Backup\\\\Libraries\\\\Desktop \",\"使用 VLC 播放器可以以 31.25 倍的速度回放监控视频，并结合 ManicTime 来回顾当日内容。要轻松实现 VLC 的高倍速播放，可以在「菜单栏」->「视图」中开启「状态栏」。此外，通过剪映，可以达到 100 倍的播放速度。\"]},{\"header\":\"时间管理\",\"slug\":\"时间管理\",\"contents\":[\"GTD 的存在是让大脑清空不混乱目的，明确知道下一步应该做什么。GTD 流程依次为捕获（Capture），明晰（Clarify），组织（Organize），回顾（Reflect），执行（Engage）。\",\"执行时，将 GTD 按功能与目的划分为多个清单。\",\"收集箱（Inbox）\",\"执行清单（@Context task）\",\"等待清单（\\\"Waiting for\\\" task）\",\"项目清单（\\\"Plan project\\\" plan）\",\"可能清单（Someday/maybe）\",\"参考资料（Reference）\",\"回收箱（Trash）\",\"当任务捕获到收集箱后，参考下方的固定流程将其整理不同的清单中。\",\"GTD 任务转移到清单\",\"从 GTD 流程角度，执行任务和计划。\",\"GTD 流程步骤\",\"GTD 工具原本用的是 Microsoft To Do，「我的一天」功能非常适合聚焦，但有次出现了同步问题，就转用滴答清单。滴答清单除基础 Todo 功能外，还能用日视图管理具体时间安排，添加跨天长时间任务，并在日历、看板和甘特图中查看。\",\"滴答清单的缺点也很明显，功能过于追求全，功能打磨得不够细节，无法满足定制需求。比如，没有任务跳过功能，对于循环任务只能点完成，导致记录与实际不符；跨越多天的任务不想在「今天清单」中出现出现，但一直在提醒，导致无法清空；过滤器逻辑单一，筛选元素教少。如果你的任务都可以一天内完成，不需要记录持续多天的计划，不需要买滴答的高级会员，基础功能足够满足你了。\",\"本节内容来自 Topbook 的 GTD 自我管理 - 时间管理教程，改变了我对 GTD 的认知，把事情做好，而不是把事情做完。建议完整阅读。\"]},{\"header\":\"日常习惯\",\"slug\":\"日常习惯\",\"contents\":[\"锚点\",\"在我……\",\"我会……\",\"庆祝\",\"20s 休息提示\",\"拿下眼镜，画板上添笔画后\",\"深蹲 15 个\",\"双手肘向后\",\"5mins 休息提示\",\"拿下眼镜，画板上添笔画后\",\"重力拉伸 15 次，2 组\",\"双手肘向后\",\"上完厕所\",\"洗好手，画板上添笔画后\",\"俯卧撑 15 个\",\"双手肘向后\",\"出书房\",\"画板上添笔画后\",\"俯卧撑 15 个\",\"双手肘向后\",\"午餐\",\"放下碗筷\",\"吃维生素\",\"想象自己发光\",\"午睡\",\"打开大排灯\",\"设置 30 分钟的闹钟\",\"想象自己发光\",\"洗澡\",\"打开花洒\",\"深蹲 15 个\",\"哼歌\",\"刷完牙\",\"放下牙刷\",\"俯卧撑 15 个\",\"双手肘向后\",\"晚上\",\"上床\",\"伸展并触碰脚趾；读书\",\"想象自己发光\",\"睡觉\",\"关灯\",\"打开白噪音\",\"想象自己发光\",\"休息选项：喝口水、洗脸、看看窗外、眼部按摩仪、按摩头皮。\",\"运动选项：跳绳、有氧拳击、B 站轻度健身操（Jo 姐？）。\",\"睡眠知识：睡眠时的体温理想情况下会比正常体温低二到三度，因此睡前应尽量降低低温，避免激烈运动。同时，手机屏幕等产生的光线会非常影响睡眠，建议尽量避免睡前使用手机。睡醒后应尽快暴露在室外，让自然光线把身体唤醒，只需要短短十分钟。\"]},{\"header\":\"美容仪器\",\"slug\":\"美容仪器\",\"contents\":[\"为了避免家里的美容仪器闲置浪费，我制定了定期使用计划。（请勿参考型号购买）\",\"按摩椅 + 眼部按摩仪 + belulu hikari LED 彩光美容仪，模式 A「嫩肤」10 分钟，模式 B「祛痘」8 分钟。\",\"Panasonic EH-SA96 蒸面喷雾器：每周两次喷雾蒸面，需变压器转接。\",\"射频仪：每周使用 1-2 次 RF 射频，10 分钟一次，除皱紧肤，射频后敷面膜或蒸面补水。 \",\"Tripollar STOP RF 射频美颜仪，Dr. Bauer Eye Reshaping RF System II（涂抹适量 Elixir 导入霜于眼周，去黑眼圈）\",\"YAMAN 嫩肤美容仪 + LaboLabo Lotion + HABA G-LOTION，用于精华导入导出。\",\"使用前，请除下身上所佩戴之饰物，如戒指、手表、颈饰、手链、耳环或一切以金属制造的仼何配件，并于涂抹导入霜后彻底洁净及抹干双手，才可进行疗程。可按个人皮肤状况及需要，选择合适疗程温度，普通可设置等级「2」，疗程温度随等级设置而增加。\",\"睡前淋浴有助于快速入睡↩︎\"]}]},\"/\":{\"title\":\"箜篌簿\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"个人微型博客\"]},{\"header\":\"🧱 笔记结构\",\"slug\":\"🧱-笔记结构\",\"contents\":[\"置顶：日常维护、健身、阅读；\",\"网络冲浪：网络的App和使用帮助\",\"评测文章：评论生活中的一切\",\"家庭生活：奶爸修炼二三事\",\"博客区：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。\"]},{\"header\":\"🍥 搭建 LearnData\",\"slug\":\"🍥-搭建-learndata\",\"contents\":[\"本文的搭建参考了网络文章LearnData-开源笔记\"]},{\"header\":\"使用帮助\",\"slug\":\"使用帮助\",\"contents\":[\"经过测试，有一下注意事项：\"]},{\"header\":\"关于文件名称\",\"slug\":\"关于文件名称\",\"contents\":[\"文件名称应当采用日期加英文的型式，不然会产生乱码。下面是示例：\",\" YYYYMMDD-name.md 20230528-Hello_World.md \"]}]},\"/intro.html\":{\"title\":\"个人介绍\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"打工人\",\"互联网街溜子，未来新手奶爸\",\"尝试分享关于自己的一切\"]}]},\"/Control/20230530-%E6%96%87%E7%AB%A0%E5%88%86%E7%B1%BB%E8%A7%84%E8%8C%83.html\":{\"title\":\"文章分类规范\",\"contents\":[{\"header\":\"引言\",\"slug\":\"引言\",\"contents\":[\"基于我的博客网站的头部导航栏排版模式，将我的博文按如下所列进行分类。\",\"读书笔记\",\"解决方案\",\"影评\",\"游记\",\"随笔\",\"评测\",\"数据库\",\"受控文件\",\"以上条目应至少选择一项填写在文章开头的描述中。如下示例：\",\"--- title: 文章分类规范 date: 2023-05-30 category: - 受控文件 tag: - category - 分类 - 个人博客 --- \"]},{\"header\":\"关于文章存放位置\",\"slug\":\"关于文章存放位置\",\"contents\":[\"网站的文件结构如下所示，对应文件应当按下图放置\",\"- docs |_ _pots |_ 游记 |_ 随笔 |_ Control |_ 受控文件 |_ life |_ evaluation |_ 评测 |_ 影评 |_ apps |_ 数据库 |_ 解决方案 |_ reading |_ 读书笔记 \"]},{\"header\":\"文件信息\",\"slug\":\"文件信息\",\"contents\":[\"生成日期：2023-05-30\",\"版本号：v1.1\",\"更改文件夹名称\"]},{\"header\":\"版本记录\",\"slug\":\"版本记录\",\"contents\":[\"生成日期：2023-05-30\",\"版本号：v1.0\"]}]},\"/posts/2023-05-28-Hello_World.html\":{\"title\":\"Hello World!\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"这是我的第一篇公众号文章，欢迎来到我的数字后花园。第一篇文章起题目，不知怎么的就想起了这段经典的代码，他是人类在计算机上第一段敲出的字符，也以此来代表我在互联网世界发出的第一声声响。\"]},{\"header\":\"Q：我为什么想要写文章？\",\"slug\":\"q-我为什么想要写文章\",\"contents\":[\"A:\",\"展开说其实能写另一篇文章了。我胸中也没多少墨水，不过是从去年开始想要对自己的生活有些记录。一方面是有些旅行随笔想要记录，又有时候是我自己的一些玩机技巧想要落到实处，又或者是我今日给老婆做了哪些菜肴想要记下来。 总而总之，就是我想让自己作为一个内容的生产者，至少也是记录者，而不是那种对网络信息穿胸过，毫无感觉的过客。\"]},{\"header\":\"Q：我为什么要建公众号？\",\"slug\":\"q-我为什么要建公众号\",\"contents\":[\"A：\",\"其实这个问题应该分成两个部分。为什么把文章发到网络上，和为什么选择公众号。\",\"为什么把文章发到网络上？\",\"主要还是想对自己有个促进作用，之前尝试过将文章内容保存到本地，可惜我自己懒，老是不了了之。另一个，可以让我本人对文章内容的正确性有一个保证。至少大家写试卷写完会检查一下吧，但是写日记的话就不会检查了hhhh。\",\"为什么选择公众号？\",\"其实就是因为公众号方便啦，没有成本。还有就是相对比较封闭，不像其他平台那样开放，不关注我的人就看不见我在写什么东西，相对自由。\",\"其实想过开个自己的小站，奈何技术力不行，而且需要的成本也不低，以后有机会或者公众号这边满足不了我的需求就自己整一个小站吧。\"]},{\"header\":\"Q：我会在公众号写什么文章？\",\"slug\":\"q-我会在公众号写什么文章\",\"contents\":[\"A：\",\"有的没得我会在公众号放下一些乱七八糟的东西，可能是一下几个方面：\",\"一些技术文档，比如我折腾我的家的过程经历\",\"一些解决方案，比如我偶尔碰到的一些小问题\",\"一些生活随笔，比如我的小小游记\",\"一些调研报告，比如我如何选购我的物品\",\"一些评论文章，咱也爱看电影是不\",\"一些受控文件，管理数字资产也要有方法论\",\"等等啦，也会发发我的摄影作品，总之就是我的一片数字后花园～\",\"当然啦，我只是个互联网菜鸡，也就图一乐哈哈哈\",\"更新就尽量做到每月至少一篇文章吧\"]}]},\"/posts/test.html\":{\"title\":\"测试文章\",\"contents\":[{\"header\":\"测试excel复制\",\"slug\":\"测试excel复制\",\"contents\":[\"品牌\",\"海尔\",\"美的\",\"卡萨帝\",\"西门子\",\"型号\",\"BCD-545WFPB\",\"BCD-485WSPZM(E)\",\"BCD-555WDGAU1\",\"KM46FA09TI\",\"价格\",\"4499\",\"6499\",\"10999\",\"8099\",\"外形尺寸（宽）\",\"908\",\"836\",\"830\",\"752\",\"外形尺寸（厚）\",\"648\",\"600\",\"677\",\"715\",\"外形尺寸（高）\",\"1905\",\"1912\",\"1908\",\"1911\",\"预留间隙\",\"未提及\",\"5\",\"20\",\"100\",\"总容积\",\"545\",\"485\",\"555\",\"452\",\"冷藏室容积\",\"327\",\"318\",\"368\",\"207\",\"变温室容积\",\"37\",\"0\",\"96\",\"冷冻室容积\",\"181\",\"167\",\"187\",\"149\",\"开门方式\",\"十字开门\",\"十字开门\",\"法式多门\",\"十字门\",\"每平米容积\",\"926.26584\",\"966.9059011\",\"987.702657\",\"840.648713\",\"面板材质\",\"PCM彩涂板\",\"PCM彩涂板\",\"钢化玻璃\",\"PCM彩涂板\",\"制冷方式\",\"风冷\",\"风冷\",\"风冷\",\"混冷\",\"蒸发器数\",\"未提及\",\"1\",\"未提及\",\"3\",\"压缩机数\",\"未提及\",\"1\",\"未提及\",\"1\",\"制冷能力\",\"7.5\",\"5\",\"7.5\",\"未提及\",\"电耗\",\"0.93\",\"0.81\",\"0.79\",\"1.05\",\"噪声\",\"38\",\"36\",\"35\",\"未提及\"]},{\"header\":\"测试飞书多维表格复制\",\"slug\":\"测试飞书多维表格复制\",\"contents\":[]},{\"header\":\"测试文章引用\",\"slug\":\"测试文章引用\",\"contents\":[\"你可以在此处看到我的第一篇文章\"]}]},\"/apps/20230530-%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.html\":{\"title\":\"网站搭建说明\",\"contents\":[{\"header\":\"原标题：LearnData 开源笔记\",\"slug\":\"原标题-learndata-开源笔记\",\"contents\":[\"原文链接：https://newzone.top/ 主题页配置：https://theme-hope.vuejs.press/zh/guide/get-started/intro.html\"]},{\"header\":\"✨ 初衷\",\"slug\":\"✨-初衷\",\"contents\":[\"曾经，我把知识记录在 Notion、Obsidian、飞书等知识管理软件上，导致笔记散落各处，使用起来很麻烦，也难以对外分享。\",\"更重要的是，笔记里的知识并不属于你，只有经过消化、应用，才会成为自己的知识。\",\"因此，我基于 VuePress 和 vuepress-theme-hope 建立了 LearnData，将所有笔记与文章重新整合，聚合到同一页面形成知识库，方便自己使用和分享。\",\"笔记 + 文章 = LearnData 知识库\",\"笔记/博客自动化发布\"]},{\"header\":\"🧱 笔记结构\",\"slug\":\"🧱-笔记结构\",\"contents\":[\"置顶：日常习惯、健身、阅读；\",\"代码：常用代码的学习和使用笔记；\",\"软件应用：常用应用、Chrome 扩展和相关教程；\",\"页面开发：页面插件和框架生成工具；\",\"网站部署：网站相关的工具和知识收集；\",\"Linux 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；\",\"系统问题：Windows 系统优化和相关问题；\",\"生活区：说明书、生活记录和小技巧；\",\"博客区：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。\"]},{\"header\":\"🍥 搭建 LearnData\",\"slug\":\"🍥-搭建-learndata\",\"contents\":[\"首先，进入 LearnData 项目页，点击右上方的「Use this template」>「Create a new repository」。\",\"接着，进入项目仓库的「Settings」>「Actions」>「General」，选中底部 Workflow permissions 中的 Read and write permissions，然后点击保存即可。如果未授权，GitHub Page 部署会由于 repo 权限不足而报错 failed with exit code 128。\",\"接下来，请进入菜单栏顶部的「Actions」>「最新的 workflow」，并点击右上方的「Re-run jobs」>「Re-run all jobs」，以重新生成网页。若部署正确，GitHub 将自动搭建 gh-page 分支页面。\",\"需要注意的是：如果你不需要将网页部署同步到个人服务器，请删除 .github/workflows/main.yml 中 Sync files 区块的代码，否则会出现报错 Error: Input required and not supplied: server。\",\" ### 没有服务器的话，请删除本区块代码，防止报错 ### # 将页面推送到服务器，timeout 时间从默认的 1 分钟调整到 10 分钟。 - name: 📂 Sync files uses: SamKirkland/FTP-Deploy-Action@v4.3.4 with: local-dir: docs/.vuepress/dist/ server: ${{ secrets.ftp_host }} username: ${{ secrets.ftp_username }} password: ${{ secrets.ftp_password }} port: ${{ secrets.ftp_port }} # 建议更改默认的 21 端口 timeout: 600000 ### 没有服务器的话，请删除本区块代码，防止报错 ### \",\"然后点击「Settings」, 修改 Repository name 为 用户名.github.io。假设你的仓库链接是 https://github.com/xxx/LearnData，那么中间的 xxx 就是你的用户名。如果该仓库名称已被使用，GitHub Pages 将无法正常显示样式，请查看页面底部的常见问题来设置子域名。\",\"在同一页面选择「Settings」>「Pages」>「Build and deployment」>「Branch」, 将 gh-page branch 设为 GitHub Pages 的来源，网站运行目录默认为 /(root)。设置完成后，点击「Save」。如果找不到 gh-pages 分支，可以按照上面提到的第三步进行操作，或在 GitHub 中修改任意文件以手动触发 GitHub Action，等待其执行完成后，再重新设置 Pages 的来源。\",\"设置成功后，页面会提示访问链接：https://xxx.github.io/，知识库搭建完毕。\",\"如果未出现访问链接提示或不能打开 GitHub Pages，则删除 docs/_posts 路径下的博客文件，GitHub Pages 有时会对旧文章里的代码报错。\",\"注意：如果出现报错 Error: Input required and not supplied: server，请删除 .github/workflows/main.yml 中 Sync files 区块的代码，以避免出现报错。\"]},{\"header\":\"🔣 配置 LearnData\",\"slug\":\"🔣-配置-learndata\",\"contents\":[]},{\"header\":\"文档结构\",\"slug\":\"文档结构\",\"contents\":[\"LearnData 的网站配置和文本存放在 docs 文件夹下，文章与页面配置可参考主目录下的 samplepage.md。\",\"docs 目录结构如下：\",\"docs |── .vuepress # 网站配置 │ ├── config.ts # 网站环境依赖和网站属性 │ ├── sidebar.ts # 侧边栏 │ ├── navbar.ts # 导航栏 │ ├── theme.ts # 主题和插件 │ └── templateBuild.html # 网页模板，网站关键词和统计 |── _posts # 博客文章目录 ├── _temp # 草稿箱 ├── reading # 读书笔记 ├── anyname # 自定义笔记 ├── blog.md # 博客页面 └── intro.md # 博主个人介绍 \",\"docs/.vuepress 路径下是网站的配置文件，我已添加了详细的注释。你可以参考注释和 vuepress-theme-hope 配置案例来调整配置。请在 docs/.vuepress/sidebar.ts 文件中修改文件夹路径，后台会自动抓取路径下的 md 文件来生成侧边栏。docs/.vuepress/theme.ts 有评论插件的相关配置。\",\"注意：\",\"LearnData 默认使用了 algolia 全文搜索。如果你没有使用 algolia 爬虫，则可以在 docs/.vuepress/config.ts 文件中删除 plugins 下的 docsearchPlugin 区块，网站将转用本地全文索引搜索。\",\"docs/_temp 文件夹默认不同步到 GitHub 上。你可以手动在本地建立 _temp 文件夹，用来存放草稿。\",\"自 VuePress2 的 beta.54 版本开始，文件夹名前缀为 _ 在生成链接时将被省略，例如文章路径为 /_posts/，但网页链接路径会是 /posts/。\"]},{\"header\":\"看板娘\",\"slug\":\"看板娘\",\"contents\":[\"LearnData 集成了看板娘 Live2D Widget，支持随机对话、切换人物服饰和玩打飞机游戏，能提升网站美观度和趣味性。如果不需要看板娘，可以删除 docs\\\\.vuepress\\\\public 下的 live2d-widget 文件夹。\",\"如果网站部署在子页面 https://xxx.github.io/yyy，则需将子页面路径 yyy 加入到以下两个文件：\",\"将 docs\\\\.vuepress\\\\public\\\\live2d-widget\\\\autoload.js 文件第三行的 const live2d_path = \\\"/live2d-widget/\\\" 修改为 const live2d_path = \\\"/yyy/live2d-widget/\\\"。\",\"将 docs\\\\.vuepress\\\\templateBuild.html 文件中看板娘区块代码 <script src=\\\"/live2d-widget/autoload.js\\\"> 修改为 <script src=\\\"/yyy/live2d-widget/autoload.js\\\">。\",\"如果你想要修改看板娘模型，请参考 docs\\\\.vuepress\\\\public\\\\live2d-widget 路径下的 README 和修改说明。如果你想在服务器上自建 live2d api，请注意添加跨域配置，否则可能会出现只显示文字而不显示看板娘图片的情况。\"]},{\"header\":\"读书笔记\",\"slug\":\"读书笔记\",\"contents\":[\"读书笔记中可能会有大量的原文引用，这与 LearnData 精简化知识点的初衷并不相符。因此，我们使用 docsify 来构建读书笔记，并将其放置于 docs/reading 目录下。在生成静态页面后，该路径下的文件不会被转换为 HTML 文件，而是将被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。\",\"如果你没有部署 Waline，也不需要阅读量统计和评论区，可以删除 docs\\\\reading\\\\index.html 中的 Waline 区块。\",\"waline: { serverURL: \\\"https://waline.newzone.top\\\", ... } \"]},{\"header\":\"本地图片引用\",\"slug\":\"本地图片引用\",\"contents\":[\"为了避免在生成静态页面时出现 Rollup failed to resolve import 错误，本地图片必须保存在 docs/.vuepress/public 路径下。如果图片名称为 1.png，保存在 docs/.vuepress/public/imgs 路径下，则可以使用以下链接来引用该图片：/imgs/1.png 或使用 Markdown 图片链接：![](/imgs/1.png)。本方法也适用于将附件部署到网站上。\"]},{\"header\":\"🖥️ 网站部署\",\"slug\":\"🖥️-网站部署\",\"contents\":[\"在将 LearnData 推送到 GitHub 后，会自动生成可访问的网页。但由于国内访问 GitHub Pages 的速度不稳定，为了确保网站能够正常访问，建议增加国内的访问节点。\",\"很多人选择使用 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee 上，从而生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 有很多限制，例如必须实名认证、免费版无法自定义域名，近期也发生过下架风波。因此，我没有选择 Gitee，而是将文档同步到国内服务器（域名需要备案）或 Vercel（国外服务可能会出现断网）。\"]},{\"header\":\"同步到服务器\",\"slug\":\"同步到服务器\",\"contents\":[\"如果你的项目已经搭建好，但出现了红色的叉叉提示，这可能是 GitHub Actions 同步到服务器时发生了错误。你需要进入项目仓库的「Setting」>「Secrets」>「Action」，并添加 FTP_HOST、FTP_PORT、FTP_USERNAME 和 FTP_PASSWORD 的密钥。之后，每当文件发生变化时，GitHub Actions 就会将修改推送到服务器的 FTP 上。\",\"如果你不需要将文档同步到服务器的 FTP 上，则请删除 .github/workflows/main.yml 中 Sync files 区块的代码，以避免出现报错。或者根据 GitHub 同步到 OSS 步骤将网页部署到云存储上。\"]},{\"header\":\"部署到 Vercel\",\"slug\":\"部署到-vercel\",\"contents\":[\"Vercel 的速度比 GitHub Pages 稳定一些，不过「*.vercel.app」域名已经被 DNS 污染。建议国内用户绑定自定义域名以获得更好的使用体验。\",\"Vercel 部署步骤如下：\",\"点击 或将 https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages 中的 rockbenben/LearnData 改为 你的用户名/仓库名，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，请使用 GitHub 账户进行快捷登录。\",\"输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 Create。\",\"创建 Vercel 项目\",\"接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 Go to Dashboard 跳转到应用的控制台。\",\"Vercel 部署成功提示\",\"为了让 Vercel 页面与 GitHub Pages 自动保持同步更新，你需要配置 PERSONAL_TOKEN 和 GitHub Actions。\",\"新建 Personal access tokens，勾选权限「repo (Full control of private repositories)」，生成后复制 token 值。\",\"在项目仓库中选择「setting」>「Secrets」>「Action」，新建密钥 PERSONAL_TOKEN，并填入刚复制的 token 值。\",\"将下方代码编辑到 .github/workflows/main.yml 文件末尾，注意修改 dst_owner 和 dst_repo_name。\",\"# 将页面更新到 Vercel - name: Copy file to Vercel if: always() uses: andstor/copycat-action@v3 with: personal_token: ${{ secrets.PERSONAL_TOKEN }} src_path: /. dst_path: / # 你的用户名 dst_owner: rockbenben # 与 Vercel 链接的仓库名，也就是 Vercel 部署时新建的仓库 dst_repo_name: LearnData-Vercel dst_branch: main src_branch: gh-pages clean: true \"]},{\"header\":\"🤔 常见问题\",\"slug\":\"🤔-常见问题\",\"contents\":[]},{\"header\":\"网页显示异常\",\"slug\":\"网页显示异常\",\"contents\":[\"如果你的网站只显示文字而不能正常显示网页，可能是因为网站路径不正确导致的页面样式错误。比如，GitHub Page 提示访问链接 https://xxx.github.io/yyy，则需要将 docs/.vuepress/config.ts 中的 base 改为 /yyy，其默认值为 /。请按照此路径将网站的 base 设置正确，以确保你的网站能够正常显示。\"]},{\"header\":\"同步服务器报错\",\"slug\":\"同步服务器报错\",\"contents\":[\"Error: Input required and not supplied: server 表示服务器配置错误，请按照上方的网站部署步骤检查配置。如果你不需要将文件同步到服务器，则请删除 .github/workflows/main.yml 中 Sync files 区块的代码，以避免出现报错。\",\"FTPError: 530 Login authentication failed 指 FTP 密码错误或账号不存在，可使用 FileZilla 来测试 FTP 的有效性。\",\"Error: Timeout (control socket) 指同步服务器出现超时报错。如果出现该错误，可以进入 Actions 页面，点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭服务器防火墙，检查 GitHub 服务器 IP 是否屏蔽了。\"]},{\"header\":\"ERR_MODULE\",\"slug\":\"err-module\",\"contents\":[\"如果出现 Error [ERR_MODULE_NOT_FOUND]: Cannot find module 的报错，可能是第三方插件或 pacakge.json 环境依赖未正确配置。此报错出现的几率极低，如果遇到，可以使用最新版本的 package.json 和 pnpm-lock.yaml 来覆盖本地设置，或者删除主目录下的 .npmrc 文件。\"]},{\"header\":\"静态文件名字总变\",\"slug\":\"静态文件名字总变\",\"contents\":[\"VuePress 默认使用 Vite。在打包时，会为文件引入时间戳和 hash，并对其进行重命名。这会导致即使没有更新文章，大部分生成的静态文件也会发生更改。如果你希望减少重命名频次，可以使用「nohashname」分支。该分支使用的打包工具是 Webpack，并使用 chainWebpack 设置文件命名规则，避免不必要的文件重命名。（注意：nohashname 非主分支，不作功能更新。）\"]},{\"header\":\"本地运行 LearnData\",\"slug\":\"本地运行-learndata\",\"contents\":[\"为了本地运行，你需要安装 npm 和 pnpm 环境，可参考环境部署教程。\",\"将 LearnData 项目下载到本地后，在项目目录下打开终端，输入命令 pnpm i 安装依赖。\",\"在终端中输入命令 pnpm docs:dev，若成功则会提示访问链接，默认为 http://localhost:8080/。\",\"本地服务运行后，修改文件时页面会同步更新预览。若需停止本地服务器，可在终端中按下 Ctrl + C。\"]}]},\"/Control/\":{\"title\":\"Control\",\"contents\":[]},\"/posts/\":{\"title\":\"Posts\",\"contents\":[]},\"/apps/\":{\"title\":\"Apps\",\"contents\":[]}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
