import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Statement from '../components/Statement.jsx'
import Services from '../components/Services.jsx'
import Projects from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import useReveal from '../useReveal.js'

export default function Home() {
  useReveal()

  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Statement />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
