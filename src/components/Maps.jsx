import Reveal from "./Reveal";

export default function Maps() {
  return (
    <section className="py-24 bg-navy-soft bg-texture px-6">
      <Reveal>
        <div className="text-center mb-10">
          <p className="font-serif-elegant text-gold text-xs tracking-[4px] uppercase mb-3">
            Petunjuk Arah
          </p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-light)" }}>
            Lokasi Acara
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.15} direction="up">
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-gold/30">
          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.4737275197232!2d111.8400264170412!3d-7.085285444203123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7779db9df93265%3A0xbb4edd0b58031a5d!2sGunung%20rejo!5e1!3m2!1sen!2sid!4v1781269080122!5m2!1sen!2sid"
            width="100%"
            height="420"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}
