import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { getProject, projects } from '../data/projects.js'
import ProjectVisual from '../components/ProjectVisual.jsx'
import ArrowLink from '../components/ArrowLink.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <Navigate to="/" replace />

  const more = projects.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div>
      <Nav />
      <main className="px-5 md:px-10 pt-28 md:pt-36 pb-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-ink/50 hover:text-ink transition-colors text-sm mb-8"
          >
            ← Back to projects
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h1 className="display text-[46px] md:text-[62px] xl:text-[76px]">{project.name}</h1>
              <p className="text-[22px] text-black/50 mt-3">{project.subtitle}</p>
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-ink text-cream rounded-xl px-6 py-3.5 font-semibold transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98]"
              >
                View on GitHub ↗
              </a>
            )}
          </div>

          <ProjectVisual project={project} size="lg" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mt-16">
            <div className="md:col-span-2">
              <h2 className="text-[26px] font-medium tracking-normal mb-4">Overview</h2>
              <p className="text-[18px] text-ink/70">{project.description}</p>

              <h2 className="text-[26px] font-medium tracking-normal mt-12 mb-4">Highlights</h2>
              <ul className="space-y-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[18px] text-ink/70">
                    <span className="text-ink/30 mt-1">/</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {project.collaborator && (
                <p className="text-ink/40 text-sm mt-10">
                  Built with {project.collaborator}
                </p>
              )}
            </div>

            <div>
              <h2 className="text-[26px] font-medium tracking-normal mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1.5 rounded-full border border-ink/15 text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-ink/20 rounded-xl px-5 py-3 font-medium transition-colors hover:bg-ink hover:text-cream"
                  >
                    Source code ↗
                  </a>
                ) : (
                  <p className="inline-flex items-center gap-2 border border-ink/10 rounded-xl px-5 py-3 font-medium text-ink/40">
                    Private repository
                  </p>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-ink/20 rounded-xl px-5 py-3 font-medium transition-colors hover:bg-ink hover:text-cream"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {more.length > 0 && (
          <div className="mt-28">
            <h2 className="display text-[40px] md:text-[52px] xl:text-[62px] mb-10">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-16">
              {more.map((p) => (
                <Link key={p.slug} to={`/work/${p.slug}`} className="group block">
                  <ProjectVisual project={p} />
                  <h3 className="mt-5 text-[30px] xl:text-[32px] font-medium tracking-[-0.02em] leading-[1.2]">{p.name}</h3>
                  <p className="text-black/50 text-[18px] mt-1">{p.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-20">
          <ArrowLink href="/#contact">Hiring for ML, or building something with it? Let's talk.</ArrowLink>
        </div>
      </main>
      <Footer />
    </div>
  )
}
