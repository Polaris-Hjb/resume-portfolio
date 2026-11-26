import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

/**
 * 读取初始主题：优先用户上次的选择，其次跟随系统设置。
 * index.html 里的内联脚本已经提前把 dark 类加到 <html> 上，这里读的是同一个结果。
 */
function getInitialTheme() {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
