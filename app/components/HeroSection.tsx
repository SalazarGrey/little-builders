const topics = [
  { icon: "🏠", label: "Údržba domácnosti" },
  { icon: "🪵", label: "Práce se dřevem" },
  { icon: "🔧", label: "Bezpečnost s nářadím" },
  { icon: "🔨", label: "Opravy a kutilství" },
];

export default function HeroSection() {
  return (
    <section id="uvod" className="section hero">
      <p className="hero__eyebrow">Praktická výuka pro děti</p>

      <h1 className="hero__title">
        Little
        <span>Builders</span>
      </h1>

      <p className="hero__tagline">
        Naučíme tvé děti anglicky — kladivem, pilou a šroubovákem.
        Praktické dovednosti a anglický jazyk v&nbsp;jednom.
      </p>

      <div className="hero__cards">
        {topics.map((t) => (
          <div key={t.label} className="hero__card">
            <span className="hero__card-icon">{t.icon}</span>
            {t.label}
          </div>
        ))}
      </div>

      <a href="#kontakt" className="hero__cta">
        Zjistit více
      </a>
    </section>
  );
}
