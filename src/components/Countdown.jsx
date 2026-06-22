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

  return (
    <section className="py-24 bg-navy bg-texture text-center px-6">
      <Reveal>
        <p className="font-serif-elegant text-gold text-xs tracking-[4px] uppercase mb-3">
          Menanti Hari Bahagia
        </p>
        <h2 className="font-script text-4xl text-gold-light mb-10" style={{ color: "var(--gold-light)" }}>
          Hitung Mundur
        </h2>
      </Reveal>

      <div className="flex justify-center gap-3 sm:gap-6 flex-wrap max-w-2xl mx-auto">
        {units.map((unit, i) => (
          <Reveal key={unit.label} delay={i * 0.1} direction="up">
            <div className="ornament-frame border border-gold/40 bg-navy-soft rounded-lg px-5 py-6 w-24 sm:w-28">
              <h3 className="font-serif-elegant text-3xl sm:text-4xl text-gold-light" style={{ color: "var(--gold-light)" }}>
                {String(unit.value).padStart(2, "0")}
              </h3>
              <p className="font-body text-cream/70 text-sm mt-1 tracking-wide">
                {unit.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
