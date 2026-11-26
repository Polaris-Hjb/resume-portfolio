import { projects } from '../data/profile.js'
import Section from './Section.jsx'

/**
 * 项目经历：两张卡片，纵向排列。
 * 内容密度高，所以单列全宽，避免两列压缩后行宽过窄影响阅读。
 */
export default function Projects() {
  return (
    <Section id="projects" index="03" title="项目经历">
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-card border border-line bg-surface p-6 transition-colors duration-200 hover:border-brand/40 md:p-8"
          >
            <h3 className="text-lg font-semibold tracking-tight md:text-xl">{project.name}</h3>

            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>

            {project.highlights ? (
              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-7 text-muted">
                    <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {project.facts ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.facts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-md border border-line px-2.5 py-1 text-xs text-muted"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            ) : null}

            {project.children ? (
              <div className="mt-5 divide-y divide-line">
                {project.children.map((child, index) => (
                  <div
                    key={child.title}
                    className="grid grid-cols-[24px_1fr] gap-3 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-soft text-xs font-semibold text-brand">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h4 className="text-sm font-semibold">{child.title}</h4>
                        <span className="text-xs font-semibold text-brand">{child.metric}</span>
                      </div>
                      <p className="mt-1.5 text-sm leading-7 text-muted">{child.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}
