/**
 * 全站内容唯一数据源。
 * 只改这个文件就能更新网站上的所有文案与链接，无需进 JSX 里翻找。
 */
export const profile = {
  name: '黄俊柏',
  title: 'RPA 开发工程师 / AI 应用工程师',
  status: '2026 届应届生 · 求职中',
  tagline: 'Python × RPA × AI Agent —— 把 AI 生成能力接入自动化流程，打通端到端闭环',
  city: '深圳',
  email: '1520613691@qq.com',
  github: 'https://github.com/Polaris-Hjb',
  resumeFile: '/resume.pdf',
  about:
    '2026 届软件技术专业毕业生，专注 RPA 自动化与 AI 应用开发。熟练使用影刀 RPA、Coze 工作流与 Python，能把 AI 生成能力接入 RPA 执行链路，完成"内容生成 → 素材下载 → 自动发布"的全流程闭环。擅长拆解业务流程痛点，用自动化方案替代重复劳动，持续为团队降本增效。',
}

/** 技能栈：四组，对应 RPA / AI 岗的能力模型 */
export const skillGroups = [
  {
    group: 'Python 与数据处理',
    items: ['Python', '面向对象', 'Pandas', 'NumPy', 'SQL', 'MySQL', '数据清洗'],
  },
  {
    group: 'RPA 自动化',
    items: ['影刀 RPA', '实在 Agent', 'DOM 元素定位', '图像识别', '网页自动化', '批量表单提交'],
  },
  {
    group: 'AI 智能体与工作流',
    items: ['Coze', 'Prompt 工程', 'RAG 知识库', 'Agent 设计', 'Workflow 编排', 'Coze Open API', 'FastGPT'],
  },
  {
    group: '拓展工具',
    items: ['WorkBuddy', 'Trae', 'Codex', 'JavaScript', 'Linux', 'Git'],
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
      '基于 Coze 编排文案生成、提示词优化与文生图工作流，直接输出文本与图片资源 URL',
      '影刀 RPA 结合 DOM 定位与图像识别，完成页面跳转、素材上传、内容填充与提交发布',
      '内置 Python 调用 Coze Open API 完成鉴权与 JSON 解析，requests 自动下载图片并落盘',
      '增加超时重试、智能等待、异常捕获，应对网络波动与元素加载失败',
    ],
    // 无量化数字时，用可验证的结构性事实代替
    facts: ['覆盖 4 个发布环节', '全流程无人值守', '3 类容错机制'],
  },
  {
    name: '短视频自动化工具集',
    stack: ['WorkBuddy SKILL', 'Python', '音视频处理'],
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
        desc: '账号维度拉取并过滤图文帖；针对 HEVC 编码播放兼容问题，设计"原生直出 + 可选转码"双模式。',
      },
      {
        title: '短视频自动化剪辑',
        metric: '20 分钟生成 2 分钟成片',
        desc: '基于逐字稿智能断句、抽帧裁剪与片段分割，自动完成混剪拼接、配音配乐、封面选图与烧录字幕。',
      },
    ],
  },
]
