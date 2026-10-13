import { Link } from 'react-router-dom'

// Link with the template's circular arrow that swaps diagonally on hover
export default function ArrowLink({ href, children, external = false, className = '' }) {
  const content = (
    <>
      {children}
      <span className="relative border border-ink/30 rounded-full w-9 h-9 overflow-hidden grid place-items-center transition-colors duration-300 group-hover:bg-ink group-hover:border-ink">
        <span className="absolute inset-0 grid place-items-center transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full">
          ↗
        </span>
        <span className="absolute inset-0 grid place-items-center -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 text-cream">
          ↗
        </span>
      </span>
    </>
  )

  const cls = `inline-flex items-center gap-2 text-lg font-medium group w-fit ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {content}
      </a>
    )
  }

  return (
    <Link to={href} className={cls}>
      {content}
    </Link>
  )
}
