---
title: Vue3资金管理系统
---

# {{ $frontmatter.title }}

该项目是基于Vue和NodeJS技术实现的资金管理系统，原项目出自"米修教育"于2017年发布的资金管理系统视频教程。项目需求是开发一个管理资金的后台系统，具备基本的注册登录功能和对资金的增删查改功能，模拟企业管理业务。通过开发该项目，对自身所学的Vue和NodeJS知识进行复习，并进行一次整合应用，巩固编程水平，积累项目经验。

视频链接：[Vue+node.js 全栈项目-资金管理系统带权限-------附源码_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1R341167Fw/?spm_id_from=333.337.search-card.all.click)

Github仓库链接：[Vue3资金管理系统](https://github.com/l-204/Vue3-FinanceSystem)

|   项目属性   |          内容              |
| :------: | :--------------------------: |
|   前端   |     Vue3 + Element Plus      |
|   后端   |           Node.js            |
|  数据库  |           MongoDB            |
|  服务器  |           Express            |
| 开发工具 | Visual Studio Code + Postman |
| 项目启动 |          2023.09.05          |
| 项目完成 |          2023.09.09          |

## 🎯 功能和特性

::: tip ✅ 已实现功能
- 🚪 注册和登录功能
- 💰 对资金的增删查改功能
- 📅 根据日期筛选记录功能
- 📄 对记录进行分页功能
- 💬 注册登录时会有弹窗提示，页面交互性较好
- 🧩 应用npm包管理工具和模块化设计，方便后期维护
- 🎨 设计了404界面，页面图标并优化其他细节，页面美观
- 👮 管理员和普通员工权限区分，普通员工只有查看权限
- 🔐 密码加密和验证机制，退出登录时会清空本地cookie
:::

::: warning ❌ 存在问题
- 📦 项目文件大小约300M，不利于交接
- 🎯 功能单一，只有增删查改，没有生成图表和数据分析等功能
- ⚠️ 404界面只在找不到对应网址才会显示，注册登录等报错时不跳转
- 🌐 数据库不在本地存储，每次连接数据库都要到官网登录并添加正确IP
:::


## ⚠️ 关键问题与挑战
::: danger 【mongoose报错】Make sure your current IP address is on your Atlas cluster's IP whitelist 
进入mongoose，打开network access，点击添加允许连接的新的ip地址，选择本机ip地址，会自动检测并给出本机ip地址，点击确认，成功添加。 
:::

::: danger 【请求报错】实现删除接口时可以删除数据，但无法显示删除内容，并报错 
原因是发送删除请求后会清空数据，此时.save()方法无法获取到已删除的数据，因此删除.save()方法，并将.then内的profile回调改为request.json(profile)即可。 
:::

::: danger 【引入报错】引入element-ui时报错 
原因是vue3不支持element-ui，需要安装element-plus删除element-ui，重新安装element-plus即可。 
:::

::: danger 【配置报错】vue3报错 Catch all routes ("*") must now be defined using a param with a custom regexp 
vue3对404配置进行了修改，必须要使用正则匹配，因为Vue Router不再使用path-to-regexp，而是实现了自己的解析系统。 
:::

::: danger 【配置报错】配置vue.config.js时报错，挂载axios时报错 
vue.config.js配置信息有误，经检查发现为跨域请求地址target属性结尾漏了/，修改配置文件信息后即可。 
:::

::: danger 【引入报错】Element ui NavMenu 导航菜单 
template中的内容不显示 原因是element ui和element plus标签属性slot语法不同，在对应的template中加v-slot:title即可。 
:::

::: danger 【样式报错】无法清除element表格溢出的空白，同时还有padding:16px的右边距失效 
将CSS代码中的.container{width:100%}改为80%，并将height改为.rightContainer{height:100%}。 
:::

## 🧪 测试与质量保证
::: tip 注册测试 
请求成功后返回注册信息 
:::

::: tip 登录测试 
请求成功后返回登录信息和token 
:::

::: tip 查看个人信息测试 
普通员工和管理员都有查看个人信息权限，请求成功后返回个人信息 
:::

::: tip 查看资金信息测试 
普通员工和管理员都有查看资金信息权限，请求成功后返回资金信息 
:::

::: tip 权限测试 
普通员工没有增删改权限，因此请求失败；管理员拥有完整权限，请求成功 
:::

## 📝 开发总结
这次项目开发中，收获了不少开发经验，例如用element组件代替以往的CSS样式对UI进行优化，复习了ajax请求里的axios内容，学会了利用jwt代替JavaServlet实现数据加密，用MongoDB数据库代替MySQL数据库，利用Postman进行请求测试，熟悉了Vue开发流程等等。

不过这次项目大部分都是照着视频进行复刻，除了2.0版本是我优化的，其他大部分知识都是照搬视频内容，如果要让我独立设计一个项目，估计还做不到，即使开发出来了估计也不太规范，这说明我还需要继续积累项目经验，熟悉开发流程和项目规范，前端学习之路对我来说依然任重道远。

而且由于项目是17年的，有点老了，让我踩了不少坑，比如视频中的Element组件，视频项目是Vue CLI2.0，我的项目是Vue CLI3.0，不支持Element UI组件，需要用Element Plus，视频里的却是Element UI，所以我需要自行对接，因为是第一次接触Element组件，在对接过程中花费了不少时间。其次是Gravatar包，视频里可以根据Gravatar官网获取动态头像，但我开发时Gravatar网站已经无法访问，只能用静态资源代替视频里的动态头像。还有挂载Axios，当时教程只是随便找了个配置文件，没有配置文件的讲解，导致我在发送Ajax请求时一直报错，调试了一整天才解决。这也是跟着视频开发项目的弊端，对方开发的时候很顺利，但自己对接的时候就会有一堆问题。这也说明学技术要与时俱进，不能照本宣科，要学会将知识内化于心，才能减少问题，说来说去还是学的不够呗。

最后，这个项目对比上一个JSP项目其实已经进步了不少了，开发时间只花了一周，质量也远远优于上一个项目，虽然踩了不少坑，但也收获了不少知识，还是很让人振奋的，之前一直因为缺少项目实战，一直心里没什么底，特别焦虑，现在随着手里的项目慢慢变多，整个人越来越自信了。加油，争取做到早日独立开发，找到一份满意的实习！！