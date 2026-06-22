import Reveal from "./Reveal";

export default function Story() {
  const stories = [
    {
      year: "2016",
      title: "Pertama Bertemu",
      desc: "Awal perkenalan kami yang sederhana, menjadi awal dari babak baru dalam hidup kami. Ditahun ini, semesta mempertemukan dua hati untuk mulai merangkai kisah bersama. Jarak dan waktu menjadi ujian, namun keyakinan menembus segala sekat hingga membawa kita melangkah semakin dekat.",
    },
    {
      year: "2022",
      title: "Lamaran",
      desc: "Menepis segala ragu yang pernah ada, kami memantapkan hati. Di momen ini, janji diucapkan sebagai jembatan untuk mengikat dua keluarga dalam restu dan ketulusan.",
    },
    {
      year: "2026",
      title: "Pernikahan",
      desc: "Hari bahagia kami, langkah kami sampai pada tujuan akhir dari penantian. Kami bersiap mengikat janji suci di hadapan Allah SWT dalam ibadah terpanjang kami.",
    },
  ];

  return (
    <section className="py-24 bg-navy bg-texture px-6">
      <Reveal>
        <div className="text-center mb-16">
          <p className="font-serif-elegant text-gold text-xs tracking-[4px] uppercase mb-3">
            Perjalanan Kami
          </p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-light)" }}>
            Love Story
          </h2>
        </div>
      </Reveal>

      <div className="max-w-2xl mx-auto relative">
        {/* garis vertikal */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gold/30" />

        {stories.map((item, index) => (
          <Reveal key={item.year} delay={index * 0.15} direction="left" className="mb-12 relative pl-8">
            <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-gold border-2 border-navy" />
            <h3 className="font-serif-elegant text-gold text-sm tracking-[2px] mb-1">
              {item.year}
            </h3>
            <h4 className="font-script text-2xl mb-2" style={{ color: "var(--gold-light)" }}>
              {item.title}
            </h4>
            <p className="font-body text-cream/75 leading-relaxed">
              {item.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
