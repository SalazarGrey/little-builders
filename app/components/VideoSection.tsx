export default function VideoSection() {
  return (
    <section id="video" className="section video-section">
      <div className="video-section__header">
        <h2 className="video-section__title">Jak to funguje?</h2>
        <p className="video-section__desc">
          Podívejte se, jak probíhají naše hodiny. Děti se učí anglicky
          přirozeně — prací rukama, řešením skutečných problémů a spoluprací
          v&nbsp;týmu.
        </p>
      </div>

      <div className="video-section__embed">
        {/* Replace the src URL with your actual YouTube video embed link */}
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Little Builders – ukázka výuky"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
