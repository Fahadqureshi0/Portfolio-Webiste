import { useEffect } from 'react'
import Lenis from 'lenis'
import { lenisRef, smoothScrollTo } from './lenis.js'

// Framer-style smooth inertia scrolling + eased anchor navigation
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onClick = (e) => {
      const link = e.target.closest('a[href*="#"]')
      if (!link) return
      let url
      try {
        url = new URL(link.href)
      } catch {
        return
      }
      if (url.pathname !== window.location.pathname || !url.hash) return
      const target = document.querySelector(url.hash)
      if (target) {
        e.preventDefault()
        history.pushState(null, '', url.hash)
        smoothScrollTo(target)
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])
}
