import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import ArrowLink from './ArrowLink.jsx'

export default function About() {
  const photoRef = useRef(null)
  const [imgOk, setImgOk] = useState(true)

  // Card starts edge-on and rotates open as it scrolls into view
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ['start end', 'center 0.45'],
  })
  const rotateY = useTransform(scrollYProgress, [0, 1], [-85, 0])
  const rotateZ = useTransform(scrollYProgress, [0, 1], [6, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])

  return (
    <section id="about" className="px-5 md:px-10 py-24 md:py-36">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
        {/* Left column */}
        <div className="flex flex-col justify-between h-full min-h-[420px] reveal">
          <h2 className="display text-[46px] md:text-[62px] xl:text-[76px]">Hey!</h2>
          <p className="text-[22px] font-semibold leading-[1.4] mt-auto pt-16">
            I'm <span className="font-semibold">Fahad Qureshi</span>, a
            machine learning engineer who builds AI systems end to end,
            from training the model to shipping the API that serves it.
          </p>
        </div>

        {/* Photo card — 3D flip driven by scroll */}
        <div style={{ perspective: '1400px' }}>
          <motion.div
            ref={photoRef}
            style={{ rotateY, rotateZ, scale, transformStyle: 'preserve-3d' }}
            className="rounded-3xl overflow-hidden aspect-[3/4] bg-ink/5 will-change-transform"
          >
            {imgOk ? (
              <img
                src="/fahad-qureshi.jpg"
                alt="Fahad Qureshi"
                className="w-full h-full object-cover object-top"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="w-full h-full grid place-items-center bg-ink">
                <span className="display text-cream/25 text-[72px]">FQ</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 md:pt-24 reveal">
          <p className="text-[18px] text-ink/80">
            Most ML work stops at a notebook and an accuracy score. Mine
            doesn't. I build NLP, RAG, recommendation, and predictive
            analytics systems the way production software gets built: a
            model behind a clean REST API, an interface that consumes it,
            and containers anyone can run. My everyday stack is Python,
            Scikit-learn, TensorFlow, LangChain, and FastAPI.
          </p>
          <p className="text-[18px] text-ink/80">
            I'm studying Software Engineering at The Islamia University of
            Bahawalpur, and I spent nearly two years as a Technical
            Recruiter at Kinetic Hire, screening and assessing engineers
            for technical roles. Seeing hiring from the other side taught
            me what teams actually need: clear thinking, honest limits,
            and work that holds up outside a demo. Right now I'm focused
            on retrieval-augmented generation, building assistants that
            answer from real documents and say so when they don't know.
          </p>
          <ArrowLink href="#contact">Get in touch</ArrowLink>
        </div>
      </div>
    </section>
  )
}
