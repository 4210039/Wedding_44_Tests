const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";

const BASE = "https://media.db.com/images/public/6a60aee7ce74a128d283e2e0";
const IMAGES = [
  { src: `${BASE}/288493a0b_generated_image.png`, alt: "Spoločné ráno v kaviarni" },
  { src: `${BASE}/25f25f826_generated_image.png`, alt: "Prechádzka starým mestom" },
  { src: `${BASE}/57b9a1987_generated_image.png`, alt: "Varenie spolu v domácej kuchyni" },
  { src: `${BASE}/b712bdcd8_generated_image.png`, alt: "Cestovanie pri pobreží" },
  { src: `${BASE}/4c9fe5be9_generated_image.png`, alt: "Pokojný večer doma" },
  { src: `${BASE}/caf03a091_generated_image.png`, alt: "Výlet do hôr pri západe slnka" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ivory text-abyss py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="reveal text-gold text-[11px] tracking-luxe mb-5">GALÉRIA</p>
          <h2 className="reveal font-serif-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance">
            Chvíle <span className="italic text-gold">pred večnosťou</span>
          </h2>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className="reveal relative overflow-hidden group break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full block object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}