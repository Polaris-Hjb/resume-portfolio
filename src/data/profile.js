/**
 * 全站内容唯一数据源。
 * 只改这个文件就能更新网站上的所有文案与链接，无需进 JSX 里翻找。
 */
export const profile = {
  name: '黄俊柏',
  title: 'RPA 开发工程师 / AI 应用工程师',
  status: '2026 届毕业生 · 求职中',
  tagline: 'Python × RPA × AI Agent —— 把 AI 生成能力接入自动化流程，打通端到端闭环',
  city: '深圳',
  email: '1520613691@qq.com',
  github: 'https://github.com/Polaris-Hjb',
  // 用 BASE_URL 拼接，部署到 GitHub Pages 这类子路径时不会 404
  // ?v= 用于更换 PDF 后绕过浏览器与 CDN 缓存
  resumeFile: `${import.meta.env.BASE_URL}huangjunbai-resume.pdf?v=20261128`,
  // 下载时由 download 属性指定另存文件名，与真实文件名解耦
  resumeFileName: '黄俊柏-简历.pdf',
  about:
    '2026 届软件技术专业毕业生，专注 RPA 自动化、AI 应用开发与数据处理。熟练使用 Python、影刀 RPA、实在 Agent 与 Coze 工作流，能够独立完成从流程拆解、编排调试到上线运行的完整链路；擅长识别业务流程中的重复环节，用自动化方案替代人工操作，降低人力成本，为团队增效赋能。',
}

/** 技能栈：四组，对应 RPA / AI 岗的能力模型 */
export const skillGroups = [
  {
    group: 'Python 与数据处理',
    items: ['Python', 'Pandas', 'NumPy', 'SQL', 'MySQL'],
  },
  {
    group: 'RPA 自动化',
    items: ['影刀 RPA', '实在 Agent', '网页自动化', '桌面自动化'],
  },
  {
    group: 'AI 智能体与工作流',
    items: ['Coze', 'Prompt 工程', 'RAG 知识库', 'AI Agent', 'Workflow'],
  },
  {
    group: 'AI 应用与开发工具',
    items: ['WorkBuddy', 'Trae', 'Codex', 'DeepSeek Harness', 'Git', 'GitHub'],
  },
]

/**
 * 项目经历：两张核心卡片。
 * highlights 用于无子项的项目；children 用于"一个项目含多个子工具"的结构。
 */
export const projects = [
  {
    name: '小红书自动化发布系统',
    stack: ['Coze 工作流', '影刀 RPA', 'Python', 'Coze Open API'],
    summary: '打通 AI 内容生成与 RPA 自动发布，实现"生成 — 下载 — 上传 — 发布"全链路无人值守。',
    highlights: [
      '基于 Coze 编排文案生成、提示词优化与文生图工作流，输出文本与图片资源 URL',
      '影刀 RPA 结合 DOM 定位与图像识别，完成页面跳转、素材上传、内容填充与提交发布',
      '内置 Python 模块对接 Coze Open API 完成鉴权、工作流调用与 JSON 解析，requests 自动下载图片并落盘',
      '增加接口超时重试、页面智能等待、异常捕获机制，兼容网络波动与元素加载失败等异常场景',
    ],
    // 项目量化数据，与 PDF 简历保持一致
    facts: ['替代 80% 重复操作', '效率提升 3 倍', '覆盖 4 个发布环节', '稳定性 95%+'],
  },
  {
    name: '短视频自动化工具集',
    stack: ['WorkBuddy', 'SKILL', 'Python', '音视频处理'],
    summary: '围绕短视频生产链路封装三套自动化工具，覆盖采集、下载与剪辑三个环节。',
    children: [
      {
        title: '抖音批量采集逐字稿',
        metric: '100+ 条 / 小时',
        desc: '输入账号链接与采集数量，自动完成批量抓取、音频转写与文本校正，输出口播逐字稿、封面标题、正文文案与话题标签。',
      },
      {
        title: 'TikTok 批量下载',
        metric: '200+ 条 / 小时',
        desc: '自动拉取账号视频清单并过滤图文帖，针对 HEVC 编码播放兼容问题，设计"原生直出 + 可选转码"双模式。',
      },
      {
        title: '短视频自动化剪辑',
        metric: '20 分钟生成 2 分钟成片',
        desc: '基于逐字稿智能断句、抽帧裁剪与片段分割，自动完成混剪拼接、配音配乐、封面选图与烧录字幕。',
      },
    ],
  },
]
