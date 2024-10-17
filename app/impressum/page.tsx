"use client";

import HeroSection from "@/components/sections/hero-section";
import { getCorrectAssetPath } from "@/utils/image";
import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";
import Link from "next/link";

export default function Impressum() {
  return (
    <ParallaxProvider>
      <HeroSection
        src={getCorrectAssetPath("/assets/hero-image.jpg")}
        fileType="image"
        className="h-[50vh]"
        text={<>Impressum</>}
      />
      <section
        id="impressum"
        className="bg-primary-lightest w-full text-neutral-900"
      >
        <div className="container flex flex-col justify-center md:w-2/3">
          <div className="h-16"></div>
          <h4 className="text-2xl font-bold">Impressum</h4>
          <p>
            <b>
              Informationen und Offenlegung gemäß &sect;5 (1) ECG, &sect; 25
              MedienG, &sect; 63 GewO und &sect; 14 UGB
            </b>
          </p>{" "}
          <p>
            <b>Webseitenbetreiber:</b> Alex
          </p>
          <p>
            <b>Anschrift:</b> unknown, unknown unknown
          </p>
          <p>
            <b>UID-Nr:</b> <br /> <b>Gewerbeaufsichtbehörde:</b> <br />{" "}
            <b>Mitgliedschaften:</b>
          </p>
          <p>
            <b>Kontaktdaten:</b> <br /> Telefon: unknown <br /> Email: unknown{" "}
            <br /> Fax: unknown
          </p>
          <p>
            <b>Anwendbare Rechtsvorschrift:</b> www.ris.bka.gv.at <br />{" "}
            <b>Berufsbezeichnung:</b>
          </p>
          <p>
            <b>Online Streitbeilegung:</b> Verbraucher, welche in Österreich
            oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen
            sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen
            Kauf von Waren oder Dienstleistungen im Rahmen einer
            Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische
            Kommission stellt eine Plattform hierfür bereit:
            https://ec.europa.eu/consumers/odr
          </p>
          <p>
            <b>Urheberrecht:</b> Die Inhalte dieser Webseite unterliegen, soweit
            dies rechtlich möglich ist, diversen Schutzrechten (z.B dem
            Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem
            Material, welche urheberrechtlich untersagt ist, bedarf
            schriftlicher Zustimmung des Webseitenbetreibers.
          </p>
          <p>
            <b>Haftungsausschluss:</b> Trotz sorgfältiger inhaltlicher Kontrolle
            übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für
            die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
            sind ausschließlich deren Betreiber verantwortlich. Sollten Sie
            dennoch auf ausgehende Links aufmerksam werden, welche auf eine
            Webseite mit rechtswidriger Tätigkeit/Information verweisen,
            ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2
            ECG umgehend zu entfernen.
            <br />
            Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit
            größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden derartiger
            Rechtsverletzungen werden wir den betroffenen Inhalt umgehend
            entfernen.
          </p>
          <p>
            Quelle:{" "}
            <b>
              <Link
                href="https://www.fairesrecht.at/kostenlos-impressum-erstellen-generator.php"
                className="text-blue underline"
              >
                Impressum Generator Österreich
              </Link>
            </b>
          </p>
          <div className="h-16"></div>
        </div>
      </section>
    </ParallaxProvider>
  );
}
