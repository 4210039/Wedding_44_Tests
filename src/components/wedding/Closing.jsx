const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Image } from "@/components/ui/image";

const CLOSING_IMG =
  "https://media.db.com/images/public/6a60aee7ce74a128d283e2e0/20f11addc_generated_40ff0593.png";

export default function Closing() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={CLOSING_IMG}
          alt="Emma and Lucas relaxing near the sea after sunset"
          fittingType="fill"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/40 via-[#0A1128]/30 to-[#0A1128]/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h2 className="reveal font-serif-display text-ivory text-6xl md:text-8xl lg:text-9xl font-light leading-[1.02] text-balance">
          Večnosť začína <span className="italic text-gold">tu.</span>
        </h2>
        <div className="reveal gold-rule w-24 mx-auto mt-10" />
        <p className="reveal mt-8 text-ivory/85 text-sm md:text-base tracking-wide-luxe">
          EMMA &amp; LUCAS · 12. SEPTEMBER 2027
        </p>
      </div>

      <footer className="absolute bottom-0 inset-x-0 z-10 py-7 text-center">
        <p className="text-[10px] tracking-luxe text-ivory/40">
          S LÁSKOU A VĎAKOU · COASTAL NOCTURNE
        </p>
      </footer>
    </section>
  );
}