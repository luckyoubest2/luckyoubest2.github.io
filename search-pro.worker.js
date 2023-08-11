const g=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},d=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of d(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=g(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&d(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=g(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=g(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=g(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/DailyRoutine.html\":{\"title\":\"每日仪式\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"每日仪式是个人生活习惯的核心。它看起来可能会显得固化、死板、功利，有人反馈「透露着一股形式主义气息」，但是，这正是我想要的：遵循一个固定、程序化的流程，有规律地养成习惯，实现自我提升。\"]},{\"header\":\"仪式清单\",\"slug\":\"仪式清单\",\"contents\":[]},{\"header\":\"5AM Club\",\"slug\":\"_5am-club\",\"contents\":[\"5AM Club 是我的高效早晨方案：\",\"早上 5 点起床，使用手环震动闹钟。\",\"泡杯咖啡，准备早餐，开始第一个工作番茄。\",\"工作 25 分钟休息 5 分钟，休息期间完成每日必须：拍照打卡发 SNS，吃早餐。\",\"每天最低完成 8 个番茄，之后可进入长休息区间，进行家务打扫、健身、娱乐。\",\"晚上 10 点睡觉，保证充足的睡眠时间。\",\"Huberman Lab 建议早晨不一定需要进食，可以到中午再进食，改变身体的新陈代谢周期；醒来后两到四小时再摄入咖啡因，并尽量避免在午后摄入咖啡因，以防下午的 cafferine crush。请根据个人情况灵活调整计划。\"]},{\"header\":\"每日\",\"slug\":\"每日\",\"contents\":[\"早上创造美好情绪：赞美、仪式感、吃好吃的、看搞笑视频、听歌。\",\"唱歌：唱一首你喜欢的歌曲（外语美声歌曲可以增加脂肪消耗，例如：秋山雅史的《千の風になって》）。\",\"自拍视频：说一句话（比如当天的目标）来鼓励自己。在前一天想好录制内容，以获得积极情绪。\",\"参考积极心理学，收集积极情绪材料，放在显眼的地方：家人的照片、取得的成绩、美好的回忆、憧憬的未来、向往的地方、喜欢的艺术（音乐、名画、诗句）。\",\"人际连接：通过直播连麦与陌生人沟通 15 分钟，例如：播客、抖音语音电台直播 PK。\",\"别人很重要：帮助别人，能让人更健康、更幸福。当心情不好时，去帮助其他人，心情会变得更好。\",\"表扬和自我表扬：赞美自己、家人，发挥标志性优势，总比弥补缺点更有效。\",\"微习惯：\",\"每工作 20 分钟，休息 20 秒，然后做 10 个深蹲；出书房或上完厕所，再做 15 个俯卧撑。在运动前，在白板上写出正字，每一组动作用一个笔画表示。进阶阶段可以用固定机位拍摄视频，监督运动习惯。拍摄时，使用关键句「切掉/保留」，配合 Quickcut 快速剪辑视频。\",\"睡前：每天泡脚 20 分钟（水温 40℃），短时间的泡脚可以帮助睡眠更快入睡。此外，每天睡前 90 分钟，淋浴（水温 38~43℃，淋浴 10 分钟）或泡澡也可以助你更快进入睡眠状态。[1]\",\"间隔学习：穿插学习不同领域内容\",\"阅读看书：每天花 30 分钟读书，并输出笔记。\",\"墨墨背单词：每天背 20 个单词，虽然用处不大，但可以让脑子换个思路。\",\"笔记复习：利用 SuperMemo 记忆模型，复习心理认知、沟通理论和行为反思等笔记。\",\"当日回顾：每天记录 3 件好事，总结好事发生的原因，并与家人分享。\",\"这可以是日常生活中常见的小事，比如读到一本好书、吃到一道好菜、听到一个亲友的好消息、在公交车上有人为你让座、孩子今天会走路了，等等。\"]},{\"header\":\"定期\",\"slug\":\"定期\",\"contents\":[\"月底反思：检查日记和成果，对当月进行复盘，并将其同步给家人，征求意见、批评并记录。 \",\"每月复盘参照 Allison Seboldt，作者会分享他的收入并反思上个月的成就。\",\"阅读 JustinJ ackson，作者在 2018 年初创办 Transistor 以来，一直在分享他的项目，整理了在此过程中学到的许多经验教训。\",\"积极自我介绍：每三个月，讲述一个「最佳的我」的故事，植入你的优势，进行自我肯定。\"]},{\"header\":\"自我监控\",\"slug\":\"自我监控\",\"contents\":[\"为了更好地监督自己，我制定了一套自我监控方案，以记录自己的私人工作状态。\",\"开机（8 点）启动录屏命令，并检测护眼提醒是否开启。可参考 FFmpeg 录屏方案来修改命令：\",\"ffmpeg -f gdigrab -r 0.1 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 -b:v 0 -crf 32 output.mp4 -f dshow -s 640x480 -i video='USB2.0 PC CAMERA' -filter_complex 'overlay=W-w-1:H-h-50' -y \",\"晚上 10 点执行关机程序：静音、关闭护眼提醒、关闭录屏终端，并使用 dvr-scan 删除视频中的静止帧。这些步骤可以通过 AutoHotkey 命令自动完成。\",\"Send, {Volume_Mute} Process, Close, Stretchly.exe Process, Close, pwsh.exe Sleep, 500000 Run, PowerShell.exe -NoExit -Command &{dvr-scan -i output.mp4 -o %A_YYYY%-%A_MM%-%A_DD%_Scanned.avi}, D:\\\\Backup\\\\Libraries\\\\Desktop \",\"使用 VLC 播放器可以以 31.25 倍的速度回放监控视频，并结合 ManicTime 来回顾当日内容。要轻松实现 VLC 的高倍速播放，可以在「菜单栏」->「视图」中开启「状态栏」。此外，通过剪映，可以达到 100 倍的播放速度。\"]},{\"header\":\"时间管理\",\"slug\":\"时间管理\",\"contents\":[\"GTD 的存在是让大脑清空不混乱目的，明确知道下一步应该做什么。GTD 流程依次为捕获（Capture），明晰（Clarify），组织（Organize），回顾（Reflect），执行（Engage）。\",\"执行时，将 GTD 按功能与目的划分为多个清单。\",\"收集箱（Inbox）\",\"执行清单（@Context task）\",\"等待清单（\\\"Waiting for\\\" task）\",\"项目清单（\\\"Plan project\\\" plan）\",\"可能清单（Someday/maybe）\",\"参考资料（Reference）\",\"回收箱（Trash）\",\"当任务捕获到收集箱后，参考下方的固定流程将其整理不同的清单中。\",\"GTD 任务转移到清单\",\"从 GTD 流程角度，执行任务和计划。\",\"GTD 流程步骤\",\"GTD 工具原本用的是 Microsoft To Do，「我的一天」功能非常适合聚焦，但有次出现了同步问题，就转用滴答清单。滴答清单除基础 Todo 功能外，还能用日视图管理具体时间安排，添加跨天长时间任务，并在日历、看板和甘特图中查看。\",\"滴答清单的缺点也很明显，功能过于追求全，功能打磨得不够细节，无法满足定制需求。比如，没有任务跳过功能，对于循环任务只能点完成，导致记录与实际不符；跨越多天的任务不想在「今天清单」中出现出现，但一直在提醒，导致无法清空；过滤器逻辑单一，筛选元素教少。如果你的任务都可以一天内完成，不需要记录持续多天的计划，不需要买滴答的高级会员，基础功能足够满足你了。\",\"本节内容来自 Topbook 的 GTD 自我管理 - 时间管理教程，改变了我对 GTD 的认知，把事情做好，而不是把事情做完。建议完整阅读。\"]},{\"header\":\"日常习惯\",\"slug\":\"日常习惯\",\"contents\":[\"锚点\",\"在我……\",\"我会……\",\"庆祝\",\"20s 休息提示\",\"拿下眼镜，画板上添笔画后\",\"深蹲 15 个\",\"双手肘向后\",\"5mins 休息提示\",\"拿下眼镜，画板上添笔画后\",\"重力拉伸 15 次，2 组\",\"双手肘向后\",\"上完厕所\",\"洗好手，画板上添笔画后\",\"俯卧撑 15 个\",\"双手肘向后\",\"出书房\",\"画板上添笔画后\",\"俯卧撑 15 个\",\"双手肘向后\",\"午餐\",\"放下碗筷\",\"吃维生素\",\"想象自己发光\",\"午睡\",\"打开大排灯\",\"设置 30 分钟的闹钟\",\"想象自己发光\",\"洗澡\",\"打开花洒\",\"深蹲 15 个\",\"哼歌\",\"刷完牙\",\"放下牙刷\",\"俯卧撑 15 个\",\"双手肘向后\",\"晚上\",\"上床\",\"伸展并触碰脚趾；读书\",\"想象自己发光\",\"睡觉\",\"关灯\",\"打开白噪音\",\"想象自己发光\",\"休息选项：喝口水、洗脸、看看窗外、眼部按摩仪、按摩头皮。\",\"运动选项：跳绳、有氧拳击、B 站轻度健身操（Jo 姐？）。\",\"睡眠知识：睡眠时的体温理想情况下会比正常体温低二到三度，因此睡前应尽量降低低温，避免激烈运动。同时，手机屏幕等产生的光线会非常影响睡眠，建议尽量避免睡前使用手机。睡醒后应尽快暴露在室外，让自然光线把身体唤醒，只需要短短十分钟。\"]},{\"header\":\"美容仪器\",\"slug\":\"美容仪器\",\"contents\":[\"为了避免家里的美容仪器闲置浪费，我制定了定期使用计划。（请勿参考型号购买）\",\"按摩椅 + 眼部按摩仪 + belulu hikari LED 彩光美容仪，模式 A「嫩肤」10 分钟，模式 B「祛痘」8 分钟。\",\"Panasonic EH-SA96 蒸面喷雾器：每周两次喷雾蒸面，需变压器转接。\",\"射频仪：每周使用 1-2 次 RF 射频，10 分钟一次，除皱紧肤，射频后敷面膜或蒸面补水。 \",\"Tripollar STOP RF 射频美颜仪，Dr. Bauer Eye Reshaping RF System II（涂抹适量 Elixir 导入霜于眼周，去黑眼圈）\",\"YAMAN 嫩肤美容仪 + LaboLabo Lotion + HABA G-LOTION，用于精华导入导出。\",\"使用前，请除下身上所佩戴之饰物，如戒指、手表、颈饰、手链、耳环或一切以金属制造的仼何配件，并于涂抹导入霜后彻底洁净及抹干双手，才可进行疗程。可按个人皮肤状况及需要，选择合适疗程温度，普通可设置等级「2」，疗程温度随等级设置而增加。\",\"睡前淋浴有助于快速入睡↩︎\"]}]},\"/\":{\"title\":\"箜篌簿\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"个人微型博客\"]},{\"header\":\"🧱 笔记结构\",\"slug\":\"🧱-笔记结构\",\"contents\":[\"置顶：日常维护、健身、阅读；\",\"网络冲浪：网络的App和使用帮助\",\"评测文章：评论生活中的一切\",\"家庭生活：奶爸修炼二三事\",\"博客区：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。\"]},{\"header\":\"🍥 搭建 LearnData\",\"slug\":\"🍥-搭建-learndata\",\"contents\":[\"本文的搭建参考了网络文章LearnData-开源笔记\"]},{\"header\":\"使用帮助\",\"slug\":\"使用帮助\",\"contents\":[\"经过测试，有一下注意事项：\"]},{\"header\":\"关于文件名称\",\"slug\":\"关于文件名称\",\"contents\":[\"文件名称应当采用日期加英文的型式，不然会产生乱码。下面是示例：\",\" YYYYMMDD-name.md 20230528-Hello_World.md \"]}]},\"/intro.html\":{\"title\":\"个人介绍\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"打工人\",\"互联网街溜子，未来新手奶爸\",\"尝试分享关于自己的一切\"]}]},\"/Control/20230530-%E6%96%87%E7%AB%A0%E5%88%86%E7%B1%BB%E8%A7%84%E8%8C%83.html\":{\"title\":\"文章分类规范\",\"contents\":[{\"header\":\"引言\",\"slug\":\"引言\",\"contents\":[\"基于我的博客网站的头部导航栏排版模式，将我的博文按如下所列进行分类。\",\"读书笔记\",\"解决方案\",\"影评\",\"游记\",\"随笔\",\"评测\",\"数据库\",\"受控文件\",\"以上条目应至少选择一项填写在文章开头的描述中。如下示例：\",\"--- title: 文章分类规范 date: 2023-05-30 category: - 受控文件 tag: - category - 分类 - 个人博客 --- \"]},{\"header\":\"关于文章存放位置\",\"slug\":\"关于文章存放位置\",\"contents\":[\"网站的文件结构如下所示，对应文件应当按下图放置\",\"- docs |_ _pots |_ 游记 |_ 随笔 |_ Control |_ 受控文件 |_ life |_ evaluation |_ 评测 |_ 影评 |_ apps |_ 数据库 |_ 解决方案 |_ reading |_ 读书笔记 \"]},{\"header\":\"文件信息\",\"slug\":\"文件信息\",\"contents\":[\"生成日期：2023-05-30\",\"版本号：v1.1\",\"更改文件夹名称\"]},{\"header\":\"版本记录\",\"slug\":\"版本记录\",\"contents\":[\"生成日期：2023-05-30\",\"版本号：v1.0\"]}]},\"/posts/20230528-Hello_World.html\":{\"title\":\"Hello World!\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"这是我的第一篇公众号文章，欢迎来到我的数字后花园。第一篇文章起题目，不知怎么的就想起了这段经典的代码，他是人类在计算机上第一段敲出的字符，也以此来代表我在互联网世界发出的第一声声响。\"]},{\"header\":\"Q：我为什么想要写文章？\",\"slug\":\"q-我为什么想要写文章\",\"contents\":[\"A:\",\"展开说其实能写另一篇文章了。我胸中也没多少墨水，不过是从去年开始想要对自己的生活有些记录。一方面是有些旅行随笔想要记录，又有时候是我自己的一些玩机技巧想要落到实处，又或者是我今日给老婆做了哪些菜肴想要记下来。 总而总之，就是我想让自己作为一个内容的生产者，至少也是记录者，而不是那种对网络信息穿胸过，毫无感觉的过客。\"]},{\"header\":\"Q：我为什么要建公众号？\",\"slug\":\"q-我为什么要建公众号\",\"contents\":[\"A：\",\"其实这个问题应该分成两个部分。为什么把文章发到网络上，和为什么选择公众号。\",\"为什么把文章发到网络上？\",\"主要还是想对自己有个促进作用，之前尝试过将文章内容保存到本地，可惜我自己懒，老是不了了之。另一个，可以让我本人对文章内容的正确性有一个保证。至少大家写试卷写完会检查一下吧，但是写日记的话就不会检查了hhhh。\",\"为什么选择公众号？\",\"其实就是因为公众号方便啦，没有成本。还有就是相对比较封闭，不像其他平台那样开放，不关注我的人就看不见我在写什么东西，相对自由。\",\"其实想过开个自己的小站，奈何技术力不行，而且需要的成本也不低，以后有机会或者公众号这边满足不了我的需求就自己整一个小站吧。\"]},{\"header\":\"Q：我会在公众号写什么文章？\",\"slug\":\"q-我会在公众号写什么文章\",\"contents\":[\"A：\",\"有的没得我会在公众号放下一些乱七八糟的东西，可能是一下几个方面：\",\"一些技术文档，比如我折腾我的家的过程经历\",\"一些解决方案，比如我偶尔碰到的一些小问题\",\"一些生活随笔，比如我的小小游记\",\"一些调研报告，比如我如何选购我的物品\",\"一些评论文章，咱也爱看电影是不\",\"一些受控文件，管理数字资产也要有方法论\",\"等等啦，也会发发我的摄影作品，总之就是我的一片数字后花园～\",\"当然啦，我只是个互联网菜鸡，也就图一乐哈哈哈\",\"更新就尽量做到每月至少一篇文章吧\"]}]},\"/posts/230624-%E6%B5%8B%E8%AF%95.html\":{\"title\":\"测试文章\",\"contents\":[{\"header\":\"测试excel复制\",\"slug\":\"测试excel复制\",\"contents\":[\"品牌\",\"海尔\",\"美的\",\"卡萨帝\",\"西门子\",\"型号\",\"BCD-545WFPB\",\"BCD-485WSPZM(E)\",\"BCD-555WDGAU1\",\"KM46FA09TI\",\"价格\",\"4499\",\"6499\",\"10999\",\"8099\",\"外形尺寸（宽）\",\"908\",\"836\",\"830\",\"752\",\"外形尺寸（厚）\",\"648\",\"600\",\"677\",\"715\",\"外形尺寸（高）\",\"1905\",\"1912\",\"1908\",\"1911\",\"预留间隙\",\"未提及\",\"5\",\"20\",\"100\",\"总容积\",\"545\",\"485\",\"555\",\"452\",\"冷藏室容积\",\"327\",\"318\",\"368\",\"207\",\"变温室容积\",\"37\",\"0\",\"96\",\"冷冻室容积\",\"181\",\"167\",\"187\",\"149\",\"开门方式\",\"十字开门\",\"十字开门\",\"法式多门\",\"十字门\",\"每平米容积\",\"926.26584\",\"966.9059011\",\"987.702657\",\"840.648713\",\"面板材质\",\"PCM彩涂板\",\"PCM彩涂板\",\"钢化玻璃\",\"PCM彩涂板\",\"制冷方式\",\"风冷\",\"风冷\",\"风冷\",\"混冷\",\"蒸发器数\",\"未提及\",\"1\",\"未提及\",\"3\",\"压缩机数\",\"未提及\",\"1\",\"未提及\",\"1\",\"制冷能力\",\"7.5\",\"5\",\"7.5\",\"未提及\",\"电耗\",\"0.93\",\"0.81\",\"0.79\",\"1.05\",\"噪声\",\"38\",\"36\",\"35\",\"未提及\"]},{\"header\":\"测试飞书多维表格复制\",\"slug\":\"测试飞书多维表格复制\",\"contents\":[]},{\"header\":\"测试文章引用\",\"slug\":\"测试文章引用\",\"contents\":[\"你可以在此处看到我的第一篇文章 这是一段直接从Obsidian复制来的链接，理论上应该连接到第一级目录下的README 这是一段直接从Obsidian复制来的链接，理论上应该连接到20230530-网站搭建说明\",\"这是加\\\"/\\\"的版本，理论上应该连接到第一级目录下的README 这是加\\\"/\\\"的版本，理论上应该连接到20230530-网站搭建说明\"]},{\"header\":\"测试文件名\",\"slug\":\"测试文件名\",\"contents\":[\"测试文件名要求\",\" test 成功 20230528-测试 成功 t@#5测试 失败 测试文件 失败 t-测试文件 失败 20230624-测试 \"]}]},\"/apps/20230530-%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E8%AF%B4%E6%98%8E.html\":{\"title\":\"网站搭建说明\",\"contents\":[{\"header\":\"原标题：LearnData 开源笔记\",\"slug\":\"原标题-learndata-开源笔记\",\"contents\":[\"原文链接：https://newzone.top/ 主题页配置：https://theme-hope.vuejs.press/zh/guide/get-started/intro.html\"]},{\"header\":\"✨ 初衷\",\"slug\":\"✨-初衷\",\"contents\":[\"曾经，我把知识记录在 Notion、Obsidian、飞书等知识管理软件上，导致笔记散落各处，使用起来很麻烦，也难以对外分享。\",\"更重要的是，笔记里的知识并不属于你，只有经过消化、应用，才会成为自己的知识。\",\"因此，我基于 VuePress 和 vuepress-theme-hope 建立了 LearnData，将所有笔记与文章重新整合，聚合到同一页面形成知识库，方便自己使用和分享。\",\"笔记 + 文章 = LearnData 知识库\",\"笔记/博客自动化发布\"]},{\"header\":\"🧱 笔记结构\",\"slug\":\"🧱-笔记结构\",\"contents\":[\"置顶：日常习惯、健身、阅读；\",\"代码：常用代码的学习和使用笔记；\",\"软件应用：常用应用、Chrome 扩展和相关教程；\",\"页面开发：页面插件和框架生成工具；\",\"网站部署：网站相关的工具和知识收集；\",\"Linux 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；\",\"系统问题：Windows 系统优化和相关问题；\",\"生活区：说明书、生活记录和小技巧；\",\"博客区：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。\"]},{\"header\":\"🍥 搭建 LearnData\",\"slug\":\"🍥-搭建-learndata\",\"contents\":[\"首先，进入 LearnData 项目页，点击右上方的「Use this template」>「Create a new repository」。\",\"接着，进入项目仓库的「Settings」>「Actions」>「General」，选中底部 Workflow permissions 中的 Read and write permissions，然后点击保存即可。如果未授权，GitHub Page 部署会由于 repo 权限不足而报错 failed with exit code 128。\",\"接下来，请进入菜单栏顶部的「Actions」>「最新的 workflow」，并点击右上方的「Re-run jobs」>「Re-run all jobs」，以重新生成网页。若部署正确，GitHub 将自动搭建 gh-page 分支页面。\",\"需要注意的是：如果你不需要将网页部署同步到个人服务器，请删除 .github/workflows/main.yml 中 Sync files 区块的代码，否则会出现报错 Error: Input required and not supplied: server。\",\" ### 没有服务器的话，请删除本区块代码，防止报错 ### # 将页面推送到服务器，timeout 时间从默认的 1 分钟调整到 10 分钟。 - name: 📂 Sync files uses: SamKirkland/FTP-Deploy-Action@v4.3.4 with: local-dir: docs/.vuepress/dist/ server: ${{ secrets.ftp_host }} username: ${{ secrets.ftp_username }} password: ${{ secrets.ftp_password }} port: ${{ secrets.ftp_port }} # 建议更改默认的 21 端口 timeout: 600000 ### 没有服务器的话，请删除本区块代码，防止报错 ### \",\"然后点击「Settings」, 修改 Repository name 为 用户名.github.io。假设你的仓库链接是 https://github.com/xxx/LearnData，那么中间的 xxx 就是你的用户名。如果该仓库名称已被使用，GitHub Pages 将无法正常显示样式，请查看页面底部的常见问题来设置子域名。\",\"在同一页面选择「Settings」>「Pages」>「Build and deployment」>「Branch」, 将 gh-page branch 设为 GitHub Pages 的来源，网站运行目录默认为 /(root)。设置完成后，点击「Save」。如果找不到 gh-pages 分支，可以按照上面提到的第三步进行操作，或在 GitHub 中修改任意文件以手动触发 GitHub Action，等待其执行完成后，再重新设置 Pages 的来源。\",\"设置成功后，页面会提示访问链接：https://xxx.github.io/，知识库搭建完毕。\",\"如果未出现访问链接提示或不能打开 GitHub Pages，则删除 docs/_posts 路径下的博客文件，GitHub Pages 有时会对旧文章里的代码报错。\",\"注意：如果出现报错 Error: Input required and not supplied: server，请删除 .github/workflows/main.yml 中 Sync files 区块的代码，以避免出现报错。\"]},{\"header\":\"🔣 配置 LearnData\",\"slug\":\"🔣-配置-learndata\",\"contents\":[]},{\"header\":\"文档结构\",\"slug\":\"文档结构\",\"contents\":[\"LearnData 的网站配置和文本存放在 docs 文件夹下，文章与页面配置可参考主目录下的 samplepage.md。\",\"docs 目录结构如下：\",\"docs |── .vuepress # 网站配置 │ ├── config.ts # 网站环境依赖和网站属性 │ ├── sidebar.ts # 侧边栏 │ ├── navbar.ts # 导航栏 │ ├── theme.ts # 主题和插件 │ └── templateBuild.html # 网页模板，网站关键词和统计 |── _posts # 博客文章目录 ├── _temp # 草稿箱 ├── reading # 读书笔记 ├── anyname # 自定义笔记 ├── blog.md # 博客页面 └── intro.md # 博主个人介绍 \",\"docs/.vuepress 路径下是网站的配置文件，我已添加了详细的注释。你可以参考注释和 vuepress-theme-hope 配置案例来调整配置。请在 docs/.vuepress/sidebar.ts 文件中修改文件夹路径，后台会自动抓取路径下的 md 文件来生成侧边栏。docs/.vuepress/theme.ts 有评论插件的相关配置。\",\"注意：\",\"LearnData 默认使用了 algolia 全文搜索。如果你没有使用 algolia 爬虫，则可以在 docs/.vuepress/config.ts 文件中删除 plugins 下的 docsearchPlugin 区块，网站将转用本地全文索引搜索。\",\"docs/_temp 文件夹默认不同步到 GitHub 上。你可以手动在本地建立 _temp 文件夹，用来存放草稿。\",\"自 VuePress2 的 beta.54 版本开始，文件夹名前缀为 _ 在生成链接时将被省略，例如文章路径为 /_posts/，但网页链接路径会是 /posts/。\"]},{\"header\":\"看板娘\",\"slug\":\"看板娘\",\"contents\":[\"LearnData 集成了看板娘 Live2D Widget，支持随机对话、切换人物服饰和玩打飞机游戏，能提升网站美观度和趣味性。如果不需要看板娘，可以删除 docs\\\\.vuepress\\\\public 下的 live2d-widget 文件夹。\",\"如果网站部署在子页面 https://xxx.github.io/yyy，则需将子页面路径 yyy 加入到以下两个文件：\",\"将 docs\\\\.vuepress\\\\public\\\\live2d-widget\\\\autoload.js 文件第三行的 const live2d_path = \\\"/live2d-widget/\\\" 修改为 const live2d_path = \\\"/yyy/live2d-widget/\\\"。\",\"将 docs\\\\.vuepress\\\\templateBuild.html 文件中看板娘区块代码 <script src=\\\"/live2d-widget/autoload.js\\\"> 修改为 <script src=\\\"/yyy/live2d-widget/autoload.js\\\">。\",\"如果你想要修改看板娘模型，请参考 docs\\\\.vuepress\\\\public\\\\live2d-widget 路径下的 README 和修改说明。如果你想在服务器上自建 live2d api，请注意添加跨域配置，否则可能会出现只显示文字而不显示看板娘图片的情况。\"]},{\"header\":\"读书笔记\",\"slug\":\"读书笔记\",\"contents\":[\"读书笔记中可能会有大量的原文引用，这与 LearnData 精简化知识点的初衷并不相符。因此，我们使用 docsify 来构建读书笔记，并将其放置于 docs/reading 目录下。在生成静态页面后，该路径下的文件不会被转换为 HTML 文件，而是将被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。\",\"如果你没有部署 Waline，也不需要阅读量统计和评论区，可以删除 docs\\\\reading\\\\index.html 中的 Waline 区块。\",\"waline: { serverURL: \\\"https://waline.newzone.top\\\", ... } \"]},{\"header\":\"本地图片引用\",\"slug\":\"本地图片引用\",\"contents\":[\"为了避免在生成静态页面时出现 Rollup failed to resolve import 错误，本地图片必须保存在 docs/.vuepress/public 路径下。如果图片名称为 1.png，保存在 docs/.vuepress/public/imgs 路径下，则可以使用以下链接来引用该图片：/imgs/1.png 或使用 Markdown 图片链接：![](/imgs/1.png)。本方法也适用于将附件部署到网站上。\"]},{\"header\":\"🖥️ 网站部署\",\"slug\":\"🖥️-网站部署\",\"contents\":[\"在将 LearnData 推送到 GitHub 后，会自动生成可访问的网页。但由于国内访问 GitHub Pages 的速度不稳定，为了确保网站能够正常访问，建议增加国内的访问节点。\",\"很多人选择使用 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee 上，从而生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 有很多限制，例如必须实名认证、免费版无法自定义域名，近期也发生过下架风波。因此，我没有选择 Gitee，而是将文档同步到国内服务器（域名需要备案）或 Vercel（国外服务可能会出现断网）。\"]},{\"header\":\"同步到服务器\",\"slug\":\"同步到服务器\",\"contents\":[\"如果你的项目已经搭建好，但出现了红色的叉叉提示，这可能是 GitHub Actions 同步到服务器时发生了错误。你需要进入项目仓库的「Setting」>「Secrets」>「Action」，并添加 FTP_HOST、FTP_PORT、FTP_USERNAME 和 FTP_PASSWORD 的密钥。之后，每当文件发生变化时，GitHub Actions 就会将修改推送到服务器的 FTP 上。\",\"如果你不需要将文档同步到服务器的 FTP 上，则请删除 .github/workflows/main.yml 中 Sync files 区块的代码，以避免出现报错。或者根据 GitHub 同步到 OSS 步骤将网页部署到云存储上。\"]},{\"header\":\"部署到 Vercel\",\"slug\":\"部署到-vercel\",\"contents\":[\"Vercel 的速度比 GitHub Pages 稳定一些，不过「*.vercel.app」域名已经被 DNS 污染。建议国内用户绑定自定义域名以获得更好的使用体验。\",\"Vercel 部署步骤如下：\",\"点击 或将 https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages 中的 rockbenben/LearnData 改为 你的用户名/仓库名，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，请使用 GitHub 账户进行快捷登录。\",\"输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 Create。\",\"创建 Vercel 项目\",\"接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 Go to Dashboard 跳转到应用的控制台。\",\"Vercel 部署成功提示\",\"为了让 Vercel 页面与 GitHub Pages 自动保持同步更新，你需要配置 PERSONAL_TOKEN 和 GitHub Actions。\",\"新建 Personal access tokens，勾选权限「repo (Full control of private repositories)」，生成后复制 token 值。\",\"在项目仓库中选择「setting」>「Secrets」>「Action」，新建密钥 PERSONAL_TOKEN，并填入刚复制的 token 值。\",\"将下方代码编辑到 .github/workflows/main.yml 文件末尾，注意修改 dst_owner 和 dst_repo_name。\",\"# 将页面更新到 Vercel - name: Copy file to Vercel if: always() uses: andstor/copycat-action@v3 with: personal_token: ${{ secrets.PERSONAL_TOKEN }} src_path: /. dst_path: / # 你的用户名 dst_owner: rockbenben # 与 Vercel 链接的仓库名，也就是 Vercel 部署时新建的仓库 dst_repo_name: LearnData-Vercel dst_branch: main src_branch: gh-pages clean: true \"]},{\"header\":\"🤔 常见问题\",\"slug\":\"🤔-常见问题\",\"contents\":[]},{\"header\":\"网页显示异常\",\"slug\":\"网页显示异常\",\"contents\":[\"如果你的网站只显示文字而不能正常显示网页，可能是因为网站路径不正确导致的页面样式错误。比如，GitHub Page 提示访问链接 https://xxx.github.io/yyy，则需要将 docs/.vuepress/config.ts 中的 base 改为 /yyy，其默认值为 /。请按照此路径将网站的 base 设置正确，以确保你的网站能够正常显示。\"]},{\"header\":\"同步服务器报错\",\"slug\":\"同步服务器报错\",\"contents\":[\"Error: Input required and not supplied: server 表示服务器配置错误，请按照上方的网站部署步骤检查配置。如果你不需要将文件同步到服务器，则请删除 .github/workflows/main.yml 中 Sync files 区块的代码，以避免出现报错。\",\"FTPError: 530 Login authentication failed 指 FTP 密码错误或账号不存在，可使用 FileZilla 来测试 FTP 的有效性。\",\"Error: Timeout (control socket) 指同步服务器出现超时报错。如果出现该错误，可以进入 Actions 页面，点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭服务器防火墙，检查 GitHub 服务器 IP 是否屏蔽了。\"]},{\"header\":\"ERR_MODULE\",\"slug\":\"err-module\",\"contents\":[\"如果出现 Error [ERR_MODULE_NOT_FOUND]: Cannot find module 的报错，可能是第三方插件或 pacakge.json 环境依赖未正确配置。此报错出现的几率极低，如果遇到，可以使用最新版本的 package.json 和 pnpm-lock.yaml 来覆盖本地设置，或者删除主目录下的 .npmrc 文件。\"]},{\"header\":\"静态文件名字总变\",\"slug\":\"静态文件名字总变\",\"contents\":[\"VuePress 默认使用 Vite。在打包时，会为文件引入时间戳和 hash，并对其进行重命名。这会导致即使没有更新文章，大部分生成的静态文件也会发生更改。如果你希望减少重命名频次，可以使用「nohashname」分支。该分支使用的打包工具是 Webpack，并使用 chainWebpack 设置文件命名规则，避免不必要的文件重命名。（注意：nohashname 非主分支，不作功能更新。）\"]},{\"header\":\"本地运行 LearnData\",\"slug\":\"本地运行-learndata\",\"contents\":[\"为了本地运行，你需要安装 npm 和 pnpm 环境，可参考环境部署教程。\",\"将 LearnData 项目下载到本地后，在项目目录下打开终端，输入命令 pnpm i 安装依赖。\",\"在终端中输入命令 pnpm docs:dev，若成功则会提示访问链接，默认为 http://localhost:8080/。\",\"本地服务运行后，修改文件时页面会同步更新预览。若需停止本地服务器，可在终端中按下 Ctrl + C。\"]}]},\"/life/0-%E8%82%B2%E5%84%BF%E7%9B%AE%E5%BD%95.html\":{\"title\":\"0-育儿目录\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"在这里记录关于生小孩的一切。\"]},{\"header\":\"孕期准备\",\"slug\":\"孕期准备\",\"contents\":[]},{\"header\":\"产前准备\",\"slug\":\"产前准备\",\"contents\":[\"生产前要准备什么？——待产包\"]}]},\"/life/%E4%BA%A7%E5%A6%87%E5%8D%AB%E7%94%9F%E5%B7%BE.html\":{\"title\":\"产妇卫生巾\",\"contents\":[{\"header\":\"什么是产妇卫生巾\",\"slug\":\"什么是产妇卫生巾\",\"contents\":[\"通常情况下，产妇在分娩后，产道会流出如月经一般的血状分泌物，这种由胎盘着床位置的出血，混着残留在子宫的蜕膜、组织碎片及黏液等分泌物，称为[[恶露]]。产妇专用卫生巾就是用来吸收恶露的。\"]},{\"header\":\"产妇卫生巾和普通卫生巾的区别\",\"slug\":\"产妇卫生巾和普通卫生巾的区别\",\"contents\":[\"产妇卫生巾更加宽大，并且一般按时间阶段分别使用不同大小的卫生巾。相比普通卫生巾一般吸水性能和透气性都更好。\"]},{\"header\":\"产妇卫生巾的阶段性使用\",\"slug\":\"产妇卫生巾的阶段性使用\",\"contents\":[\"(1)产后2-3天\",\"里面含有很多血(红色恶露)是恶露量最多的时期。\",\"使用方法：L号卫生巾与产褥用卫生裤配合使用. 应对产后2-3天的大量血性恶露.\",\"注意：产后第一时间进行护理时，L号卫生巾与M号卫生巾叠加在一起使用。当需要更换时，一般只需要更换L号上面的M号卫生巾。一是方便应对恶露，二是方便医护人员进行恶露量观察。\",\"(2)产后4-8天\",\"出血量开始减少，颜色也开始变淡。(褐色恶露)\",\"使用方法：M号卫生巾与产褥用前开内裤配合使用,应对产后4-8天的中期褐色恶露.\",\"(3)产后10天左右\",\"几乎不含有血，量也开始变少。(黄色恶露)\",\"(4)产后3周以上\",\"不含有血液，变成了乳白色的白色恶露。量也非常少，和平常的白带一样。有时会含有褐色的白带，但是量少的话，就不是什么问题。\",\"使用方法：S号卫生巾与产褥用前开内裤配合使用,应对产后10天以后的恶露。\"]}]},\"/life/%E4%BA%A7%E8%A4%A5%E5%9E%AB.html\":{\"title\":\"产褥垫\",\"contents\":[{\"header\":\"什么是产褥垫\",\"slug\":\"什么是产褥垫\",\"contents\":[\"产褥垫是一种特殊的孕产妇护理垫。主要用于产妇产后护理。防止恶露侧漏弄脏床垫。\"]},{\"header\":\"选购重点\",\"slug\":\"选购重点\",\"contents\":[\"注意选择吸水能力好的、纯棉护理垫即可。\"]},{\"header\":\"品牌备选清单\",\"slug\":\"品牌备选清单\",\"contents\":[]}]},\"/life/%E5%82%A8%E5%A5%B6%E8%A2%8B.html\":{\"title\":\"\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"储奶袋选择和吸奶器相同牌子储奶袋即可；\"]},{\"header\":\"选购要点\",\"slug\":\"选购要点\",\"contents\":[\"材料选择PE材质即可，注意评论区，选择没有塑料味的。\"]},{\"header\":\"储奶袋存放\",\"slug\":\"储奶袋存放\",\"contents\":[\"应当存放在2～4度环境中；\"]}]},\"/life/%E5%90%B8%E5%A5%B6%E5%99%A8.html\":{\"title\":\"吸奶器\",\"contents\":[{\"header\":\"吸奶器的作用\",\"slug\":\"吸奶器的作用\",\"contents\":[]},{\"header\":\"1. 帮助疏通乳腺\",\"slug\":\"_1-帮助疏通乳腺\",\"contents\":[\"直接哺乳的妈妈总是担心奶量不够，也不知道如何判断宝宝是否吃饱，不知道宝宝奶量的增长程度，而把奶用吸奶器吸出来，对比宝宝月份与奶量的关系，若确实不足可及时补充配方奶;有些妈妈奶水丰富，做喷射状，容易呛到宝宝，吸出来用奶瓶喂吸出来用奶瓶喂也可以避免这一点。 \"]},{\"header\":\"2. 可以减少奶涨的痛苦\",\"slug\":\"_2-可以减少奶涨的痛苦\",\"contents\":[\"用吸奶器比较容易判断乳房是否被吸空，只有吸空乳房才不会影响产奶量。辅助断奶， 不会对妈妈乳房产生依赖，可以适当适时的给宝宝添加其他食品，逐步断奶 \"]},{\"header\":\"3. 奶太多吃不完，吸出来冰起来建立奶库备用，这样不会浪费。\",\"slug\":\"_3-奶太多吃不完-吸出来冰起来建立奶库备用-这样不会浪费。\",\"contents\":[]},{\"header\":\"4. 乳头破裂无法喂奶时，可用吸奶器。\",\"slug\":\"_4-乳头破裂无法喂奶时-可用吸奶器。\",\"contents\":[]},{\"header\":\"5. 更容易断奶，\",\"slug\":\"_5-更容易断奶\",\"contents\":[\"这样就方便给宝宝喂水，也为妈妈哺乳期出门或者以后的上班创造了条件。 \"]},{\"header\":\"吸奶器的主要类别\",\"slug\":\"吸奶器的主要类别\",\"contents\":[\"手动按压型吸奶器\",\"简易橡皮球型吸奶器\",\"针筒式吸奶器\",\"电动单边吸奶器\",\"电动双边吸奶器\",\"电动可刺激奶阵吸奶器\",\"按需选择吸奶器，手动可以排除\"]},{\"header\":\"吸奶器的使用方法\",\"slug\":\"吸奶器的使用方法\",\"contents\":[\"应先用刺激奶阵模式，看到或者感觉到有喷涌后，调整到吸奶模式，这样会吸出比较多的奶汁。\",\"另外吸奶器不是力度越大越好，先从抵挡适应，感觉力度不够加一档，感觉还不够就再加，会感觉有轻微不适，但是如果疼痛了那说明对你来说力道大了，赶紧减一档。\",\"奶多的麻麻亲喂后如果感觉不涨奶了，就不要用吸奶器追求吸空，因为会越吸越多。\",\"如果发现有硬块，自己试试用手挤出，就是用手将乳晕部分的奶排出，乳晕变软后再使用吸奶器。有时候涨奶乳房很硬的时候，也最好把乳晕 不分的奶排出再喂宝宝，这样宝宝比较好含，你也不会很痛。\",\"原文：吸奶器选购指南 | 吸奶器什么牌子好_吸奶器使用方法_什么值得买\"]},{\"header\":\"吸奶器选购指南\",\"slug\":\"吸奶器选购指南\",\"contents\":[\"[[吸奶器选购指南]]\"]},{\"header\":\"选品记录及评价\",\"slug\":\"选品记录及评价\",\"contents\":[]},{\"header\":\"参考文献\",\"slug\":\"参考文献\",\"contents\":[\"吸奶器的作用原理_孕育常识_亲子宝典库_太平洋亲子网吸奶器选购指南 | 吸奶器什么牌子好_吸奶器使用方法_什么值得买吸奶器怎么选？选购吸奶器需要关注的6个基本问题分享_吸奶器_什么值得买2023年知乎最全面的吸奶器选购指南（美德乐、喜咪乐、新贝、新安怡、好女人、贝瑞克、小雅象等） - 知乎\"]}]},\"/life/%E5%90%B8%E5%A5%B6%E5%99%A8%E9%80%89%E8%B4%AD%E6%8C%87%E5%8D%97.html\":{\"title\":\"吸奶器选购指南\",\"contents\":[{\"header\":\"吸奶器重点参数\",\"slug\":\"吸奶器重点参数\",\"contents\":[\"按重要性排名：\"]},{\"header\":\"1. 选择合适的、可更换的喇叭罩尺寸\",\"slug\":\"_1-选择合适的、可更换的喇叭罩尺寸\",\"contents\":[\"尽量选择喇叭罩可选尺寸多、喇叭罩可更换的品牌。 随着哺乳期的变化，喇叭罩不合适的时候要尽量更换。 喇叭罩最好采用硅胶等亲肤材质。\"]},{\"header\":\"2. 选择有多模式、多档位设计的吸奶器\",\"slug\":\"_2-选择有多模式、多档位设计的吸奶器\",\"contents\":[\"由于哺乳期特点，往往需要先轻而快刺激按摩，让乳汁产生、再强而慢吸出乳汁。也就是奶阵模式和吸乳模式。\"]},{\"header\":\"3. 结构简单、方便好洗、导管设计防逆流\",\"slug\":\"_3-结构简单、方便好洗、导管设计防逆流\",\"contents\":[]},{\"header\":\"4. 噪音小、携带方便\",\"slug\":\"_4-噪音小、携带方便\",\"contents\":[]},{\"header\":\"选购常见问题\",\"slug\":\"选购常见问题\",\"contents\":[]},{\"header\":\"什么样喇叭罩是合适的？\",\"slug\":\"什么样喇叭罩是合适的\",\"contents\":[\"喇叭罩管道侧面与乳头之间应该要有1-2毫米的空隙，乳头能在管道内自由活动。 在吸奶抽吸时，能看到有一小部分乳晕吸入到管道中，其余大部分乳晕则在外面，这样的大小就是合适的。 \",\"如果出现以下情况，则说明喇叭罩不合适：\",\"乳头能在管道中自由移动\",\"乳晕组织很少或者没有被拉进护乳罩管道中\",\"乳晕组织过多被拉入管道\",\"每次吸乳能看到有节奏的乳房运动\",\"乳头没有感觉被刺激，或者没有轻微不适\",\"乳头摩擦到喇叭罩的管道，有不舒服的感觉\",\"吸完乳头、乳房有发红的地方\",\"乳头或乳晕变白了，感觉还有奶没有吸出来\"]},{\"header\":\"如何测量乳头尺寸？\",\"slug\":\"如何测量乳头尺寸\",\"contents\":[\"乳头随着整个孕期过程发展变化，最好在28周以后再进行测量。\"]},{\"header\":\"热门品牌\",\"slug\":\"热门品牌\",\"contents\":[\"头部品牌：\",\"安德乐：高端产品，专注母婴喂养\",\"飞利浦新安怡\",\"国产性价比：\",\"新贝\",\"小白熊\",\"好女人\"]},{\"header\":\"选购建议\",\"slug\":\"选购建议\",\"contents\":[\"先买个3～500元入门款，后续根据使用升级双边款；\"]}]},\"/life/%E5%BE%85%E4%BA%A7%E5%8C%85.html\":{\"title\":\"待产包\",\"contents\":[{\"header\":\"什么是待产包\",\"slug\":\"什么是待产包\",\"contents\":[\"待产包是一系列为了孕妇在医院生产所需的物资用品。主要包括了妈妈的清洁用品和刚出生宝宝所需的器材。\"]},{\"header\":\"待产包内容清单\",\"slug\":\"待产包内容清单\",\"contents\":[]},{\"header\":\"妈妈需要什么\",\"slug\":\"妈妈需要什么\",\"contents\":[]},{\"header\":\"清洁用品\",\"slug\":\"清洁用品\",\"contents\":[\"[[产褥垫]]：多买点，在医院4天用掉20片，剩下的铺家里，宝宝按摩换尿布躺上面。\",\"超大卫生巾：少买几片。生之前几天用，防止羊水破了流到床上车上。羊水破了洗个澡，包一下去医院\",\"[[产妇卫生巾]]：多买点，普通size，不用太大。生完后排恶露，每天都用卫生巾\",\"毛巾：在医院里1条擦上身，1条擦下身\",\"脸盆：在医院里1条擦上身，1条擦下身\",\"一次性马桶垫：多买点，医院的马桶公用的，月子中心马桶可能也是公用的\",\"纸巾\",\"棉柔巾\"]},{\"header\":\"衣物\",\"slug\":\"衣物\",\"contents\":[\"[[哺乳衣服]]：不用脱就能喂奶；淘宝搜索纱布睡衣，月子；价格70-80\",\"[[哺乳乳贴]]：乳头太小 婴儿会吸不住吃不到奶，加上一个奶嘴形状乳贴\",\"[[防溢乳垫]]：奶水过多的话，会渗出来打湿衣服\",\"[[收腹带]]：~~生完后，助力子宫肚子收缩。~~尊医嘱，医院有售。\",\"一次性内裤、袜子：多买点，生前几天、生后一段时间，穿一条扔一条\"]},{\"header\":\"食品类\",\"slug\":\"食品类\",\"contents\":[\"保温杯。多喝热水，带吸管\",\"[[吸奶器]]：先买入门款，后续升级\",\"[[储奶袋]]：买配套的储奶袋即可\"]},{\"header\":\"宝宝需要什么\",\"slug\":\"宝宝需要什么\",\"contents\":[]},{\"header\":\"宝宝吃什么\",\"slug\":\"宝宝吃什么\",\"contents\":[\"奶瓶\",\"奶粉\"]},{\"header\":\"宝宝穿什么\",\"slug\":\"宝宝穿什么\",\"contents\":[\"宝宝衣服\",\"宝宝帽子\",\"宝宝袜子\",\"宝宝纸尿裤\"]},{\"header\":\"宝宝洗身体\",\"slug\":\"宝宝洗身体\",\"contents\":[\"宝宝纸巾\",\"宝宝湿巾\",\"宝宝浴巾\",\"宝宝浴盆\",\"宝宝沐浴露\",\"宝宝身体乳\",\"宝宝护臀膏\",\"[[隔尿垫]]\"]},{\"header\":\"宝宝检查身体\",\"slug\":\"宝宝检查身体\",\"contents\":[\"[[宝宝耳温枪]]\"]},{\"header\":\"要带的证件\",\"slug\":\"要带的证件\",\"contents\":[\"母子保健手册\",\"准生证\",\"身份证\",\"医保卡\",\"户口本\",\"结婚证\",\"检查化验单\"]}]},\"/life/%E6%94%B6%E8%85%B9%E5%B8%A6.html\":{\"title\":\"收腹带\",\"contents\":[{\"header\":\"什么是收腹带\",\"slug\":\"什么是收腹带\",\"contents\":[\"束腹带就是普通的带子包在腹部保护腹部切口，主要用于剖宫产术后恢复。顺产无需使用。\"]},{\"header\":\"关于收腹带的误区\",\"slug\":\"关于收腹带的误区\",\"contents\":[]},{\"header\":\"1. 收腹带不能促进宫缩\",\"slug\":\"_1-收腹带不能促进宫缩\",\"contents\":[\"束缚带就绑在肚子外面，没有按摩子宫的作用，不会促进宫缩。产后促进宫缩，一方面可以给催产素，最重要的还是要靠母乳喂养，另外保持良好心情也比较重要。 \"]},{\"header\":\"2. 预防盆腔脏器下垂\",\"slug\":\"_2-预防盆腔脏器下垂\",\"contents\":[\"预防盆腔脏器下垂。不明白为什么会有这种想法。关于分娩后盆腔脏器下垂的研究，一直是有争议的，2011年底最新的一篇发表在美国妇产科学杂志上的文章认为，阴道分娩尤其是阴道助产，相比剖腹产更容易引起盆腔脏器下垂的相关疾病。不管怎么样，这都是和分娩本身相关的，围不围束缚带没什么影响。 \",\"原文链接：产妇生完小孩后必须使用束腹带/收腹带吗？ - 知乎\"]},{\"header\":\"购买建议\",\"slug\":\"购买建议\",\"contents\":[\"尊医嘱，医院有售\"]}]},\"/reading/goodnote-23-001.html\":{\"title\":\"这篇文章真棒-23年001号\",\"contents\":[{\"header\":\"“贴标签”“群氓效应”：网络暴力为什么容易发生？\",\"slug\":\"贴标签-群氓效应-网络暴力为什么容易发生\",\"contents\":[\"链接：“贴标签”“群氓效应”：网络暴力为什么容易发生？-虎嗅网\"]},{\"header\":\"文摘摘要\",\"slug\":\"文摘摘要\",\"contents\":[\"本研究从社会心态的核心内容，社会认知、社会价值观、社会情绪等方面分析了网络暴力发生的机制。 认为信息简化而使事实标签化，身份的区隔使得观念对立，不择手段获取商业流量而误导网民，这些是网络暴力发生的社会认知机制； 因与分享者观念冲突而导致情绪倒错，网络的情绪聚集使得负向情绪相互感染，无法产生正向情感能量是网络暴力发生的社会情绪机制； 网络去抑制效应下的 “道德假期”，假借道德名义的肆意审判和惩罚是网络暴力发生的社会价值观机制。\"]},{\"header\":\"文章大纲\",\"slug\":\"文章大纲\",\"contents\":[]},{\"header\":\"一、网络暴力的定义与特点\",\"slug\":\"一、网络暴力的定义与特点\",\"contents\":[\"网络暴力的定义：网络暴力是指一些人在互联网和社交媒体等平台，以攻击性的言论或信息对他人进行恶意攻击、侮辱、威胁或造谣的行为。\",\"网络暴力的表现形式：网络暴力的表现形式包括言语攻击、恶意散布谣言、骚扰和跟踪、人肉搜索、恶意评论和诽谤，以及滥用图片和视频等。\",\"网络暴力的后果：网络暴力是一种精神暴力，对受害者造成心理层面的消极影响，严重会导致自我否定、抑郁症或自杀等极端行为。\",\"网络暴力的特点：多发、易发；施暴者众多，并通常具有匿名性；施暴过程完全公开，有大规模传播的可能性；围观者众多，甚至可能加入施暴；\"]},{\"header\":\"二、暴力发生的理论\",\"slug\":\"二、暴力发生的理论\",\"contents\":[\"兰德尔 · 柯林斯在其《暴力：一种围观社会学理论》指出：没有暴力个体，只有暴力情境，其塑造了个体的情绪和行为。\",\"他认为，暴力是围绕在冲突性紧张和恐惧周围的一系列路径。\",\"暴力的发生取决于施暴者如何绕过冲突性紧张，其三个条件为：\",\"攻击弱者，既包括身体的弱者也包括情境中的弱者；\",\"高度团结的暴力行动者从彼此身上获得社会支持，通过把注意力集中在自己的节奏上而忽略了与敌对者之间的冲突性紧张；\",\"观众围观，由于关注自己在围观者眼中的表现而忽视了冲突性紧张，暴力成为了围观者的表演。\"]},{\"header\":\"三、网络暴力为什么容易发生\",\"slug\":\"三、网络暴力为什么容易发生\",\"contents\":[\"根据柯林斯的理论，网络暴力满足了暴力行动者摆脱冲突性紧张的三个条件：\",\"网络的非面对面互动消除了暴力的情境性，施暴者不会体会到紧张和恐惧，网络的匿名性更是使得施暴者仿佛戴上了传统暴力行动者所佩戴的面具，轻松逃避追责，相比之下，网络施暴对象彻底属于弱者；\",\"其次，网络暴力的施暴者很容易获得群体性支持，虽然并非是团结的，但暴力的行动确实一致性，甚至是竞赛性的争相施恶，我们看到许多网络暴力都是一言不合 “群起攻之”，看到有众多助攻者，暴力行动者似乎有了“替天行道” 的狂妄感；\",\"最后，网络从来不缺乏围观者，任何言论、事件、人物都是评头论足的对象，也是一些人用网络暴力攻击的对象，网络暴力的攻击过程更加吸引所谓的 “吃瓜群众”，这些围观者或者加入施暴者行列，或者无形中成为网络暴力的看台观众，成了网络暴力表演的欣赏者，起到了“助纣为虐” 的效果。\"]},{\"header\":\"四、网络暴力的社会心态分析\",\"slug\":\"四、网络暴力的社会心态分析\",\"contents\":[]},{\"header\":\"（一）社会心态研究什么\",\"slug\":\"一-社会心态研究什么\",\"contents\":[\"社会心态作为一种宏观社会心理研究范式，关注一定时期社会心理的特点及其变化，试图解释社会发展变迁中凸显出的关键问题。\",\"社会心态受一定时期的社会和文化影响，可以从社会成员的心理特点和行为模式中捕捉到。\",\"社会心态研究既关注社会文化中深层的、稳定的成分，也包括随着社会变迁、社会转型而变化的成分，既研究整体的社会心态，也研究局部的社会心态。\"]},{\"header\":\"（二）网络暴力产生的社会认知机制\",\"slug\":\"二-网络暴力产生的社会认知机制\",\"contents\":[\"信息简化造成事实标签化，导致事实被模糊甚至篡改\",\"身份认同形成并强化了共享身份、社会同质性及信息茧房，不同圈层更容易因热点事件形成观点极化引发对立\",\"流量误导使得真相不明，信息称馋嘴和平台为了引起更多关注，将事实打乱剪辑或对同一时间推出对立且极端的观点，蓄意引起“对骂”\"]},{\"header\":\"（三）网络暴力产生的社会情绪机制\",\"slug\":\"三-网络暴力产生的社会情绪机制\",\"contents\":[\"观念冲突导致情绪倒错，\",\"对别人的积极分享没有产生积极的情绪，反而产生消极情绪进而表现出恶意的攻击\",\"“网络群氓” 聚集下的负向情绪感染\",\"群氓是一群临时聚集的，组织松散的群体，在事件的刺激下很容易感情冲动并产生集体攻击行为的人群。\",\"相互匿名的网络使用者类似于在街上漫无目的游荡者，受到某个热点事件的刺激就会聚集起来。他们不具有团结特质，是情绪把个体联结在一起。基于内容的关注，进而产生短暂的集体兴奋情绪、也没有稳定的群体认同，难以形成正向的情感能量，更容易形成负向的聚集。\",\"网络暴力中的群体情绪经常表现为认知扭曲下的愤怒，群体的聚集使得愤怒情绪相互感染，并被逐渐放大和升级，这时的群众就成为了失去了理智的 “群氓”。\"]},{\"header\":\"（四）网络暴力产生的社会价值观机制\",\"slug\":\"四-网络暴力产生的社会价值观机制\",\"contents\":[\"1.网络去抑制效应下的“道德假期”\",\"网络的匿名性使个体隐藏于群体中，赋予个体自由表达的空间，减少了对行为的约束，言论与行为比现实情境更为激进大胆，这也被称为 “网络去抑制效应”，盲目的情感宣泄是网络去抑制效应的典型体现。\",\"2.假借道德名义的肆意审判和惩罚\",\"在一些事件中网络暴力的发起者经常将许多态度、观念分歧进行泛道德化处理，把不合自己心意的人和事进行道德评价，继而进行道德审判，并通过网络暴力实施惩罚。\",\"道德作为武器让他们具有了超越任何行动边界的合法性。\"]},{\"header\":\"五、对网络暴力的遏制和社会治理\",\"slug\":\"五、对网络暴力的遏制和社会治理\",\"contents\":[\"网络社会需要新的公序良俗\",\"互联网平台应致力于网络互动规范的建立\",\"媒体和意见领袖营发挥正向引领作用\",\"政府应整合社会资源，营造良好的网络秩序\"]}]},\"/reading/readnote_23W22.html\":{\"title\":\"这周我读了什么-23年第22周\",\"contents\":[{\"header\":\"错误的思想从哪来？\",\"slug\":\"错误的思想从哪来\",\"contents\":[\"原文链接：错误的思想从哪来？-虎嗅网\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要\",\"contents\":[\"本文通过介绍一种人群中常见的「自动信念模型」，阐明人们在群体生活中的舆论出现原因，并提出要解决这种问题，应时刻“保持质疑”，就是在“培养思辨”与“和而不同”的能力。\"]},{\"header\":\"评分：4星\",\"slug\":\"评分-4星\",\"contents\":[\"在社会生活中要保持一个中立的，辩证的心，太难了，追寻真相的成本对于普通人也太难了。面对生活还是要保持镇定，保持开放，不轻信，不偏听，说起来简单，又有多少人能做到呢。\"]},{\"header\":\"国产大飞机C919，浮沉五十年\",\"slug\":\"国产大飞机c919-浮沉五十年\",\"contents\":[\"原文链接：国产大飞机C919，浮沉五十年-虎嗅网\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要-1\",\"contents\":[\"1984年，航空工业部与美国麦道公司合作引进麦道MD-82产线，希望通过桑塔纳模式以市场换技术。然而随着97年麦道被波音合并，项目被取消，MD-90飞机完成了两次试飞以后，遗憾搁置。\",\"97年之后，中航转向空客寻求合作，中航以30驾A320系列飞机订单交换AE-100项目，结果空客转头就宣布终止AE-100项目，同时宣布自行研制A318，借尸还魂。\",\"经过两次失败的合作之后，制定了新的三步走计划：第一阶段，先主攻支线客机，取得FAA的适航证，力求具备市场竞争力。 第二阶段，量产支线客机的同时，启动国产大飞机的研发，核心部件暂时从国际采购。 第三阶段，同时自主研发发动机、机载系统，实现国产化，最终形成完整民航飞机产业链。\"]},{\"header\":\"评分：3星\",\"slug\":\"评分-3星\",\"contents\":[\"文章写的挺水的，但是还是让我认识到了世纪之交国外势力是如何欺负我们民航事业的。\"]},{\"header\":\"日本半导体，没有希望？\",\"slug\":\"日本半导体-没有希望\",\"contents\":[\"原文链接:日本半导体，没有希望？-虎嗅网\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要-2\",\"contents\":[\"日本半导体产业从80年代通过「官产学」体系，生产出高可靠性的DRAM产品，适应当时对可靠性的高要求，抢占了大部分市场。\",\"90年代开始，由于个人PC市场的快速崛起，可靠性的要求不再高涨，再加上美国制裁和广场协议，日本本土的工匠精神使日本本岛体产业岌岌可危。\",\"99年日本政府合并NEC和日立两大公司成立尔必达，孤注一掷。然而因为两家公司因为技术路线和产线磨合问题，使其竞争能力反而下降。虽然市占率曾短暂提升，但已经在生死线边缘。\",\"尔必达因为过度追求良品率却抬高了成本，使其毛利率仅保持在3%左右，08年雷曼危机爆发，DRAM 产能过剩，尔必达瞬间转为大亏，随着三星的扩产和DRAM颗粒的降价，尔必达宣告破产\",\"22年日本政府联合8家企业成立新公司Rapidus，宣称27年实现2nm量产。然而无论从技术、设备、人才、资金各个方面，该公司都没有，却能从日本政府拿到巨量补贴。日本企业若是不能自给自足，只能是失败结尾\"]},{\"header\":\"评分：4星\",\"slug\":\"评分-4星-1\",\"contents\":[\"夫以铜为镜，可以正衣冠；以古为镜，可以知兴替；以人为镜，可以明得失。以日本为镜，中国人要想走出自己的半导体之路，还是要脚踏实地，敢打敢拼，直面市场。中国半导体产业加油！\"]},{\"header\":\"我们会重复父辈的人生轨迹吗？\",\"slug\":\"我们会重复父辈的人生轨迹吗\",\"contents\":[\"原文链接：我们会重复父辈的人生轨迹吗？-虎嗅网\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要-3\",\"contents\":[\"读懂了父辈的历史，大致也能看清楚我们自己的前路。每个人都是自己历史的缔造者，大家合起来，便能折射出一个时代的缩影。\"]},{\"header\":\"评分：5星\",\"slug\":\"评分-5星\",\"contents\":[\"散文写的很不错，父辈们的历史何尝不是共和国的历史。\"]},{\"header\":\"AI 时代的炼金术：Prompt 完全食用指南\",\"slug\":\"ai-时代的炼金术-prompt-完全食用指南\",\"contents\":[\"原文链接：AI 时代的炼金术：Prompt 完全食用指南 | 人人都是产品经理\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要-4\",\"contents\":[\"2023 年是 AI 的时代，以 ChatGPT 为首的大模型召唤出了一大批「炼金术士」，他们挥舞着「魔杖」，以自己的智慧、灵感和激情不停地创造着一个又一个绚丽的世界。 而 Prompt，就是这个 AI 时代的「炼金咒语」\"]},{\"header\":\"重点内容\",\"slug\":\"重点内容\",\"contents\":[\"输入维度\",\"输入，指 prompt 的输入格式，一个良好 prompt 的输入格式应该是层次分明的。不同的内容类型最好以分隔符区分，\",\"思考维度\",\"思考，指要求模型执行指令时的思维方式。正如人类有系统一和系统二一样，模型在执行时似乎也遵循着同样的逻辑。因此，当我们输入某些复杂问题时，模型为了效率优先，常常输出一些貌似正确，实则荒唐的答案。为了避免类似情况的出现，炼金术士在编写咒语时可以要求模型按特定的方式进行思考。 有两种方式可以「框定」模型的思考逻辑，一种是案例法，一种是框架法。\",\"异常机制处理\",\"马尔库塞说，人类是单向度的生物。此话也可以套用在思考上。无论是人类还是大模型，在思考上往往只考虑如果达成某项任务，而忽略了如果达不成某项任务，该如何处理。 富有经验的炼金士门在调教模型时，总是会在 prompt 中作如下约束：\",\"要求模型检查用户所提供的信息，以确保信息的完善性足以保证任务的完成 当模型运行时，若遭遇异常机制（如无法处理当前问题），应暂停回复生成的过程，及时报错\",\"输出维度\",\"咒语的输出维度包含两种要求：内容要求和格式要求。\"]},{\"header\":\"评分：4.5星\",\"slug\":\"评分-4-5星\",\"contents\":[\"一起来学pompt\"]}]},\"/reading/readnote_23W23.html\":{\"title\":\"这周我读了什么-23年第23周\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"本来不想说什么的，但是本周的一个现象让我忍不住吐槽两句。上周的热点事件有一件便是街拍事件。详细情况无需赘述，有趣的事，本周我看到了许多文章，大抵主题便是反对街拍，但行文间却无不将街拍与偷拍混淆，或拿成都某步行街的例子将商业拍摄模糊成街拍的样子。其目的不言而喻。 只此一提，诸君见笑。\",\"本周雄文：\"]},{\"header\":\"“贴标签”“群氓效应”：网络暴力为什么容易发生？\",\"slug\":\"贴标签-群氓效应-网络暴力为什么容易发生\",\"contents\":[\"链接：“贴标签”“群氓效应”：网络暴力为什么容易发生？-虎嗅网\"]},{\"header\":\"文摘摘要\",\"slug\":\"文摘摘要\",\"contents\":[\"本研究从社会心态的核心内容，社会认知、社会价值观、社会情绪等方面分析了网络暴力发生的机制。 认为信息简化而使事实标签化，身份的区隔使得观念对立，不择手段获取商业流量而误导网民，这些是网络暴力发生的社会认知机制； 因与分享者观念冲突而导致情绪倒错，网络的情绪聚集使得负向情绪相互感染，无法产生正向情感能量是网络暴力发生的社会情绪机制； 网络去抑制效应下的 “道德假期”，假借道德名义的肆意审判和惩罚是网络暴力发生的社会价值观机制。\"]},{\"header\":\"评论：5星\",\"slug\":\"评论-5星\",\"contents\":[\"文章写的很不错，非常值得一看。但可悲的是，所谓的道理我都懂，但是悲剧依旧在发生。这篇文章的详细解读请戳：这篇文章真棒-23年001号\"]},{\"header\":\"出轨抓奸、追踪定位：你的信息在黑市明码标价\",\"slug\":\"出轨抓奸、追踪定位-你的信息在黑市明码标价\",\"contents\":[\"链接：出轨抓奸、追踪定位：你的信息在黑市明码标价-虎嗅网\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要\",\"contents\":[\"社工库是一个包含了各种私人信息的数据库，来源于各种数据泄漏事件，是每个人在网上遗留痕迹的萃取和提纯。 作者以身试法，成功在社工库查询自己的银行流水，意味着 社工库的存在甚至成为许多内部人士的摇钱树，揭示了内鬼是社工库猖獗的重要原因之一。 同时，社工库交易活动存在各种黑吃黑乱象，其运营者无所不用其极的态度。 最后，作者指出，由于网络空间发展，个人隐私的泄露在所难免，但是各互联网公司应承担更多责任，加强平台监管。然而，只要有人在操控，信息泄漏的风险就一直存在。\"]},{\"header\":\"评论：4星\",\"slug\":\"评论-4星\",\"contents\":[\"互联网时代，只有有心，想找到一个人的信息并不难。很难不联想到，上文提到的网暴事件。技术无罪，错的是使用技术的人。\"]},{\"header\":\"综艺走进“垂直”死胡同\",\"slug\":\"综艺走进-垂直-死胡同\",\"contents\":[\"链接：综艺走进“垂直”死胡同-虎嗅网\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要-1\",\"contents\":[\"从「正大综艺」到「快乐大本营」，再到现在，国产综艺从合家欢慢慢转向垂直赛道。\",\"文章指出，互联网市场的特点使综艺部门专注迎合少数群体，让沉默的大多数摸不着头脑。\",\"以恋综为例，早期恋综像「非诚勿扰」不仅照见时人爱情观，价值观，更能透视整个社会风貌。互联网时代的恋综，失去了电视时代的大众性，陷入了剧本演员的人物怪圈。\",\"作者表示：以分众和垂直化为导向的综艺，并不是是综艺的初心。\"]},{\"header\":\"评论：3星\",\"slug\":\"评论-3星\",\"contents\":[\"文章总体比较水，单纯的指出了综艺从大众走向垂直，从真实走向剧本的现实走向。\"]},{\"header\":\"王国维之死\",\"slug\":\"王国维之死\",\"contents\":[\"链接：王国维之死-虎嗅网\"]},{\"header\":\"文摘\",\"slug\":\"文摘\",\"contents\":[\"颐和园那时的人并不算多，所以有游客能完全回忆出那个老者入园后的经历：他先是直接走向了石舫，在石舫前坐了很久，然后起身踱步前往鱼藻轩。在鱼藻轩，他从怀中摸出一根烟，慢慢抽了起来。 就在王国维身边不远处，就是颐和园的园丁。游客在湖边坐着抽根烟，实属平常，所以园丁也并没有太注意他。 一根烟燃尽，王国维忽然起身，纵身跳进了昆明湖。 听到有落水声，一旁的园丁连忙赶来施救，由于距离不远，所以前后也就花费了几分钟就把王国维捞了起来。但很快园丁就发现，王国维跳下去时用力一头扎进了池底，池底的淤泥顿时塞满了王国维的口鼻。 虽然落水时间不长，但已气绝身亡。\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要-2\",\"contents\":[\"本文主要讲述了近代大家王国维自杀的前后始末，概述了王国维的一生，分析了王国维自杀的主要原因。认为王国维自杀是多重因素的结合：丧子之痛，绝情之交，时代之变，受辱之惧。 展现出中国近代复杂交织的历史图景：在一个三千年未遇的大变局时代，一批又一批的人主动或被动站上了历史舞台，在时代的聚光灯下展现自己最真实的彷徨、努力、奋斗、挣扎……\"]},{\"header\":\"评论：4星\",\"slug\":\"评论-4星-1\",\"contents\":[\"历史总能给人心灵上的震撼，透过一个个历史片段，不难感受到那个时间段的人。他们或恐慌，或迷茫，或坚定，没有谁知道未来会怎样。他们只是做出自己的选择。 说实话我原来不知道王国维怎么过世的，只知道王是中华文化最后的学术大家。他的学术水平令我佩服，他的选择结束自己生命，令我唏嘘。 逝者如斯夫，不舍昼夜。河水湍流，带走多少故人。\"]},{\"header\":\"给佛祖打工，年轻人gap day新形式\",\"slug\":\"给佛祖打工-年轻人gap-day新形式\",\"contents\":[\"链接：给佛祖打工，年轻人gap day新形式-虎嗅网\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要-3\",\"contents\":[\"本文主要讲述了进来年轻人进寺庙调整心态的小故事。三个年轻人进入道观修行的认知。现代人进入道观，放下内心的疑惑和焦虑，与自己和解。最终走出道观，继续坚定的向前生活。\"]},{\"header\":\"评论：3星\",\"slug\":\"评论-3星-1\",\"contents\":[\"一篇小短文，去庙里休息休息，何尝不是一种人生选择。\"]},{\"header\":\"药品进了医保，为什么在医院却买不到药？\",\"slug\":\"药品进了医保-为什么在医院却买不到药\",\"contents\":[\"链接：药品进了医保，为什么在医院却买不到药？-虎嗅网\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要-4\",\"contents\":[\"本文分析了药品从进入医保到来到患者手上的流程，提出了其中存在的三个主要问题。并列出了从政府到医院对于这一问题的解决方法。\"]},{\"header\":\"文章大纲：\",\"slug\":\"文章大纲\",\"contents\":[]},{\"header\":\"一、新药入院大致要经历五个步骤：\",\"slug\":\"一、新药入院大致要经历五个步骤\",\"contents\":[\"其一，临床医生评估了药品的风险和收益后，向科室提交用药申请； 其二，科室进行初步遴选，选出符合要求的药物； 其三，提交给院医药委员会，委员会对药品生产许可证等文件进行形式审核； 其四，医院定期召开新入院药品遴选会，在遴选会上，申请人需围绕药品申请理由、与现有药品的比较、不可替代性等方面着重进行介绍，专家进行提问讨论，并独立投票，最终赞同票数超过参会专家人数 2/3 时视为通过； 其五，医院从中标的供应商中遴选该药在医院的配送供应商，在医院院内网公布过会药品和暂停药品情况，药剂科执行采购任务。\"]},{\"header\":\"二、患者买不到药的主要问题：\",\"slug\":\"二、患者买不到药的主要问题\",\"contents\":[\"名额有限，临床需求的排序非常重要，往往只有第一有希望进入医院\",\"对于一些慢性病患者，集采后品种变动，患者不能接受\",\"部分集采药利润甚微，部分厂家即使中标了，供应不积极\"]},{\"header\":\"三、问题解决\",\"slug\":\"三、问题解决\",\"contents\":[\"政府层面：出台新政策积极促进药品入院\",\"医院层面：设立虚拟药库，让患者可以凭处方在院外购药。\"]},{\"header\":\"评论：3星\",\"slug\":\"评论-3星-2\",\"contents\":[\"患者难买药，是民生大事，需要各方通力合作。\"]},{\"header\":\"2024 美国大选，谁会是拜登的对手？\",\"slug\":\"_2024-美国大选-谁会是拜登的对手\",\"contents\":[\"链接：2024美国大选，谁会是拜登的对手？-虎嗅网\"]},{\"header\":\"文章摘要：\",\"slug\":\"文章摘要-5\",\"contents\":[\"简要介绍了拜登的三位对手：彭斯、特朗普、德桑蒂斯。彭斯希望不高，特朗普有望回归，德桑蒂斯走特朗普路线，法案过于激进。并指出在 2022 年中期大选中，拜登支持率十分低迷，但民主党仍能获胜。主要原因是共和党的替代方案又太过极端了，所以只能投票给民主党，期待着情况不要变得更坏。\"]},{\"header\":\"评论：2星\",\"slug\":\"评论-2星\",\"contents\":[\"还是图一乐，我们就看看。\"]},{\"header\":\"重回 1970：日本汽车是如何全球崛起的？\",\"slug\":\"重回-1970-日本汽车是如何全球崛起的\",\"contents\":[\"链接：重回1970：日本汽车是如何全球崛起的？-虎嗅网\"]},{\"header\":\"文章摘要\",\"slug\":\"文章摘要-6\",\"contents\":[\"文章简单回顾了日本汽车发展过程。早期日本汽车从组装厂开始，学习国外技术，通过政府支持全面转向汽车行业，从50年代开始日本汽车快速发展，走节能减排，高效生产路线；70年代日本确立以外销为主的路线，在海外设厂，恰逢美国石油危机，外加美政府出台环保法案，日本汽车一飞冲天。总结日本汽车成功经验，不外乎提高技术精益生产，与供应商紧密合作。\"]},{\"header\":\"文章大纲：\",\"slug\":\"文章大纲-1\",\"contents\":[]},{\"header\":\"一、日本汽车的早期发展\",\"slug\":\"一、日本汽车的早期发展\",\"contents\":[\"1925年福特汽车率先进入日本市场，此后十年日本车市被美国三大汽车公司垄断。\",\"1936年日本颁布「汽车制造事业法」，禁止外国汽车公司进入日本，日本本土企业开始发家。\",\"二战之后，汽车行业快速扩张，美欧汽车产业打得日本车企苟延残喘。\",\"1951年，日本政府再次限制外国资本，设置高关税，保护本土企业。\",\"在此后10年，日本汽车在政府积极扶持下，日本汽车行业形成新的完整制造体系，同时日本经济50年代中期进入繁荣期，进一步刺激民用车消费，日本汽车快速发展。\",\"截止70年代末，日本汽车工业就业人数占全国总人口的10%日本与汽车工业深深绑定。\"]},{\"header\":\"二、日本汽车出海\",\"slug\":\"二、日本汽车出海\",\"contents\":[\"石油危机和美国环保法案出台，让日本汽车不断扩大在美国的市占率，截至1981年日本汽车在美市场占有率升至18.6%。\",\"70年代开始日本汽车采取外销为主策略，在海外直接设厂直接生产或组装汽车。期间开始发展高端豪华车。\"]},{\"header\":\"三、总结经验\",\"slug\":\"三、总结经验\",\"contents\":[\"不断寻求技术突破，死磕产品可靠性和燃油经济性\",\"持续降本增效，创新精益生产方式\",\"与零部件供应商紧密合作\",\"坚定海外建厂和本地化战略\"]},{\"header\":\"评论：4星\",\"slug\":\"评论-4星-2\",\"contents\":[\"回顾日本车起家过程，无非是传统的深抓技术，把握机遇，积极进取。现在中国车企同样面临机遇期，要抓紧技术积累，迎合市场需要。\"]}]},\"/Control/\":{\"title\":\"Control\",\"contents\":[]},\"/posts/\":{\"title\":\"Posts\",\"contents\":[]},\"/apps/\":{\"title\":\"Apps\",\"contents\":[]},\"/life/\":{\"title\":\"Life\",\"contents\":[]},\"/reading/\":{\"title\":\"Reading\",\"contents\":[]}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
