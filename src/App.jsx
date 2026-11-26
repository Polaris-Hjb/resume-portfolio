import { profile } from './data/profile.js'

/**
 * 阶段 2 验证页：只用来确认 Vite + React + Tailwind 三者都正常工作，
 * 阶段 3 会被正式的页面模块替换。
 */
export default function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-content flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-4xl font-semibold tracking-tight">{profile.name}</h1>
      <p className="text-muted">{profile.title}</p>

      <div className="rounded-card border border-line bg-surface px-6 py-5 text-center shadow-sm">
        <p className="text-sm text-muted">工程初始化完成</p>
        <p className="mt-1 text-sm text-faint">Vite · React · Tailwind CSS</p>
        <p className="mt-3 inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
          阶段 3 将替换为正式内容
        </p>
      </div>
    </main>
  )
}
