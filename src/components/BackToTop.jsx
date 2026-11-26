import { useEffect, useState } from 'react'
import { ArrowUpIcon } from './icons.jsx'

/**
 * 返回顶部。
 * 长页面读到底部时，回看首屏要滑很久，这个按钮省掉这段成本。
 * 始终渲染、用透明度切换，避免出现/消失时布局抖动。
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="返回顶部"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted shadow-sm transition-all duration-200 hover:border-brand/40 hover:text-ink ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  )
}
