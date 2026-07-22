const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Image } from "@/components/ui/image";
import { MapPin, Plane, BedDouble } from "lucide-react";

const VENUE_IMG =
  "https://media.db.com/images/public/6a60aee7ce74a128d283e2e0/6259930a8_generated_6733391b.png";

export default function Venue() {
  return (
    <section id="venue" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={VENUE_IMG}
          alt="Luxury beach villa overlooking the ocean"
          fittingType="fill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1128]/70" />
      </div>

      <div className="relative z-10 text-center px-6 py-28 max-w-4xl mx-auto">
        <p className="reveal text-gold text-[11px] tracking-luxe mb-6">MIESTO</p>
        <h2 className="reveal font-serif-display text-ivory text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-balance">
          Kde začína naša <span className="italic text-gold">večnosť</span>
        </h2>
        <div className="reveal gold-rule w-24 mx-auto mt-8" />

        <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-left max-w-3xl mx-auto">
          <div className="flex flex-col items-start">
            <MapPin className="text-gold mb-3" size={20} strokeWidth={1} />
            <p className="text-[10px] tracking-luxe text-ivory/60 mb-1">LOKALITA</p>
            <p className="font-serif-display text-xl text-ivory leading-snug">Villa Marina,<br />Amalfi, Taliansko</p>
          </div>
          <div className="flex flex-col items-start">
            <Plane className="text-gold mb-3" size={20} strokeWidth={1} />
            <p className="text-[10px] tracking-luxe text-ivory/60 mb-1">CESTOVANIE</p>
            <p className="font-serif-display text-xl text-ivory leading-snug">Letisko Neapol<br />Transfer zabezpečený</p>
          </div>
          <div className="flex flex-col items-start">
            <BedDouble className="text-gold mb-3" size={20} strokeWidth={1} />
            <p className="text-[10px] tracking-luxe text-ivory/60 mb-1">UBYTOVANIE</p>
            <p className="font-serif-display text-xl text-ivory leading-snug">Pobrežné vily<br />Vyhradené pre hostí</p>
          </div>
        </div>
      </div>
    </section>
  );
}