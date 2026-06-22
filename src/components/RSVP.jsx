import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../services/supabase";
import Reveal from "./Reveal";

export default function RSVP() {
  const [form, setForm] = useState({
    nama: "",
    kehadiran: "",
    ucapan: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [ucapanList, setUcapanList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    let active = true;

    const loadInitialUcapan = async () => {
      const { data, error } = await supabase
        .from("ucapan_tamu")
        .select("*")
        .order("created_at", { ascending: false });

      if (!active) return;

      if (error) {
        console.error(error);
        setLoadingList(false);
        return;
      }

      setUcapanList(data || []);
      setLoadingList(false);
    };

    loadInitialUcapan();

    // Realtime: setiap ada insert baru di tabel, refresh daftar otomatis
    const channel = supabase
      .channel("ucapan_tamu_changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "ucapan_tamu" },
        (payload) => {
          setUcapanList((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nama || !form.kehadiran || !form.ucapan) {
      alert("Mohon lengkapi semua field");
      return;
    }

    setSubmitting(true);

    const { error } = await supabase.from("ucapan_tamu").insert([
      {
        nama: form.nama,
        kehadiran: form.kehadiran,
        ucapan: form.ucapan,
      },
    ]);

    setSubmitting(false);

    if (error) {
      console.error(error);
      alert("Gagal mengirim, coba lagi ya");
      return;
    }

    setForm({ nama: "", kehadiran: "", ucapan: "" });
  };

  return (
    <section className="py-24 bg-navy-soft bg-texture px-6">
      <Reveal>
        <div className="text-center mb-12">
          <p className="font-serif-elegant text-gold text-xs tracking-[4px] uppercase mb-3">
            Doa &amp; Restu
          </p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-light)" }}>
            Ucapan
          </h2>
        </div>
      </Reveal>

      {/* Form */}
      <Reveal delay={0.1} direction="up">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4 mb-16"
        >
          <input
            type="text"
            placeholder="Nama"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            className="w-full bg-transparent border border-gold/40 text-cream placeholder-cream/40 p-3 rounded-lg font-body focus:outline-none focus:border-gold transition-colors"
          />

          <select
            value={form.kehadiran}
            onChange={(e) => setForm({ ...form, kehadiran: e.target.value })}
            className="w-full bg-navy border border-gold/40 text-cream p-3 rounded-lg font-body focus:outline-none focus:border-gold transition-colors"
          >
            <option value="" className="bg-navy">
              Pilih Kehadiran
            </option>
            <option value="Hadir" className="bg-navy">
              Hadir
            </option>
            <option value="Tidak Hadir" className="bg-navy">
              Tidak Hadir
            </option>
          </select>

          <textarea
            placeholder="Tulis ucapan & doa untuk kedua mempelai..."
            value={form.ucapan}
            onChange={(e) => setForm({ ...form, ucapan: e.target.value })}
            className="w-full bg-transparent border border-gold/40 text-cream placeholder-cream/40 p-3 rounded-lg font-body focus:outline-none focus:border-gold transition-colors"
            rows="4"
          />

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full border border-gold text-gold py-3 rounded-lg tracking-[2px] uppercase text-sm font-serif-elegant transition-colors hover:bg-gold hover:text-navy disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Mengirim..." : "Kirim"}
          </motion.button>
        </form>
      </Reveal>

      {/* Daftar Ucapan */}
      <div className="max-w-xl mx-auto">
        <Reveal>
          <h3 className="font-serif-elegant text-gold text-sm tracking-[3px] uppercase text-center mb-6">
            {ucapanList.length} Ucapan Telah Diterima
          </h3>
        </Reveal>

        <div className="max-h-96 overflow-y-auto space-y-3 pr-1">
          {loadingList && (
            <p className="text-center text-cream/50 font-body text-sm">
              Memuat ucapan...
            </p>
          )}

          {!loadingList && ucapanList.length === 0 && (
            <p className="text-center text-cream/50 font-body text-sm">
              Jadilah yang pertama mengirim ucapan 🤍
            </p>
          )}

          <AnimatePresence initial={false}>
            {ucapanList.map((item) => (
              <motion.div
                key={item.id ?? `${item.nama}-${item.created_at}`}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="border border-gold/20 bg-navy rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-serif-elegant text-gold-light text-sm" style={{ color: "var(--gold-light)" }}>
                    {item.nama}
                  </p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      item.kehadiran === "Hadir"
                        ? "border-green-400/40 text-green-300"
                        : "border-red-400/40 text-red-300"
                    }`}
                  >
                    {item.kehadiran}
                  </span>
                </div>
                <p className="font-body text-cream/75 text-sm leading-relaxed">
                  {item.ucapan}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
