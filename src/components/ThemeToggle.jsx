import { MoonIcon, SunIcon } from './icons.jsx'

/**
 * 主题切换按钮。
 * 图标显示的是"点击后会变成什么"，同时用 aria-label 说清动作，屏幕阅读器可读。
 */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? '切换到亮色模式' : '切换到暗色模式'}
      className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors duration-150 hover:border-brand/40 hover:text-ink"
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  )
}
