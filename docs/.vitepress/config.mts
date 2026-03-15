import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Docs_VitePress/', // Github仓库名，防止部署到Github Pages和其它项目冲突
  title: "前端自习室",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/logo.png", // 导航栏 logo
    nav: [
      { text: "🏠 首页", link: "/" },
      { text: "🚀 项目", link: "/pages/project/" }, // github项目
      { text: "📝 笔记", link: "/pages/note" }, // 技术文章和前端笔记
    ], // 导航栏
    sidebar: {
      // 项目
      "/pages/project/": [
        {
          text: "Vue",
          items: [
            {
              text: "仿网易云音乐微信小程序",
              link: "/pages/project/music_applet",
            },
            { text: "Vue3资金管理系统", link: "/pages/project/finance_admin" },
            { text: "Vue2医疗管理系统", link: "/pages/project/medical_admin" },
            //   { text: 'Vue教育平台', link: '/pages/project/' },
          ],
        },
        {
          text: "React",
          items: [
            //   { text: 'React医疗平台', link: '/pages/project/' },
          ],
        },
        {
          text: "HTML",
          items: [
            { text: "HTML酒店管理系统", link: "/pages/project/hotel_admin" },
            { text: "Hexo个人博客", link: "/pages/project/hexo_blog" },
          ],
        },
        {
          text: "Java",
          items: [
            { text: "JavaWeb银行管理系统", link: "/pages/project/bank_admin" },
          ],
        },
      ],
      // 笔记
      "/pages/note/": [
        { text: "HTML", link: "/pages/note/html" },
        { text: "CSS", link: "/pages/note/css" },
        { text: "JavaScript", link: "/pages/note/js" },
      ],
    }, // 侧边栏
    // 导航栏图标
    socialLinks: [{ icon: "github", link: "https://github.com/l-204" }],
    // 基础页面元素本地化
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },
    // 导航与主题相关配置
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    // 404页面定制
    notFound: {
      code: "404",
      title: "页面未找到",
      quote: "您访问的页面不存在",
      linkLabel: "返回首页",
      linkText: "点击这里返回主页",
    },
    // 页脚
    footer: {
      message: "基于 MIT 许可发布.",
      copyright: "版权所有 © 2025-2030 lhr",
    },
    // 最后更新时间
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    // 搜索框
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            displayDetails: "显示搜索结果",
            resetButtonTitle: "清除查询条件",
            noResultsText: "无法找到相关结果",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
  },
});
