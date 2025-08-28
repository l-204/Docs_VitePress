// docs/.vitepress/config/sideBar/index.ts
import { DefaultTheme } from 'vitepress'
import { projectSidebar } from './project.ts'; // project
import { noteSidebar } from './note.ts';

export const sidebar: DefaultTheme.Config['sidebar'] = {
  // 项目
  '/pages/project/': projectSidebar,
  // 笔记
  '/pages/note/': noteSidebar,
}