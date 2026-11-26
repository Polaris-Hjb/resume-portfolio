import { education } from '../data/education.js'
import Section from './Section.jsx'

/**
 * 教育与证书：
 * 教育信息用一条时间线承载，主修课程与证书作为次要信息，不与项目模块争夺视觉权重。
 */
export default function Education() {
  return (
    <Section id="education" index="04" title="教育与证书">
      <div className="rounded-card border border-line bg-surface p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold tracking-tight">{education.school}</h3>
          <span className="text-sm text-faint">{education.period}</span>
        </div>

        <p className="mt-1.5 text-sm text-muted">
          {education.major} · {education.degree}
        </p>

        <div className="mt-6">
          <h4 className="text-xs font-medium tracking-widest text-faint">主修课程</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {education.courses.map((course) => (
              <li
                key={course}
                className="rounded-full border border-line bg-surface-muted px-3 py-1 text-xs text-muted"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-line pt-6">
          <h4 className="text-xs font-medium tracking-widest text-faint">证书</h4>
          <ul className="mt-3 space-y-2">
            {education.certificates.map((cert) => (
              <li key={cert.name} className="flex flex-wrap items-baseline gap-x-2 text-sm">
                <span className="font-medium">{cert.name}</span>
                <span className="text-muted">{cert.field}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
