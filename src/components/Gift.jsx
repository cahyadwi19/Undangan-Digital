import { useState } from "react";
import Reveal from "./Reveal";

export default function Gift() {
  const [copied, setCopied] = useState(false);
  const rekening = "1234567890";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rekening);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard tidak tersedia, abaikan
    }
  };

  return (
    <section className="py-24 bg-navy bg-texture px-6">
      <Reveal>
        <div className="text-center mb-12">
          <p className="font-serif-elegant text-gold text-xs tracking-[4px] uppercase mb-3">
            Tanda Kasih
          </p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-light)" }}>
            Wedding Gift
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.15} direction="up">
        <div className="ornament-frame max-w-md mx-auto border border-gold/30 bg-navy-soft rounded-xl p-8 text-center">
          <p className="font-body text-cream/70 text-sm mb-4 leading-relaxed">
            Doa restu Anda merupakan suatu kebahagiaan bagi kami. Namun jika
            ingin memberi tanda kasih, kami sediakan:
          </p>

          <h3 className="font-serif-elegant text-2xl text-gold-light mb-1" style={{ color: "var(--gold-light)" }}>
            Bank BCA
          </h3>

          <p className="font-body text-cream tracking-[2px] text-lg mt-2">
            {rekening}
          </p>
          <p className="font-body text-cream/70 text-sm">a.n Cahya Dwi</p>

          <button
            onClick={handleCopy}
            className="mt-6 border border-gold text-gold px-6 py-2 rounded-full text-sm tracking-[1px] uppercase transition-colors hover:bg-gold hover:text-navy"
          >
            {copied ? "Tersalin ✓" : "Salin Nomor"}
          </button>
        </div>
      </Reveal>
    </section>
  );
}
