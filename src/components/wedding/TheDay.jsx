import React from "react";
import { Clock, UtensilsCrossed, Shirt } from "lucide-react";

const CARDS = [
  {
    icon: Clock,
    label: "OBRAD",
    place: "Vila pri oceáne",
    detail: "16:00",
    note: "Sľuby pri západe slnka nad morom.",
  },
  {
    icon: UtensilsCrossed,
    label: "HOSTINA",
    place: "Večera a oslava",
    detail: "19:00",
    note: "Sviečkami osvetlená hostina pri vode.",
  },
  {
    icon: Shirt,
    label: "ODEVNÝ KÓD",
    place: "Elegantný pobrežný formál",
    detail: "",
    note: "Jemné tóny, splývavé látky, bosá elegancia.",
  },
];

export default function TheDay() {
  return (
    <section id="the-day" className="relative bg-obsidian text-ivory py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <p className="reveal text-gold text-[11px] tracking-luxe mb-5">SVADBA</p>
          <h2 className="reveal font-serif-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance">
            Večer zapísaný v <span className="italic text-gold">prílive a svetle</span>
          </h2>
          <div className="reveal gold-rule w-24 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.label}
                className="reveal glass-card rounded-2xl p-10 md:p-12 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-1.5"
              >
                <Icon className="text-gold mb-7" size={26} strokeWidth={1} />
                <p className="text-[11px] tracking-luxe text-ivory/70">{c.label}</p>
                <h3 className="font-serif-display text-3xl md:text-4xl font-light mt-3 mb-4">
                  {c.place}
                </h3>
                {c.detail && (
                  <p className="font-serif-display text-gold text-4xl md:text-5xl font-light">
                    {c.detail}
                  </p>
                )}
                <div className="gold-rule w-12 my-6" />
                <p className="text-ivory/55 leading-[1.8] text-[14px] max-w-[15rem]">{c.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}