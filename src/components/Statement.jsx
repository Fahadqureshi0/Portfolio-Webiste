import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const TEXT =
  'An accuracy score in a notebook isn’t a product. I build models that answer from evidence, admit what they don’t know, and sit behind clean APIs that real software can call.'

function Word({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  )
}

export default function Statement() {
  const ref = useRef(null)
  // Words darken one by one as the paragraph moves through the viewport,
  // and fade back when scrolling up — same as the template.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  })

  const words = TEXT.split(' ')

  return (
    <section className="px-5 md:px-10 py-24 md:py-40">
      <p
        ref={ref}
        className="text-center text-[28px] md:text-[36px] xl:text-[42px] font-medium leading-[1.3] tracking-[-0.02em] max-w-5xl mx-auto"
      >
        {words.map((word, i) => (
          <span key={i}>
            <Word
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {word}
            </Word>{' '}
          </span>
        ))}
      </p>
    </section>
  )
}
