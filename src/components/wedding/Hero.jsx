const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { Image } from "@/components/ui/image";

const HERO_IMG =
  "https://media.db.com/images/public/6a60aee7ce74a128d283e2e0/5762f4ce8_generated_16892193.png";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src={HERO_IMG}
          alt="Emma and Lucas on a Mediterranean beach at sunset"
          fittingType="fill"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/60 via-[#0A1128]/25 to-[#0A1128]/85" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p
          className="text-ivory/80 text-[11px] md:text-xs tracking-luxe mb-7"
          style={{ animation: "fade-up 1.4s ease 0.2s both" }}
        >
          BUDEME SA BRAŤ
        </p>

        <h1
          className="font-serif-display text-ivory leading-[0.95] font-light"
          style={{ animation: "fade-up 1.4s ease 0.5s both" }}
        >
          <span className="block text-6xl md:text-8xl lg:text-[120px]" lang="sk">Emma</span>
          <span className="block text-gold text-3xl md:text-5xl my-1 md:my-2 font-light italic">&amp;</span>
          <span className="block text-6xl md:text-8xl lg:text-[120px]">Lucas</span>
        </h1>

        <p
          className="text-ivory/85 text-sm md:text-base tracking-wide-luxe mt-9"
          style={{ animation: "fade-up 1.4s ease 0.9s both" }}
        >
          12. SEPTEMBER 2027
        </p>

        <a
          href="#story"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#story")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-12 group inline-flex flex-col items-center"
          style={{ animation: "fade-up 1.4s ease 1.3s both" }}
        >
          <span className="text-[10px] md:text-xs tracking-luxe text-ivory/70 group-hover:text-gold transition-colors duration-500">
            OBJAVTE NÁŠ PRÍBIEH
          </span>
          <span className="mt-4 animate-pulse-down text-gold">
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="13" height="21" rx="6.5" stroke="currentColor" />
              <rect x="6" y="5" width="2" height="5" rx="1" fill="currentColor" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}