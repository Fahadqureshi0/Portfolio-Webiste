import { useState } from 'react'

const EMAIL = 'fahadqureshi.dev@gmail.com'
// Paste a Formspree form URL (https://formspree.io/f/xxxxxxx) here to have
// submissions emailed directly. While it's empty, the form opens the
// visitor's mail app with the message pre-filled instead.
const FORMSPREE_ENDPOINT = ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.project}\n\n${form.name}\n${form.email}`)
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', project: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full bg-transparent border border-cream/20 rounded-xl px-4 py-3 text-[16px] text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/60 transition-colors'

  return (
    <section id="contact" className="px-5 md:px-10 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="reveal">
          <h2 className="display text-[46px] md:text-[62px] xl:text-[76px]">
            Let's <span className="text-ink/30">talk.</span>
          </h2>
          <p className="mt-6 text-[18px] text-ink/70 max-w-md">
            I'm open to AI/ML engineering roles, internships, and freelance
            work. If you're hiring, or building something that needs machine
            learning, send me a note and I'll get back to you.
          </p>

          <div className="flex gap-3 mt-10">
            <a
              href="https://github.com/Fahadqureshi0"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="bg-ink/[0.06] rounded-xl w-12 h-12 grid place-items-center hover:bg-ink hover:text-cream transition-colors"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.11-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.25.45-2.28 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="bg-ink/[0.06] rounded-xl w-12 h-12 grid place-items-center hover:bg-ink hover:text-cream transition-colors"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="reveal bg-ink rounded-3xl p-6 md:p-10 space-y-5">
          <div>
            <label className="block text-cream/80 mb-2 text-[16px]">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className={field}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-cream/80 mb-2 text-[16px]">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className={field}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-cream/80 mb-2 text-[16px]">Message</label>
            <textarea
              name="project"
              required
              rows={5}
              placeholder="Tell me about the role or the project"
              className={`${field} resize-none`}
              value={form.project}
              onChange={(e) => setForm({ ...form, project: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-cream text-ink rounded-xl py-3.5 font-semibold text-lg transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
          >
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
          {status === 'sent' && (
            <p className="text-cream/80 text-sm text-center">Thanks — I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Email me directly at{' '}
              <a href={`mailto:${EMAIL}`} className="underline">
                {EMAIL}
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
