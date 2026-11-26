import { skillGroups } from '../data/profile.js'
import Section from './Section.jsx'

/**
 * 技能栈：四组卡片。
 * 用卡片分组替代一长串标签，让 HR 按"能力域"扫读而不是逐个词读。
 */
export default function Skills() {
  return (
    <Section id="skills" index="02" title="技能栈">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.group}
            className="rounded-card border border-line bg-surface p-6 transition-colors duration-200 hover:border-brand/40"
          >
            <h3 className="text-sm font-semibold tracking-tight">{group.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface-muted px-3 py-1 text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
