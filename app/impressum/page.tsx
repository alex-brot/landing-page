import HeroSection from "@/components/sections/hero-section";
import { getCorrectAssetPath } from "@/utils/image";
import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";

export default function Impressum() {
  return (
    <ParallaxProvider>
      <HeroSection
        src={getCorrectAssetPath("/assets/hero-image.jpg")}
        fileType="image"
        className="h-[50vh]"
        text={<>Impressum</>}
      />
      <section id="impressum" className="bg-primary-lightest text-neutral-900">
        <div className="container flex flex-col justify-center"></div>
      </section>
    </ParallaxProvider>
  );
}
