import { profile } from '../data/profile.js'

/**
 * 顶部导航。
 * sticky + 半透明毛玻璃：滚动时始终可见，但不会完全遮挡内容。
 * 导航项随模块进度逐步补充，当前只有已存在的锚点。
 */
const navLinks = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
]

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2.5 rounded-lg">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-semibold text-white">
            黄
          </span>
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
          <span className="hidden text-xs text-faint sm:inline">RPA / AI 应用工程师</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
