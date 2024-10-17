"use client";

import HeroSection from "@/components/sections/hero-section";
import { getCorrectAssetPath } from "@/utils/image";
import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";
import Link from "next/link";

export default function Datenschutz() {
  return (
    <ParallaxProvider>
      <HeroSection
        src={getCorrectAssetPath("/assets/hero-image.jpg")}
        fileType="image"
        className="h-[50vh]"
        text={<>Datenschutz</>}
      />
      <section
        id="datenschutz"
        className="bg-primary-lightest text-neutral-900"
      >
        <div className="container flex flex-col justify-center">
          <div className="h-16"></div>
          <h3 className="text-2xl font-bold">
            {" "}
            Erklärung zur Informationspflicht{" "}
          </h3>
          <br />{" "}
          <p align="center">
            <strong>Datenschutzerklärung</strong>
          </p>{" "}
          <p>
            {" "}
            In folgender Datenschutzerklärung informieren wir Sie über die
            wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer
            Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf
            Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung,
            Telekommunikationsgesetz 2003).{" "}
          </p>{" "}
          <p>
            {" "}
            Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese
            besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der
            Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein
            berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.{" "}
          </p>{" "}
          <h5 className="text-xl font-bold"> Kontakt mit uns</h5>
          <p>
            <p>
              Wenn Sie uns, entweder über unser Kontaktformular auf unserer
              Webseite, oder per Email kontaktieren, dann werden die von Ihnen
              an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder
              für den Fall von weiteren Anschlussfragen für sechs Monate bei uns
              gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe
              Ihrer übermittelten Daten.
            </p>
            <h5 className="text-xl font-bold"> Datenspeicherung </h5>{" "}
            <p>
              {" "}
              Im Rahmen der Erleichterung des Einkaufsvorganges und zur späteren
              Vertragsabwicklung werden vom Webshop-Betreiber im Rahmen von
              Cookies die IP-Adresse des Anschlussinhabers gespeichert, ebenso
              wie .{" "}
            </p>{" "}
            <p>
              {" "}
              Für die Vertragsabwicklung werden auch folgende Daten bei uns
              gespeichert:
              <br /> .{" "}
            </p>
            <p>
              {" "}
              Die von Ihnen bereitgestellten Daten sind für die
              Vertragserfüllung und zur Durchführung vorvertraglicher Maßnahmen
              erforderlich. Ein Vertragsabschluss ohne dieser Daten ist nicht
              möglich. Eine Übermittlung der erhobenen Daten an Dritte erfolgt
              nicht, mit Ausnahme der Übermittlung von Zahlungsdaten
              (Kreditkartendaten) an die abwickelnden
              Bankinstitute/Zahlungsdienstleister zum Zwecke der Abbuchung des
              Einkaufspreises, an das von uns Beauftragte Versandunternehmen
              (Transportunternehmen), welches mit der Zustellung der Ware
              beauftragt ist und unseren Steuerberater zur Erfüllung unserer
              steuerrechtlichen Verpflichtungen.{" "}
            </p>{" "}
            <p>
              Sollten Sie den Einkaufsvorgang abbrechen, werden diese bei uns
              gespeicherten Daten gelöscht. Solle ein Vertragsabschluss zustande
              kommen, werden sämtliche Daten, resultierend aus dem
              Vertragsverhältnis, bis zum Ablauf der steuerrechtlichen
              Aufbewahrungsfirst (7 Jahre) gespeichert. Der übermittelte Name,
              die Anschrift, gekaufte Waren und Kaufdatum werden darüber hinaus
              bis zum Ablauf der Produkthaftung (10 Jahre) gespeichert. Die
              Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen
              des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit a (Einwilligung)
              und/oder lit b (notwendig zur Vertragserfüllung) der DSGVO.
            </p>
            <h5 className="text-xl font-bold"> Cookies</h5>
            <p>
              Unsere Website verwendet so genannte Cookies. Dabei handelt es
              sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem
              Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir
              nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten.
              Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie
              diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten
              Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können
              Sie Ihren Browser so einrichten, dass er Sie über das Setzen von
              Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei
              der Deaktivierung von Cookies kann die Funktionalität unserer
              Website eingeschränkt sein.
            </p>
            <h5 className="text-xl font-bold"> Google Maps</h5>
            <p>
              {" "}
              Unsere Website verwendet Funktionen des Webkartendienstes „Google
              Maps“. Der Dienstanbieter dieser Funktion ist:{" "}
            </p>
            <ul className="list-inside list-disc">
              <li>
                {" "}
                Google Ireland Limited Gordon House, Barrow Street Dublin 4.
                Ireland. Tel: +353 1 543 1000
              </li>
            </ul>
            <p>
              {" "}
              Im Zuge der Nutzung von Google Maps ist es notwendig Ihre
              IP-Adresse zu speichern und zu verarbeiten. Google überträgt in
              der Regel an einen Server in den USA und speichert die Daten dort.
              Die Verarbeitung geschieht durch den Diensteanbieter (oben
              genannt), der Betreiber dieser Homepage hat keinen Einfluss auf
              die Übertragung der Daten.{" "}
            </p>{" "}
            <p>
              {" "}
              Die Datenverarbeitung erfolgt auf Basis der gesetzlichen
              Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit f
              (berechtigtes Interesse) der DSGVO. Die Nutzung von Google Maps
              erhöht die Auffindbarkeit der Orte, welche auf unserer Webseite
              bereitgestellt werden.{" "}
            </p>
            <p>
              {" "}
              Weitere Informationen über den Umgang mit Nutzerdaten des
              Diensteanbieters „Google“ können Sie der Datenschutzerklärung
              entnehmen:{" "}
            </p>{" "}
            <p>
              <Link
                className="text-blue underline"
                href="https://policies.google.com/privacy?hl=de"
              >
                {" "}
                https://policies.google.com/privacy?hl=de{" "}
              </Link>{" "}
              .
            </p>{" "}
            <p>
              {" "}
              Google verarbeitet die Daten auch in den USA, hat sich jedoch dem{" "}
              <br /> EU-US Privacy-Shield unterworfen.{" "}
            </p>{" "}
            <p>
              <Link
                className="text-blue underline"
                href="https://www.privacyshield.gov/EU-US-Framework"
              >
                {" "}
                https://www.privacyshield.gov/EU-US-Framework{" "}
              </Link>
            </p>
            <h5 className="text-xl font-bold"> Google Fonts</h5>
            <p>
              {" "}
              Unsere Website verwendet Schriftarten von „Google Fonts“. Der
              Dienstanbieter dieser Funktion ist:{" "}
            </p>
            <ul className="list-inside list-disc">
              <li>
                {" "}
                Google Ireland Limited Gordon House, Barrow Street Dublin 4.
                Ireland
              </li>
            </ul>
            <p> Tel: +353 1 543 1000 </p>{" "}
            <p>
              {" "}
              Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und
              speichert diese in den Cache. Da Sie, als Besucher der Webseite,
              Daten des Dienstanbieters empfangen kann Google unter Umständen
              Cookies auf Ihrem Rechner setzen oder analysieren.{" "}
            </p>
            <p>
              {" "}
              Die Nutzung von „Google-Fonts“ dient der Optimierung unserer
              Dienstleistung und der einheitlichen Darstellung von Inhalten.
              Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1
              lit. f DSGVO dar.{" "}
            </p>{" "}
            <p>
              {" "}
              Weitere Informationen zu Google Fonts erhalten Sie unter folgendem
              Link:{" "}
            </p>
            <ul className="list-inside list-disc">
              <li>
                <Link
                  className="text-blue underline"
                  href="https://developers.google.com/fonts/faq"
                >
                  {" "}
                  https://developers.google.com/fonts/faq{" "}
                </Link>
              </li>
            </ul>
            <p>
              {" "}
              Weitere Informationen über den Umgang mit Nutzerdaten von Google
              können Sie der Datenschutzerklärung entnehmen:{" "}
            </p>
            <ul className="list-inside list-disc">
              <li>
                <Link
                  className="text-blue underline"
                  href="https://policies.google.com/privacy?hl=de"
                >
                  {" "}
                  https://policies.google.com/privacy?hl=de{" "}
                </Link>{" "}
                .
              </li>
            </ul>
            <p>
              {" "}
              Google verarbeitet die Daten auch in den USA, hat sich jedoch dem{" "}
              <br /> EU-US Privacy-Shield unterworfen.{" "}
            </p>{" "}
            <p>
              <Link
                className="text-blue underline"
                href="https://www.privacyshield.gov/EU-US-Framework"
              >
                {" "}
                https://www.privacyshield.gov/EU-US-Framework{" "}
              </Link>
            </p>
            <h5 className="text-xl font-bold"> Server-Log Files </h5>{" "}
            <p>
              {" "}
              Diese Webseite und der damit verbundene Provider erhebt im Zuge
              der Webseitennutzung automatisch Informationen im Rahmen
              sogenannter „Server-Log Files“. Dies betrifft insbesondere:{" "}
            </p>
            <ul className="list-inside list-disc">
              <li> IP-Adresse oder Hostname</li>
              <li> den verwendeten Browser</li>
              <li>
                {" "}
                Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit
              </li>
              <li> aufgerufene Seiten der Webseite</li>
              <li> Spracheinstellungen und Betriebssystem</li>
              <li>
                {" "}
                „Leaving-Page“ (auf welcher URL hat der Benutzer die Webseite
                verlassen)
              </li>
              <li> ISP (Internet Service Provider)</li>
            </ul>
            <p>
              {" "}
              Diese erhobenen Informationen werden nicht personenbezogen
              verarbeitet oder mit personenbezogenen Daten in Verbindung
              gebracht.{" "}
            </p>{" "}
            <p>
              {" "}
              Der Webseitenbetreiber behält es sich vor, im Falle von
              Bekanntwerden rechtswidriger Tätigkeiten, diese Daten auszuwerten
              oder zu überprüfen.{" "}
            </p>
            <h5 className="text-xl font-bold">
              {" "}
              Ihre Rechte als Betroffener
            </h5>{" "}
            <p>
              Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns
              gespeichert sind grundsätzlich ein Recht auf:
            </p>
            <ul className="list-inside list-disc">
              <li>Auskunft</li>
              <li>Löschung der Daten</li>
              <li>Berichtigung der Daten</li>
              <li>Übertragbarkeit der Daten</li>
              <li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
              <li>Einschränkung</li>
            </ul>
            <p>
              Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten
              Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie
              die Möglichkeit sich bei uns (unknown) oder der Datenschutzbehörde
              zu beschweren.
            </p>
            <h5 className="text-xl font-bold">
              {" "}
              Sie erreichen uns unter folgenden Kontaktdaten:
            </h5>
            <p>
              <b>Webseitenbetreiber:</b> Alex
              <br /> <b>Telefonnummer:</b> unknown
              <br /> <b>Email:</b> unknown
            </p>
            <p>
              Quelle:{" "}
              <b>
                <Link
                  className="text-blue underline"
                  href="https://www.fairesrecht.at/kostenlos-datenschutzerklaerung-erstellen-generator.php"
                >
                  Datenschutzgenerator Österreich DSGVO
                </Link>
              </b>
            </p>
          </p>
        </div>
      </section>
    </ParallaxProvider>
  );
}
