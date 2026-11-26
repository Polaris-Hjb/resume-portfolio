/** @type {import('tailwindcss').Config} */
export default {
  // 通过 <html class="dark"> 切换主题，配合阶段 4 的切换逻辑
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // 全部颜色指向 CSS 变量，暗色模式只需在 .dark 里覆盖变量
      colors: {
        page: 'rgb(var(--c-page) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        'surface-muted': 'rgb(var(--c-surface-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        faint: 'rgb(var(--c-faint) / <alpha-value>)',
        brand: {
          DEFAULT: 'rgb(var(--c-brand) / <alpha-value>)',
          hover: 'rgb(var(--c-brand-hover) / <alpha-value>)',
          soft: 'rgb(var(--c-brand-soft) / <alpha-value>)',
        },
      },
      fontFamily: {
        // 系统字体栈：零外部请求，中英文都有合适的回退
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Microsoft YaHei',
          'PingFang SC',
          'system-ui',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1080px',
      },
      borderRadius: {
        card: '12px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
