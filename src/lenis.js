// Shared Lenis instance so route-change hash scrolling can reuse the same
// smooth-scroll engine as in-page anchor clicks.
export const lenisRef = { current: null }

// Jump to the top without animation. Must go through Lenis: a native
// window.scrollTo is overwritten on the next frame by Lenis's internal
// scroll state, which still holds the previous page's position.
export function scrollToTop() {
  if (lenisRef.current) {
    lenisRef.current.resize()
    lenisRef.current.scrollTo(0, { immediate: true, force: true })
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}

export function smoothScrollTo(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return
  if (lenisRef.current) {
    // Recalculate content height first — route changes can resize the page
    // before Lenis's own resize observer catches up, which would otherwise
    // clamp the scroll target to the previous (shorter) page's height.
    lenisRef.current.resize()
    lenisRef.current.scrollTo(el, { offset: 0, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
