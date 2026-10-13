// Sourced from Fahad's resume.
const groups = [
  {
    label: 'Experience',
    items: [
      {
        title: 'Technical Recruiter',
        org: 'Kinetic Hire LLC',
        period: 'May 2024 – Jan 2026',
        detail:
          'Ran the full technical hiring lifecycle across multiple open requisitions: sourcing, screening, and assessing candidates, coordinating and conducting interviews, and partnering with hiring teams to keep pipelines moving and placements on time.',
      },
    ],
  },
  {
    label: 'Education',
    items: [
      {
        title: 'BS Software Engineering',
        org: 'The Islamia University of Bahawalpur',
      },
    ],
  },
  {
    label: 'Certifications',
    items: [
      { title: 'Intro to Deep Learning', org: 'Kaggle', period: 'Aug 2026' },
      { title: 'Intro to Machine Learning', org: 'Kaggle', period: 'Jul 2026' },
      { title: 'Python', org: 'Kaggle', period: 'Jul 2026' },
    ],
  },
]

export default function Experience() {
  return (
    <section id="background" className="px-5 md:px-10 py-24 md:py-32">
      <h2 className="display text-[46px] md:text-[62px] xl:text-[76px] reveal">Background</h2>

      <div className="mt-16 md:mt-24 space-y-14 md:space-y-20">
        {groups.map((g) => (
          <div key={g.label} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <h3 className="reveal text-[14px] md:text-[15px] tracking-[0.08em] uppercase text-ink/50 font-medium md:pt-8">
              /{g.label}
            </h3>
            <div className="md:col-span-2">
              {g.items.map((item) => (
                <div
                  key={item.title}
                  className="reveal border-t border-ink/10 last:border-b py-6 md:py-8"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-6">
                    <p className="text-[24px] xl:text-[26px] font-medium tracking-[-0.02em] leading-[1.2]">
                      {item.title}
                    </p>
                    {item.period && (
                      <span className="text-[15px] text-ink/50 shrink-0">{item.period}</span>
                    )}
                  </div>
                  <p className="text-[18px] text-black/50 mt-1">{item.org}</p>
                  {item.detail && (
                    <p className="text-[18px] text-ink/70 mt-4 max-w-2xl">{item.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
