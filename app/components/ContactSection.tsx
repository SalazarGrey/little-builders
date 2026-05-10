const contacts = [
  {
    icon: "📍",
    label: "Adresa",
    value: "Náměstí Míru 1, 120 00 Praha 2",
  },
  {
    icon: "📞",
    label: "Telefon",
    value: "+420 777 123 456",
  },
  {
    icon: "✉️",
    label: "E-mail",
    value: "info@littlebuilders.cz",
  },
  {
    icon: "🕐",
    label: "Provozní doba",
    value: "Po – Pá: 8:00 – 18:00",
  },
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="section contact-section">
      <h2 className="contact-section__title">Kontakt</h2>

      <div className="contact-section__grid">
        {/* Map — replace with real coordinates when ready */}
        <div className="contact-section__map">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=14.408%2C50.069%2C14.458%2C50.089&layer=mapnik&marker=50.0796%2C14.4328"
            title="Mapa – Little Builders"
            loading="lazy"
          />
        </div>

        <div className="contact-section__info">
          <h3 className="contact-section__info-heading">
            Napište nebo zavolejte
          </h3>

          <div className="contact-items">
            {contacts.map((c) => (
              <div key={c.label} className="contact-item">
                <span className="contact-item__icon">{c.icon}</span>
                <div>
                  <div className="contact-item__label">{c.label}</div>
                  <div className="contact-item__value">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-section__footer">
        © {new Date().getFullYear()} Little Builders · Všechna práva vyhrazena
      </div>
    </section>
  );
}
