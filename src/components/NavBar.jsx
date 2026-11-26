import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'
import ThemeToggle from './ThemeToggle.jsx'

/**
 * 顶部导航。
 * sticky + 半透明毛玻璃：滚动时始终可见，但不会完全遮挡内容。
 */
const navLinks = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '技能栈', href: '#skills' },
  { label: '项目经历', href: '#projects' },
  { label: '教育与证书', href: '#education' },
]

export default function NavBar({ theme, onToggleTheme }) {
  const [activeId, setActiveId] = useState('#home')

  useEffect(() => {
    const targets = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((element) => element !== null)

    if (targets.length === 0) return undefined

    // 只把"紧贴导航下方的一小段"视为激活区，保证任何时刻最多命中一个区块
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-72px 0px -75% 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-6">
        <a href="#home" className="flex items-center gap-2.5 rounded-lg">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-semibold text-white">
            黄
          </span>
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
          <span className="hidden text-xs text-faint sm:inline">RPA / AI 应用工程师</span>
        </a>

        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative text-sm transition-colors duration-150 hover:text-ink ${
                    isActive ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {link.label}
                  {isActive ? (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-brand" />
                  ) : null}
                </a>
              )
            })}
          </nav>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  )
}
