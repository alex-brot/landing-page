"use client";
import HeroSection from "@/components/sections/hero-section";
import ItemsSection from "@/components/sections/items-section";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <HeroSection
        src="/assets/hero-video.mp4"
        reducedMotionSrc="/assets/hero-image.jpg"
        fileType="video"
        text={
          <>
            Frisch gebacken, <br />
            lokal geliebt.
          </>
        }
      />
      <ItemsSection />
    </ParallaxProvider>
  );
}
