import Reveal from "./Reveal";

export default function Couple() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="py-24 bg-navy-soft bg-texture px-6">
      <Reveal>
        <div className="text-center mb-16">
          <p className="font-serif-elegant text-gold text-xs tracking-[4px] uppercase mb-3">
            Bismillahirrahmanirrahim
          </p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-light)" }}>
            Mempelai
          </h2>
        </div>
      </Reveal>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-14">
        {/* Wanita */}
        <Reveal direction="left" delay={0.1}>
          <div className="text-center">
            <div className="ornament-frame inline-block mb-6">
              <img
                src={`${base}images/bride.jpg`}
                alt="Khoirul Nisa"
                className="w-48 h-48 rounded-full mx-auto object-cover border-2 border-gold/60 shadow-lg shadow-black/50"
              />
            </div>

            <h3 className="font-script text-3xl text-gold-light" style={{ color: "var(--gold-light)" }}>
              Khoirul Nisa
            </h3>

            <p className="font-body text-cream/80 mt-3 text-sm tracking-wide">
              Putri Pertama dari
            </p>
            <p className="font-body text-cream/80 text-sm tracking-wide">
              Bapak Suryan &amp; Ibu Rantini
            </p>
          </div>
        </Reveal>

        {/* Pria */}
        <Reveal direction="right" delay={0.2}>
          <div className="text-center">
            <div className="ornament-frame inline-block mb-6">
              <img
                src={`${base}images/groom.jpg`}
                alt="Indra Jaya"
                className="w-48 h-48 rounded-full mx-auto object-cover border-2 border-gold/60 shadow-lg shadow-black/50"
              />
            </div>

            <h3 className="font-script text-3xl text-gold-light" style={{ color: "var(--gold-light)" }}>
              Indra Jaya
            </h3>

            <p className="font-body text-cream/80 mt-3 text-sm tracking-wide">
              Putra Pertama dari
            </p>
            <p className="font-body text-cream/80 text-sm tracking-wide">
              Bapak Hasim (Alm.) &amp; Ibu Nunung Setyaningsih
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
