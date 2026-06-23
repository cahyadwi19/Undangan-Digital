import Reveal from "./Reveal";

export default function Event() {
  const events = [
    {
      title: "Akad Nikah",
      day: "Minggu",
      date: "20",
      month: "Desember",
      year: "2026",
      time: "08.00 WIB - Selesai",
      place: "Kediaman Mempelai Wanita",
      address:
        "Perumahan Mutiara Sampurna, Desa Jayasampurna, Kabupaten Bekasi, Jawa Barat",
    },
    {
      title: "Resepsi",
      day: "Minggu",
      date: "20",
      month: "Desember",
      year: "2026",
      time: "11.00 WIB - Selesai",
      place: "Gedung ABC Surabaya",
      address: "Jl. Contoh Alamat No. 1, Surabaya, Jawa Timur",
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

              {/* Baris tanggal: hari - kotak tanggal - tahun */}
              <div className="flex items-center justify-center gap-4 w-full mb-2">
                <div className="flex-1 border-t border-gold/30" />
                <span className="font-body text-cream/80 text-sm whitespace-nowrap">
                  {event.day}
                </span>
              </div>

              <div className="flex items-center justify-center gap-4 w-full">
                <span className="flex-1 border-t border-gold/30" />

                <div className="bg-gold text-navy rounded-lg px-5 py-3 min-w-[88px] shadow-lg shadow-black/30">
                  <p className="font-serif-elegant text-3xl leading-none font-semibold">
                    {event.date}
                  </p>
                  <p className="font-body text-xs uppercase tracking-wide mt-1">
                    {event.month}
                  </p>
                </div>

                <span className="flex-1 border-t border-gold/30" />
              </div>

              <div className="flex items-center justify-center gap-4 w-full mt-2 mb-5">
                <div className="flex-1" />
                <span className="font-body text-cream/80 text-sm whitespace-nowrap">
                  {event.year}
                </span>
              </div>

              <p className="font-body text-gold text-sm mb-6">{event.time}</p>

              <div className="gold-divider mb-5" />

              <p className="font-serif-elegant text-cream text-base mb-1">
                {event.place}
              </p>
              <p className="font-body text-cream/65 text-sm leading-relaxed mb-6">
                {event.address}
              </p>

              
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
