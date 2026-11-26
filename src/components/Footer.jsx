import { profile } from '../data/profile.js'
import { GithubIcon, MailIcon } from './icons.jsx'

/**
 * 页脚：读完之后的第二个联系入口。
 * 顺带写出技术栈，是给技术面试官的一个小信号。
 */
export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-ink"
            >
              <MailIcon className="h-4 w-4 text-faint" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-ink"
            >
              <GithubIcon className="h-4 w-4 text-faint" />
              github.com/Polaris-Hjb
            </a>
          </div>
        </div>

        <p className="text-xs text-faint">
          © {new Date().getFullYear()} {profile.name} · 基于 Vite + React + Tailwind 构建
        </p>
      </div>
    </footer>
  )
}
