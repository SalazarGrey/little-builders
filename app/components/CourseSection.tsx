const courses = [
  {
    icon: "🏠",
    title: "Údržba domácnosti",
    en: "Home Maintenance",
    desc: "Děti se naučí, jak pečovat o domácnost — malování, utěsňování, výměna žárovek a základní elektrika. Vše vysvětleno anglicky, krok za krokem.",
  },
  {
    icon: "🪵",
    title: "Práce se dřevem",
    en: "Woodworking",
    desc: "Od jednoduchých spojů až po vlastní výrobek. Naučíme děti pracovat se dřevem, měřit, řezat a sestavovat — a přitom si osvojí anglickou terminologii.",
  },
  {
    icon: "🔧",
    title: "Bezpečnost s nářadím",
    en: "Tool Safety",
    desc: "Správné zacházení s ručním i elektrickým nářadím. Děti poznají nástroje jejich anglickými názvy a naučí se, jak s nimi bezpečně pracovat.",
  },
  {
    icon: "🔨",
    title: "Opravy a kutilství",
    en: "Repairs & DIY",
    desc: "Prasklá trubka, skřípající dveře, uvolněný šroub — žádný problém. Děti se naučí základní opravy a získají sebevědomí do reálného života.",
  },
];

export default function CourseSection() {
  return (
    <section id="kurzy" className="section course-section">
      <div className="course-section__header">
        <p className="course-section__eyebrow">Co se děti naučí</p>
        <h2 className="course-section__title">Obsah kurzů</h2>
        <p className="course-section__subtitle">
          Každá hodina probíhá v&nbsp;angličtině. Děti se učí jazykem praxe —
          slovíčka si pamatují, protože je ihned používají.
        </p>
      </div>

      <div className="course-section__grid">
        {courses.map((c) => (
          <div key={c.title} className="course-card">
            <span className="course-card__icon">{c.icon}</span>
            <div className="course-card__body">
              <span className="course-card__en">{c.en}</span>
              <h3 className="course-card__title">{c.title}</h3>
              <p className="course-card__desc">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
