const services = [
  {
    title: 'RAG & LLM Applications',
    tags: ['LangChain', 'FAISS Vector Search', 'Grounded Answers with Citations', 'Groq'],
  },
  {
    title: 'Natural Language Processing',
    tags: ['Intent Classification', 'Sentiment Analysis', 'Text Preprocessing', 'TF-IDF'],
  },
  {
    title: 'Recommendation Systems',
    tags: ['Content-Based Filtering', 'Resume-to-Job Matching', 'Cosine Similarity'],
  },
  {
    title: 'Machine Learning & Predictive Analytics',
    tags: ['Churn & Risk Prediction', 'XGBoost', 'Imbalanced Data', 'Cross-Validation'],
  },
  {
    title: 'Deep Learning',
    tags: ['TensorFlow / Keras', 'LSTMs', 'CNNs & Transfer Learning'],
  },
  {
    title: 'Model Deployment & APIs',
    tags: ['FastAPI', 'REST API Design', 'Docker & Compose', 'Streamlit Cloud'],
  },
]

export default function Services() {
  return (
    <section id="services" className="px-5 md:px-10 py-24 md:py-32">
      <h2 className="display text-[46px] md:text-[62px] xl:text-[76px] reveal">Services</h2>

      <div className="mt-16 md:mt-24">
        {services.map((s) => (
          <div
            key={s.title}
            className="reveal group border-t border-ink/10 last:border-b py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors duration-300 hover:bg-ink/[0.03]"
          >
            <h3 className="text-[28px] xl:text-[30px] font-medium tracking-[-0.02em] leading-[1.2] transition-transform duration-500 ease-out group-hover:translate-x-4">
              {s.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-black/50 text-[18px] transition-colors duration-500 group-hover:text-ink/80">
              {s.tags.map((t, i) => (
                <span key={t} className="flex items-center gap-3">
                  {i > 0 && <span className="text-xs">•</span>}
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
