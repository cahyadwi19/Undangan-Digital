import useCountdown from "../hooks/useCountdown";
import Reveal from "./Reveal";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(
    "2026-12-20 08:00:00"
  );

  const units = [
    { label: "Hari", value: days },
    { label: "Jam", value: hours },
    { label: "Menit", value: minutes },
    { label: "Detik", value: seconds },
  ];

  const base = import.meta.env.BASE_URL;

  return (
    <section
      className="relative py-24 text-center px-4 sm:px-6 bg-cover bg-center"
      style={{ backgroundImage: `url('${base}images/kopi5.jpg')` }}
    >
      {/* overlay gelap supaya teks tetap terbaca */}
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10">
        <Reveal>
          <p className="font-serif-elegant text-gold text-xs tracking-[4px] uppercase mb-3">
            Menanti Hari Bahagia
          </p>
          <h2
            className="font-script text-4xl mb-10"
            style={{ color: "var(--gold-light)" }}
          >
            Hitung Mundur
          </h2>
        </Reveal>

        <div className="grid grid-cols-4 gap-2 sm:gap-5 max-w-md sm:max-w-2xl mx-auto">
          {units.map((unit, i) => (
            <Reveal key={unit.label} delay={i * 0.1} direction="up">
              <div className="ornament-frame border border-gold/40 bg-navy-soft/90 rounded-lg px-2 sm:px-5 py-4 sm:py-6">
                <h3
                  className="font-serif-elegant text-2xl sm:text-4xl"
                  style={{ color: "var(--gold-light)" }}
                >
                  {String(unit.value).padStart(2, "0")}
                </h3>
                <p className="font-body text-cream/70 text-xs sm:text-sm mt-1 tracking-wide">
                  {unit.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
