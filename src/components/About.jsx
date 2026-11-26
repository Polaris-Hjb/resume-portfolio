import { profile } from '../data/profile.js'
import Section from './Section.jsx'

/**
 * 关于我：一段话说清身份、能力与价值。
 * 全文来自简历"个人优势"，不新增未经验证的表述。
 */
export default function About() {
  return (
    <Section id="about" index="01" title="关于我">
      <p className="max-w-3xl text-base leading-8 text-muted md:text-[17px] md:leading-9">
        {profile.about}
      </p>
    </Section>
  )
}
