import React from "react";
import { InstagramIcon } from "hugeicons-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="flex flex-col md:flex-row md:container py-12 justify-between gap-12 md:gap-4">
        <div className="contact container md:p-0 mt-4 md:w-5/12 sm:7/12">
          <div className="md:w-5/6 flex flex-col gap-4">
            <div className="">
              <h3 className="text-5xl mb-2 text-primary-lightest font-serif">
                Kontakt
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien.
              </p>
            </div>
            <div className="socials flex gap-2">
              <Link
                href="#"
                className="bg-primary-lightest p-1 hover:bg-neutral-900"
              >
                <InstagramIcon
                  size={38}
                  className="text-neutral-800 hover:text-primary-light"
                />
              </Link>
            </div>
            <div>
              <p>
                <Link href="tel:+436641234567" className="hover:underline">
                  +43 664 123 45 67
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:alexbrot@gmail.com"
                  className="hover:underline"
                >
                  alexbrot@gmail.com
                </Link>
              </p>
            </div>

            <div className="impressum hidden md:flex gap-2">
              <p>
                <Link href="/impressum" className="underline">
                  Impressum
                </Link>
              </p>
              <p>
                <Link href="/datenschutz" className="underline">
                  Datenschutz
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="map flex-grow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29844.776134952666!2d13.91694375346868!3d47.90243476775643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773e2fdb88c7087%3A0xaea76be0d4bcd741!2sScharnstein!5e0!3m2!1sde!2sat!4v1729160951545!5m2!1sde!2sat"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-96"
          ></iframe>
        </div>
        <div className="impressum container md:hidden flex gap-2">
          <p>
            <Link href="/impressum" className="underline">
              Impressum
            </Link>
          </p>
          <p>
            <Link href="/datenschutz" className="underline">
              Datenschutz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
