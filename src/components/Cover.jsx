import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "../context/useAudio";

export default function Cover() {
  const [open, setOpen] = useState(false);
  const { play } = useAudio();

  const handleOpen = () => {
    play();
    setOpen(true);
  };

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-navy bg-texture flex flex-col justify-center items-center text-cream overflow-hidden"
        >
          {/* dekorasi sudut */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-gold/50" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-gold/50" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-gold/50" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-gold/50" />

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif-elegant text-xs sm:text-sm tracking-[4px] text-gold uppercase mb-6"
          >
            The Wedding Of
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-script text-6xl sm:text-7xl text-gold-light text-center leading-tight px-4"
            style={{ color: "var(--gold-light)" }}
          >
            Khoirul Nisa
            <span className="block text-3xl sm:text-4xl my-1 text-gold">&</span>
            Indra Jaya
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="gold-divider my-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="font-body text-cream/70 text-sm mb-10 tracking-wide"
          >
            Kepada Bapak/Ibu/Saudara/i Tamu Undangan
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            whileHover={{ scale: 1.05, letterSpacing: "3px" }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpen}
            className="border border-gold text-gold px-8 py-3 rounded-full tracking-[2px] text-sm font-serif-elegant uppercase transition-colors hover:bg-gold hover:text-navy"
          >
            Buka Undangan
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
