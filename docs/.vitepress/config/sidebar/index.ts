// docs/.vitepress/config/sideBar/index.ts
import { DefaultTheme } from "vitepress";
// import { projectSidebar } from './project.ts'; // project
// import { noteSidebar } from './note.ts';

export const sidebar: DefaultTheme.Config["sidebar"] = {
  // 项目
  "/pages/project/": [
    {
      text: "Vue",
      items: [
        { text: "仿网易云音乐微信小程序", link: "/pages/project/music_applet" },
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
};
