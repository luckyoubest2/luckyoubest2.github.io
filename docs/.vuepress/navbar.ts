import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "读书", icon: "read", link: "/reading"
  },
  {
    text: "应用",
    icon: "app",
    prefix: "/",
    children: [
      "apps/Applist",
      {
        text: "直播手册",
        icon: "quote",
        link: "apps/livestreaming/1_obs_basic",
      },
      {
        text: "服务/系统",
        icon: "any",
        prefix: "",
        children: ["services/NAS", "windows/faq"],
      },
    ],
  },
  {
    text: "生活",
    icon: "emmet",
    prefix: "/family/",
    children: ["Diet", "Shoppinglist", "Coupon"],
  },
  {
    text: "外链",
    icon: "tool",
    children: [
      {
        text: "ChatGPT SC",
        icon: "creative",
        link: "https://www.aishort.top/",
      },
      { text: "IMGPrompt", icon: "pic", link: "https://prompt.newzone.top/" },
      { text: "文字处理", icon: "others", link: "https://tools.newzone.top/" },
      {
        text: "工具收藏",
        icon: "categoryselected",
        link: "https://nav.newzone.top/",
      },
    ],
  },
  {
    text: "Contact",
    icon: "advance",
    children: [
      {
        text: "微信",
        icon: "wechat",
        link: "https://cdn.jsdelivr.net/gh/luckyoubest2/Bolg-IMG/671685350854_.pic.jpg",
      },
      { text: "Email", icon: "alias", link: "mailto:aisibi2b@163.com" },
    ],
  },
]);
