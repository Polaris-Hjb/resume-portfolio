# 个人简历作品集 · Resume Portfolio

RPA 开发工程师 / AI 应用工程师方向的个人简历网站，作为 PDF 简历的补充：HR 打开 30 秒内可读完核心信息，同时展示工程化能力。

**线上地址**：https://polaris-hjb.github.io/resume-portfolio/

## 技术栈

| 层 | 选型 | 说明 |
|---|---|---|
| 构建 | Vite 8 | 冷启动快，产物为纯静态文件 |
| 框架 | React 19 | 组件化组织区块，主题状态用原生 Hook 管理 |
| 样式 | Tailwind CSS 3.4 | 颜色全部指向 CSS 变量，暗色模式只覆盖变量 |
| 图标 | 内联 SVG | 全站只需 6 个图标，不引入图标库 |
| 部署 | GitHub Pages / Vercel | 纯静态，零服务端依赖 |

无路由、无状态管理库、无动画库、无外部字体请求。

## 本地开发

```bash
npm install     # 安装依赖
npm run dev     # 开发服务器，默认 http://localhost:5173
npm run build   # 生产构建，输出到 dist/
npm run preview # 本地预览生产构建
```

## 目录结构

```
resume-portfolio/
├── index.html                  # 页面外壳 + 首屏防闪白脚本 + SEO meta
├── vite.config.js              # base 由 BASE_PATH 环境变量控制
├── tailwind.config.js          # darkMode: 'class'、颜色映射 CSS 变量
├── public/
│   ├── huangjunbai-resume.pdf  # 下载按钮指向的文件（网站版，不含手机号与照片）
│   ├── favicon.svg             # 深蓝方块 + "黄" 字
│   └── robots.txt
└── src/
    ├── index.css               # 亮/暗两套设计令牌 + 全局基础样式
    ├── App.jsx                 # 区块组装与主题状态
    ├── data/
    │   ├── profile.js          # 身份、关于我、技能栈、项目经历
    │   └── education.js        # 教育与证书
    ├── hooks/useTheme.js       # 主题读取、切换与持久化
    └── components/
        ├── NavBar.jsx          # 顶部导航 + 滚动高亮 + 主题按钮
        ├── Hero.jsx            # 首屏
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Footer.jsx
        ├── BackToTop.jsx       # 返回顶部
        ├── Section.jsx         # 区块统一外壳
        ├── ThemeToggle.jsx
        └── icons.jsx           # 内联 SVG 图标
```

## 修改内容（最常用）

全站文案集中在 **`src/data/` 两个文件**，改完推送即可，不用碰组件代码。

### 1. `src/data/profile.js`

| 字段 | 对应位置 |
|---|---|
| `name` / `title` / `status` | 首屏姓名、职位、状态药丸 |
| `tagline` | 首屏一句话定位 |
| `city` / `email` / `github` | 首屏与页脚的联系方式 |
| `about` | 「关于我」段落 |
| `skillGroups` | 技能栈四组卡片（`group` 是标题，`items` 是标签） |
| `projects` | 项目卡片 |

`projects` 有两种结构：

```js
// 形式一：单项目 + 要点列表 + 结构性事实
{
  name: '项目名',
  stack: ['技术栈标签'],
  summary: '一句话概述',
  highlights: ['要点 1', '要点 2'],
  facts: ['覆盖 4 个环节', '全流程无人值守'],   // 可选
}

// 形式二：一个项目包含多个子工具
{
  name: '项目名',
  stack: ['技术栈标签'],
  summary: '一句话概述',
  children: [
    { title: '子工具名', metric: '100+ 条 / 小时', desc: '描述' },
  ],
}
```

### 2. `src/data/education.js`

学校、专业、学历、时间、主修课程数组、证书数组。

### 3. 替换简历 PDF

把新 PDF 命名为 `huangjunbai-resume.pdf` 覆盖 `public/huangjunbai-resume.pdf`，同时修改 `profile.js` 里 `resumeFile` 的 `?v=` 日期（如 `?v=20261201`），让浏览器和 CDN 重新拉取，避免下载到旧版。

下载时浏览器另存的文件名由 `profile.resumeFileName` 决定（当前为 `黄俊柏-简历.pdf`），与真实文件名无关。

### 4. 调整配色

只改 `src/index.css` 顶部的 CSS 变量（RGB 三元组格式），亮色在 `:root`，暗色在 `.dark`。组件里不需要任何 `dark:` 前缀。

## 部署

### GitHub Pages（当前方案）

- 工作流：`.github/workflows/deploy.yml`
- 触发：push 到 `main` 自动构建并发布
- 构建时注入 `BASE_PATH=/resume-portfolio/`，对应仓库名
- **改了仓库名必须同步修改工作流里的 `BASE_PATH` 和 `vite.config.js` 的默认值**
- 前置条件：仓库 Settings → Pages → Source 选择 `GitHub Actions`

### Vercel

导入仓库即可，Framework 自动识别为 Vite，**不需要设置 `BASE_PATH`**（默认 `/` 走根路径）。之后每次 push 自动重新部署。

## 质量基线

| 指标 | 数值 |
|---|---|
| Lighthouse Performance / Accessibility / Best Practices / SEO | 100 / 100 / 100 / 100 |
| FCP / LCP / TBT / CLS | 1.2s / 1.4s / 0ms / 0 |
| 构建产物 | CSS 12.9 kB（gzip 3.7 kB）、JS 235 kB（gzip 74.5 kB） |

> 构建产物中 JS 体积基本为 React 运行时本身，无第三方库冗余。

## 后续可扩展

- 项目真实截图（比任何插图都有说服力）
- 把两个项目的代码整理后公开，让 GitHub 链接有落点
- 绑定自定义域名（国内访问需备案，海外托管可直接解析）
