import Reveal from "./Reveal";

export default function Event() {
  const events = [
    {
      title: "Akad Nikah",
      day: "KAMIS",
      date: "23",
      month: "JULI",
      year: "2026",
      time: "16.00 WIB - Selesai",
      place: "KEDIAMAN MEMPELAI WANITA,
      address: "Dsn. Nggunungrejo RT. 007 RW. 002 Ds. Cengkong, Kec. Parengan, Kab. Tuban",
    },
    {
      title: "Resepsi",
      day: "JUMAT",
      date: "25",
      month: "JULI",
      year: "2026",
      time: "11.00 WIB - Selesai",
      place: "KEDIAMAN MEMPELAI WANITA",
      address: "Dsn. NggunungRejo RT. 007 RW. 002 Ds. Cengkong, Kec. Parengan, Kab. Tuban",
    },
  ];

  return (
    <section className="py-24 bg-navy bg-texture px-6">
      <Reveal>
        <div className="text-center mb-14">
          <p className="font-serif-elegant text-gold text-xs tracking-[4px] uppercase mb-3">
            Save The Date
          </p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-light)" }}>
            Acara Pernikahan
          </h2>
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <Reveal key={event.title} delay={i * 0.15} direction="up">
            <div className="border border-gold/30 bg-navy-soft rounded-xl p-8 text-center h-full flex flex-col items-center">
              <h3 className="font-script text-3xl mb-7" style={{ color: "var(--gold-light)" }}>
                {event.title}
              </h3>

              <div className="flex items-center w-full mb-6">
                <span className="flex-1 border-t border-gold/30" />
                <span className="font-body text-cream/80 text-sm whitespace-nowrap px-3">
                  {event.day}
                </span>
                <span className="flex-1 border-t border-gold/30" />

                <div className="bg-gold-deep text-navy rounded-lg px-5 py-3 min-w-[88px] mx-3 shadow-lg shadow-black/40 shrink-0">
                  <p className="font-serif-elegant text-3xl leading-none font-semibold">
                    {event.date}
                  </p>
                  <p className="font-body text-[11px] uppercase tracking-wide mt-1">
                    {event.month}
                  </p>
                </div>

                <span className="flex-1 border-t border-gold/30" />
                <span className="font-body text-cream/80 text-sm whitespace-nowrap px-3">
                  {event.year}
                </span>
                <span className="flex-1 border-t border-gold/30" />
              </div>

              <p className="font-body text-gold text-sm mb-6">{event.time}</p>

              <div className="gold-divider mb-5" />

              <p className="font-serif-elegant text-cream text-base mb-1">
                {event.place}
              </p>
              <p className="font-body text-cream/65 text-sm leading-relaxed mb-6">
                {event.address}
              </p>

              <a href="https://maps.app.goo.gl/JKtYdu2uYixnGE598" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-auto inline-block border border-gold text-gold px-6 py-2 rounded-full text-sm tracking-[1px] uppercase transition-colors hover:bg-gold hover:text-navy">
                Buka Maps
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
