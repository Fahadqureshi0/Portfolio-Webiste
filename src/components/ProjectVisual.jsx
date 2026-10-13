// Abstract stat-card visual used in place of a real screenshot.
export default function ProjectVisual({ project, size = 'md' }) {
  const big = size === 'lg'
  return (
    <div
      className={`rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} ${
        big ? 'md:aspect-[16/9] p-6 pt-14 md:p-14' : 'md:aspect-[8/5] p-6 pt-14 md:p-10'
      } flex items-end transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
    >
      <div
        className={`bg-white/95 rounded-2xl w-full shadow-2xl translate-y-3 transition-transform duration-500 ease-out group-hover:translate-y-0 ${
          big ? 'p-8 md:p-10' : 'p-5 md:p-6'
        }`}
      >
        <div className="flex gap-1.5 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        </div>

        <div className="flex items-end justify-between flex-wrap gap-4">
          <p
            className={`text-ink font-semibold tracking-tight leading-tight ${
              big ? 'text-2xl md:text-4xl max-w-md' : 'text-lg md:text-2xl'
            }`}
          >
            {project.headline}
          </p>
          {project.stat && (
            <div className="text-right shrink-0">
              <div className={`font-bold text-ink leading-none ${big ? 'text-5xl md:text-6xl' : 'text-3xl'}`}>
                {project.stat}
              </div>
              <div className="text-ink/40 text-sm mt-1">{project.statLabel}</div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs md:text-sm px-3 py-1 rounded-full border border-ink/15 text-ink/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
