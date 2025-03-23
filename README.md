
# 王者荣耀英雄随机选择器
🎮 随机选择英雄 | 支持暂停 | 计数功能 | 清新界面

![GitHub Pages部署状态](https://img.shields.io/github/deployments/wangzherongyao/hero-selector/github-pages?label=GitHub%20Pages)
![页面浏览量](https://visitor-badge.glitch.me/badge?page_id=wangzherongyao.hero-selector)
![开源许可证](https://img.shields.io/github/license/wangzherongyao/hero-selector)

## 📖 目录
1. [项目简介](#-项目简介)
2. [功能特点](#-功能特点)
3. [使用方法](#-使用方法)
4. [部署步骤](#-部署步骤)
5. [技术栈](#-技术栈)
6. [贡献指南](#-贡献指南)
7. [常见问题](#-常见问题)
8. [许可证](#-许可证)


## 🌟 项目简介
本项目是一个基于网页的王者荣耀英雄随机选择工具，旨在帮助玩家快速选择英雄。通过 GitHub Pages 部署后，用户可通过链接直接访问，无需安装任何软件。


## 🎯 功能特点
✅ **随机选择**：实时滚动显示可用英雄，点击暂停即可确定选择  
✅ **三板块布局**：清晰展示当前英雄、可选英雄和已选英雄  
✅ **计数功能**：动态显示可选/已选英雄数量  
✅ **清新界面**：采用王者荣耀主题配色（#29B6F6, #E0F7FA）  
✅ **响应式设计**：适配手机和平板设备  


## 🚀 使用方法
1. **直接访问**：  
   [点击这里体验](https://wgdc0824.github.io/kingdom_random_hero/)

2. **操作指南**：  
   ![操作演示]([https://github.com/WgDc0824/kingdom_random_hero/blob/main/image.jpg])  
   - 点击 **「开始选择」** 启动滚动  
   - 点击 **「暂停」** 确定当前英雄  
   - 已选英雄会从列表中移除并显示在右侧  


## 📦 部署步骤
1. **上传文件**：  
   ```bash
   hero-selector/
   ├── index.html       # 核心网页文件
   ├── css/
   │   └── styles.css   # 样式文件
   ├── js/
   │   └── script.js    # 交互逻辑
   └── README.md        # 说明文档
   # 克隆项目
   git clone https://github.com/your-username/hero-selector.git
   
   # 开发分支
   git checkout -b feature/new-function
   
   # 提交更改
   git commit -m "Add new feature: xxx"
   
   # 推送并创建 Pull Request
   git push origin feature/new-function
