const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Image } from "@/components/ui/image";

const PORTRAIT =
  "https://media.db.com/images/public/6a60aee7ce74a128d283e2e0/dae3732a1_generated_22698fde.png";

const TIMELINE = [
  { year: "2019", title: "Prvé stretnutie", text: "Pohľad cez plnú miestnosť. Nič už nikdy nebolo rovnaké." },
  { year: "2023", title: "Začína sa dobrodružstvo", text: "Pobrežia, cudzie mestá a sľub šepkaný pri mori." },
  { year: "2027", title: "Náš svadobný deň", text: "Dva životy, jeden horizont — večnosť začína." },
];

export default function OurStory() {
  return (
    <section id="story" className="relative bg-ivory text-abyss py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left: text */}
        <div className="order-2 lg:order-1">
          <p className="reveal text-gold text-[11px] tracking-luxe mb-6">NÁŠ PRÍBIEH</p>
          <h2 className="reveal font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] font-light text-balance">
            Dvaja ľudia.
            <br />
            Jedna cesta.
            <br />
            <span className="italic text-gold">Začiatok celého života.</span>
          </h2>

          <div className="reveal mt-14 space-y-10 max-w-md">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative pl-8 border-l border-gold/40">
                <span className="absolute -left-[2px] top-1 w-1.5 h-1.5 rounded-full bg-gold" />
                <p className="font-serif-display text-3xl text-gold leading-none">{t.year}</p>
                <p className="mt-2 text-xs tracking-wide-luxe text-abyss/70 uppercase">{t.title}</p>
                <p className="mt-2 text-abyss/65 leading-[1.8] text-[15px]">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div className="order-1 lg:order-2 relative">
          <div className="reveal relative aspect-[3/4] w-full max-w-[460px] mx-auto overflow-hidden">
            <Image
              src={PORTRAIT}
              alt="Emma and Lucas portrait"
              fittingType="fill"
              className="w-full h-full object-cover transition-transform duration-[1.6s] hover:scale-105"
            />
          </div>
          <p className="reveal mt-5 text-center text-[10px] tracking-luxe text-abyss/40">
            PORTOVENERE · STREDOZEMNÉ POBREŽIE
          </p>
        </div>
      </div>
    </section>
  );
}