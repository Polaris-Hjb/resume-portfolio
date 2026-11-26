import { profile } from '../data/profile.js'
import { DownloadIcon, GithubIcon, LocationIcon, MailIcon } from './icons.jsx'

/**
 * 首屏：全站唯一需要 3 秒内被读懂的区域。
 * 只有一个人字号主标题、一个主按钮，其余信息用低对比度承载，保证视觉焦点唯一。
 */
export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-content px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {profile.status}
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-lg font-medium text-muted md:text-xl">{profile.title}</p>

        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{profile.tagline}</p>

        <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
          <li className="inline-flex items-center gap-2">
            <LocationIcon className="h-4 w-4 text-faint" />
            {profile.city}
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-ink"
            >
              <MailIcon className="h-4 w-4 text-faint" />
              {profile.email}
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-ink"
            >
              <GithubIcon className="h-4 w-4 text-faint" />
              github.com/Polaris-Hjb
            </a>
          </li>
        </ul>

        <div className="mt-10">
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-brand-hover"
          >
            <DownloadIcon className="h-4 w-4" />
            下载 PDF 简历
          </a>
        </div>
      </div>
    </section>
  )
}
