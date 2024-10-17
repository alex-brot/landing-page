"use client";

import HeroSection from "@/components/sections/hero-section";
import TeamSection from "@/components/sections/team-section";
import { getCorrectAssetPath } from "@/utils/image";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Team() {
  return (
    <ParallaxProvider>
      <HeroSection
        src={getCorrectAssetPath("/assets/hero-image.jpg")}
        fileType="image"
        className="h-[50vh]"
        text={<>Unser Team</>}
      />
      <TeamSection />
    </ParallaxProvider>
  );
}
