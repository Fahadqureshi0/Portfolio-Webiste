import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectVisual from './ProjectVisual.jsx'
import ArrowLink from './ArrowLink.jsx'

export default function Projects() {
  return (
    <section id="work" className="px-5 md:px-10 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="display text-[46px] md:text-[62px] xl:text-[76px] reveal">
          Featured
          <span className="block">Projects</span>
        </h2>
        <ArrowLink
          href="https://github.com/Fahadqureshi0"
          external
          className="reveal mb-2"
        >
          All Repositories
        </ArrowLink>
      </div>

      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-16">
        {projects.map((p) => (
          <Link key={p.slug} to={`/work/${p.slug}`} className="reveal group block">
            <ProjectVisual project={p} />
            <h3 className="mt-5 text-[30px] xl:text-[32px] font-medium tracking-[-0.02em] leading-[1.2]">
              {p.name}
            </h3>
            <p className="text-black/50 text-[18px] mt-1">{p.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
