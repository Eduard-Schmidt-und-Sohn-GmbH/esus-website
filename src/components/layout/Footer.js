import React from "react"
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa"
import { Link } from "gatsby"

// import { vcard } from "../../documents/claus_bruechmann.vcf"

import scrollTo from "gatsby-plugin-smoothscroll"

const Footer = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto px-0" id="aboutus">
        <footer>
          <div className="flex flex-wrap items-center py-4 px-4 border-b">
            <div className="w-full lg:w-2/5 text-center lg:text-left">
              <button
                className="text-xl text-blue-700 font-semibold cursor-pointer"
                onClick={() => scrollTo("#header")}
              >
                Eduard Schmidt &amp; Sohn GmbH
              </button>
            </div>
            <div className="w-full lg:w-1/5 mt-4 lg:mt-0 text-center" />
            <div className="flex justify-center lg:justify-end w-full lg:w-2/5 my-2 lg:my-0">
              <a href="mailto: info@ed-schmidt-metallbau.de">
                <FaEnvelope
                  aria-label="E-Mail senden"
                  className="text-blue-700"
                  style={{ fontSize: "25px" }}
                />
              </a>
              <a className="mx-8" href="tel:+4940665817">
                <FaPhone
                  className="fas fa-phone text-blue-700 "
                  aria-label="Firma anrufen"
                  href="tel:+4940665817"
                  style={{ fontSize: "25px" }}
                />
              </a>
              {/* <a className="mr-8" href={vcard}>
                <FaAddressCard
                  className="far fa-address-card text-blue-700 "
                  style={{ fontSize: "25px" }}
                />
              </a> */}
              <a
                href="https://github.com/ngjoni"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub
                  className="fab fa-github text-blue-700"
                  aria-label="Webentwickler Profil aufrufen"
                  style={{ fontSize: "25px" }}
                />
              </a>
            </div>
          </div>
          <div className="py-4 text-center">
            <span className="block md:inline-block mb-4 md:mb-0 mx-3">
              &copy; 1855-{new Date().getFullYear()} Eduard Schmidt &amp; Sohn
              GmbH
            </span>
            <Link
              className="inline-block mx-4 text-blue-900 hover:text-blue-700"
              to="/datenschutz/"
            >
              Datenschutz
            </Link>
            <Link
              className="inline-block mx-4 text-blue-900 hover:text-blue-700"
              to="/impressum/"
            >
              Impressum
            </Link>

            <a
              className="inline-block mx-4 text-blue-900 hover:text-blue-700"
              href="https://github.com/ngjoni"
              rel="noopener noreferrer"
              target="_blank"
            >
              Entwickler
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
