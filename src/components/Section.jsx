/**
 * 区块外壳，统一间距、容器宽度与标题样式。
 * 加序号是为了让长页面有目录感，也符合技术风的克制排版。
 */
export default function Section({ id, index, title, children, className = '' }) {
  return (
    <section id={id} className={`border-t border-line py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-content px-6">
        <div className="mb-10 flex items-baseline gap-3">
          {index ? (
            <span className="text-xs font-medium tracking-[0.2em] text-brand">{index}</span>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
