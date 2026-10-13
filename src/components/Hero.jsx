import { motion } from 'motion/react'

const lineAnim = {
  initial: { y: '110%' },
  animate: { y: '0%' },
}

// Hero mirrors the reference template: giant centered two-line headline,
// small portrait thumb under it, big ©2026 bottom-left, tag bottom-right.
export default function Hero() {
  return (
    <header id="home" className="min-h-svh flex flex-col px-5 md:px-10 pt-28 pb-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative">
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-4 -left-5 md:-top-8 md:-left-10 xl:-top-10 xl:-left-14 text-[24px] md:text-[44px] xl:text-[60px] leading-none select-none"
          >
            ✦
          </motion.span>
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0, rotate: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-3 -right-5 md:-bottom-6 md:-right-10 xl:-bottom-8 xl:-right-14 text-[20px] md:text-[34px] xl:text-[46px] leading-none select-none"
          >
            ✦
          </motion.span>

          <h1 className="display font-extrabold leading-[0.92] uppercase text-center text-[52px] md:text-[110px] xl:text-[150px]">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                {...lineAnim}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Software
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                {...lineAnim}
                transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                Engineer
              </motion.span>
            </span>
          </h1>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-end justify-between gap-6"
      >
        <span className="display text-[26px] md:text-[38px]">©2026</span>
        <span className="text-[13px] md:text-[16px] text-ink/80 pb-1 text-right">
          /MACHINE LEARNING · RAG · NLP · FASTAPI
        </span>
      </motion.div>
    </header>
  )
}
