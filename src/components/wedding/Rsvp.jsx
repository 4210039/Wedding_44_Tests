import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Rsvp() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", guests: "1", attending: "yes", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast({ title: "Prosím, zadajte vaše meno", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: form.attending === "yes" ? "Nemôžeme sa dočkať, že vás uvidíme" : "Ďakujeme, že ste nám dali vedieť",
        description: form.attending === "yes"
          ? "Vaša účasť bola s radosťou prijatá."
          : "Budete nám chýbať, budete v našich srdciach.",
      });
      setForm({ name: "", guests: "1", attending: "yes", message: "" });
    }, 900);
  };

  const inputBase =
    "w-full bg-transparent border-0 border-b border-ivory/20 focus:border-gold transition-colors duration-500 py-3 text-ivory placeholder:text-ivory/35 focus:outline-none font-body text-[15px]";

  return (
    <section id="rsvp" className="relative bg-ivory text-abyss py-28 md:py-40">
      <div className="max-w-2xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="reveal text-gold text-[11px] tracking-luxe mb-5">POTVRDENIE ÚČASTI</p>
          <h2 className="reveal font-serif-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance">
            Pridáte sa k nám pri <span className="italic text-gold">mori?</span>
          </h2>
          <p className="reveal mt-5 text-abyss/55 text-[15px] leading-[1.8]">
            Prosím, odpovedzte do 1. júna 2027.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-12 space-y-8" style={{ backgroundColor: "rgba(249,246,240,0.5)", borderColor: "rgba(184,149,80,0.3)" }}>
          <div>
            <label className="block text-[10px] tracking-luxe text-abyss/55 mb-2">MENO A PRIEZVISKO</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Vaše meno"
              className={`${inputBase} border-abyss/15`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] tracking-luxe text-abyss/55 mb-2">POČET HOSTÍ</label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className={`${inputBase} border-abyss/15`}
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n} className="bg-ivory text-abyss">{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] tracking-luxe text-abyss/55 mb-2">ÚČASŤ</label>
              <select
                name="attending"
                value={form.attending}
                onChange={handleChange}
                className={`${inputBase} border-abyss/15`}
              >
                <option value="yes" className="bg-ivory text-abyss">S radosťou prijímam</option>
                <option value="no" className="bg-ivory text-abyss">S ľútosťou odmietam</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] tracking-luxe text-abyss/55 mb-2">SPRÁVA</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Správa pre snúbencov..."
              className={`${inputBase} border-abyss/15 resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="shimmer-btn w-full py-4 border border-gold text-gold text-[11px] tracking-luxe hover:bg-gold hover:text-ivory transition-colors duration-500 disabled:opacity-60"
          >
            {submitting ? "ODOSIELANIE..." : "POTVRDIŤ ÚČASŤ"}
          </button>
        </form>
      </div>
    </section>
  );
}