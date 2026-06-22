import Reveal from "./Reveal";

export default function Event() {
  const events = [
    {
      title: "Akad Nikah",
      day: "Minggu",
      date: "20 Desember 2026",
      time: "08.00 WIB",
      place: "Kediaman Mempelai Wanita",
    },
    {
      title: "Resepsi",
      day: "Minggu",
      date: "20 Desember 2026",
      time: "11.00 WIB",
      place: "Gedung ABC Surabaya",
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
            <div className="ornament-frame border border-gold/30 bg-navy-soft rounded-xl p-8 text-center h-full flex flex-col items-center">
              <h3 className="font-script text-3xl mb-4" style={{ color: "var(--gold-light)" }}>
                {event.title}
              </h3>

              <p className="font-body text-cream/85">{event.day}</p>
              <p className="font-body text-cream/85">{event.date}</p>
              <p className="font-body text-gold mt-1">{event.time}</p>

              <div className="gold-divider my-5" />

              <p className="font-body text-cream/75 mb-6">{event.place}</p>

              <a
                href="https://maps.app.goo.gl/JKtYdu2uYixnGE598"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block border border-gold text-gold px-6 py-2 rounded-full text-sm tracking-[1px] uppercase transition-colors hover:bg-gold hover:text-navy"
              >
                Buka Maps
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
