import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ 
       backgroundImage: `url('${import.meta.env.BASE_URL}images/kopi5.jpg')`,
          }}
    >
      {/* Overlay gradient gelap + tone navy */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-cream text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif-elegant text-xs sm:text-sm tracking-[5px] text-gold uppercase mb-4"
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-script text-5xl sm:text-7xl"
          style={{ color: "var(--gold-light)" }}
        >
          Khoirul Nisa
        </motion.h1>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-script text-3xl sm:text-4xl my-2 text-gold"
        >
          &amp;
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-script text-5xl sm:text-7xl"
          style={{ color: "var(--gold-light)" }}
        >
          Indra Jaya
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="gold-divider my-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-lg tracking-wide text-cream/90"
        >
          27 Juli 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-10 text-gold text-xs tracking-[3px] uppercase"
        >
          Scroll ↓
        </motion.div>
      </div>
    </section>
  );
}
