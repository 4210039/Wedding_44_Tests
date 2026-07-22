import React from "react";
import Navigation from "@/components/wedding/Navigation";
import Hero from "@/components/wedding/Hero";
import OurStory from "@/components/wedding/OurStory";
import TheDay from "@/components/wedding/TheDay";
import Venue from "@/components/wedding/Venue";
import Gallery from "@/components/wedding/Gallery";
import Rsvp from "@/components/wedding/Rsvp";
import Closing from "@/components/wedding/Closing";
import useReveal from "@/components/wedding/useReveal";

export default function Home() {
  useReveal();
  return (
    <div className="bg-[#0A1128]">
      <Navigation />
      <Hero />
      <OurStory />
      <TheDay />
      <Venue />
      <Gallery />
      <Rsvp />
      <Closing />
    </div>
  );
}