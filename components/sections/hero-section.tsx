"use client";

import { usePrefersReducedMotion } from "@/hooks/prefersReducedMotion";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";

function HeroSectionParallax({
  fileType = "image",
  src,
  className,
  text,
}: {
  fileType?: "video" | "image";
  src: string;
  className?: string;
  text: React.ReactNode;
}) {
  return (
    <section id="hero">
      <ParallaxBanner
        layers={[
          {
            children: (
              <>
                {fileType === "video" && (
                  <video
                    controls={false}
                    autoPlay
                    loop
                    muted
                    className="h-full object-cover absolute "
                  >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {fileType === "image" && (
                  <Image
                    src={src}
                    alt="heroimage"
                    fill
                    className="h-full aspect-video absolute"
                    objectFit="cover"
                  />
                )}
              </>
            ),
            translateY: [-60, 0],
            speed: -50,
          },
          {
            speed: -25,
            children: (
              <div className="bg-black bg-opacity-40 w-full  h-full flex items-center absolute top-1/2 -translate-y-1/2">
                <div className="container ">
                  <h1 className="text-primary-light md:text-8xl text-7xl md:w-1/2 font-bold">
                    {text}
                  </h1>
                </div>
              </div>
            ),
          },
        ]}
        className={`wrapper relative w-full h-[80vh] ${className}`}
      />
    </section>
  );
}

function HeroSectionReducedMotion({
  src,
  text,
}: {
  src: string;
  text: React.ReactNode;
}) {
  return (
    <section id="hero" className="">
      <div className="image-wrapper relative w-full">
        <div className="relative h-[38rem]">
          <Image
            src={src}
            alt="heroimage"
            fill
            className="h-full aspect-video absolute"
            objectFit="cover"
          />
        </div>
        <div className="bg-black bg-opacity-40 w-full  h-full absolute top-0 flex items-center">
          <div className="container mt-16">
            <h1 className="text-primary-light text-7xl">
              {text}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSection({
  fileType = "video",
  src,
  className,
  text,
  reducedMotionSrc,
}:
  | {
      fileType?: "video";
      src: string;
      className?: string;
      text: React.ReactNode;
      reducedMotionSrc: string;
    }
  | {
      fileType?: "image";
      src: string;
      className?: string;
      text: React.ReactNode;
      reducedMotionSrc?: string;
    }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return prefersReducedMotion ? (
    <HeroSectionReducedMotion
      src={
        fileType === "image"
          ? src
          : reducedMotionSrc as string
      }
      text={text}
    />
  ) : (
    <HeroSectionParallax
      fileType={fileType}
      src={src}
      className={className}
      text={text}
    />
  );
}

export default HeroSection;
