// docs/.vitepress/config/nav/index.ts
import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '🏠 首页', link: '/' },
  { text: '🚀 项目', link: '/pages/project/' }, // github项目
  { text: '📝 笔记', link: '/pages/note' }, // 技术文章和前端笔记
]