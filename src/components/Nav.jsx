import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/#home' },
  { label: 'About Me', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Background', href: '/#background' },
  { label: 'Contact', href: '/#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <a
        href="/Fahad_Qureshi_Resume.pdf"
        download
        className="hidden md:block fixed top-5 right-5 z-40 bg-cream text-ink rounded-[20px] shadow-xl px-5 py-3.5 font-semibold text-[15px] hover:opacity-85 transition-opacity"
      >
        Resume ↓
      </a>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[min(400px,92vw)]">
      <div className="bg-ink text-cream rounded-[20px] shadow-xl overflow-hidden transition-all duration-300">
        <div className="flex items-center justify-between pl-6 pr-2.5 py-2.5">
          <Link to="/#home" className="font-semibold text-[18px] tracking-tight" onClick={() => setOpen(false)}>
            Fahad Qureshi
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="shrink-0 bg-cream text-ink rounded-xl px-5 py-2.5 font-bold leading-none hover:opacity-80 transition-opacity"
          >
            {open ? '✕' : '⋯'}
          </button>
        </div>
        <div
          className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 pt-1 flex flex-col gap-2.5">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="bg-cream text-ink rounded-full px-5 py-2.5 font-medium text-[15px] text-center hover:bg-cream/85 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="/Fahad_Qureshi_Resume.pdf"
                download
                className="md:hidden bg-cream text-ink rounded-full px-5 py-2.5 font-medium text-[15px] text-center hover:bg-cream/85 transition-colors"
              >
                Resume ↓
              </a>
              <a
                href="mailto:fahadqureshi.dev@gmail.com"
                className="mt-1 text-center text-cream/60 hover:text-cream text-sm transition-colors"
              >
                fahadqureshi.dev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      </nav>
    </>
  )
}
