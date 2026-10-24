import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Me', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Background', href: '/#background' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream relative overflow-hidden">
      <div className="px-5 md:px-10 pt-20 md:pt-28 pb-40 md:pb-56 grid grid-cols-1 md:grid-cols-3 gap-12">
        <h2 className="display text-[48px] md:text-[58px] xl:text-[68px]">
          Turning data
          <span className="block">into deployed</span>
          <span className="block">solutions.</span>
        </h2>

        <div>
          <h3 className="text-[22px] md:text-[24px] xl:text-[26px] font-medium tracking-normal leading-[1.2] mb-6">/Quick links</h3>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="bg-cream text-ink rounded-lg px-4 py-2 font-medium transition-transform duration-300 ease-out hover:scale-110 hover:-rotate-2 active:scale-95"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[22px] md:text-[24px] xl:text-[26px] font-medium tracking-normal leading-[1.2] mb-6">/Contact</h3>
          <a
            href="mailto:fahadqureshi.dev@gmail.com"
            className="block text-cream/70 hover:text-cream transition-colors"
          >
            fahadqureshi.dev@gmail.com
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
            <a
              href="https://github.com/Fahadqureshi0"
              target="_blank"
              rel="noreferrer"
              className="text-cream/70 hover:text-cream transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/fahad-qureshi-b85664444/"
              target="_blank"
              rel="noreferrer"
              className="text-cream/70 hover:text-cream transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-10 pb-6 flex items-center justify-between text-cream/40 text-sm relative z-10">
        <span>© 2026 Fahad Qureshi</span>
        <span>Machine Learning Engineer · Bahawalpur, Pakistan</span>
      </div>

      {/* Giant watermark name — sits in normal flow after the copyright bar
          (not absolutely positioned against the footer) so it can never
          overlap the content above it; the fixed-height band gives it a
          clean bottom crop instead. */}
      <div className="relative h-[12vw] md:h-[9vw] overflow-hidden mt-4 md:mt-6">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-bold tracking-[-0.02em] text-cream/10 leading-[0.9] text-[11vw] md:text-[12vw]"
        >
          FAHAD QURESHI
        </div>
      </div>
    </footer>
  )
}
