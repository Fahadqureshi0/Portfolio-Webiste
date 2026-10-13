import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import useLenis from './useLenis.js'
import { smoothScrollTo, scrollToTop } from './lenis.js'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      // New route without an anchor (e.g. a project page): reset to the top
      // through Lenis, otherwise it restores the previous page's position.
      scrollToTop()
      return
    }
    // Wait for the route's content (and images/animations affecting layout
    // height) to settle before scrolling, otherwise Lenis may clamp to a
    // stale, shorter page height from the previous route.
    const id = setTimeout(() => smoothScrollTo(hash), 150)
    return () => clearTimeout(id)
  }, [pathname, hash])

  return null
}

export default function App() {
  useLenis()

  return (
    <div className="grain">
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}
