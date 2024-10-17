"use client";
import HeroSection from "@/components/sections/hero-section";
import ItemsSection from "@/components/sections/items-section";
import { getCorrectAssetPath } from "@/utils/image";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <HeroSection
        src={getCorrectAssetPath("/assets/hero-video.mp4")}
        reducedMotionSrc={getCorrectAssetPath("/assets/hero-image.jpg")}
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
