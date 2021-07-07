import React from "react"
import { FaEnvelope, FaPhone } from "react-icons/fa"

import { Link } from "gatsby"

import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <div className="bg-body text-body font-body">
      <div className="container">
        <nav className="z-50 fixed w-full p-3 bg-white border-b-2">
          <div className="flex flex-wrap items-center justify-between container mx-auto px-4 ">
            <div className="lg:order-2 w-auto lg:w-2/6 lg:text-center">
              <Link
                className="sm:text-lg text-xs text-blue-700 font-semibold cursor-pointer"
                // onClick={() => {
                //   scrollTo("#header")
                //   setNavbarOpen(false)
                // }}
                to="/"
              >
                Eduard Schmidt &amp; Sohn
              </Link>
            </div>
            <div className="lg:hidden flex">
              <a
                className="sm:mr-4 mr-2"
                href="mailto: info@ed-schmidt-metallbau.de"
              >
                <FaEnvelope
                  aria-label="E-Mail senden"
                  className="block lg:inline-block mt-1 lg:mt-0 text-blue-900 hover:text-blue-700"
                />
              </a>
              <a className="sm:mr-4 mr-2" href="tel:+4940665817">
                <FaPhone
                  className="block lg:inline-block mt-1 lg:mt-0 text-blue-900 hover:text-blue-700"
                  aria-label="Firma anrufen"
                  href="tel:+4940665817"
                />
              </a>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="navbar-burger items-center py-2 px-3 text-blue-700 rounded border border-blue-700"
              >
                <svg
                  className="fill-current h-2 w-2"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className={
                "navbar-menu  lg:order-1 lg:block w-full lg:w-2/6" +
                (navbarOpen ? "" : " hidden")
              }
            >
              <button
                className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700 cursor-pointer"
                onClick={() => {
                  scrollTo("#aboutus")
                  setNavbarOpen(false)
                }}
              >
                &Uuml;ber uns
              </button>
              <button
                className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700 cursor-pointer"
                onClick={() => {
                  scrollTo("#offer")
                  setNavbarOpen(false)
                }}
              >
                Leistungen
              </button>
              <button
                className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700 cursor-pointer"
                onClick={() => {
                  scrollTo("#references")
                  setNavbarOpen(false)
                }}
              >
                Referenzen
              </button>
            </div>
            <div
              className={
                "navbar-menu  lg:order-3 lg:block w-full lg:w-2/6 lg:text-right" +
                (navbarOpen ? "" : " hidden")
              }
            >
              <button
                className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700 cursor-pointer"
                onClick={() => {
                  scrollTo("#contact")
                  setNavbarOpen(false)
                }}
              >
                Kontakt
              </button>
              <button
                className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700 cursor-pointer"
                onClick={() => {
                  scrollTo("#map")
                  setNavbarOpen(false)
                }}
              >
                Karte
              </button>
              <Link
                className="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700 cursor-pointer"
                to="/stellenangebot/"
              >
                Stellenangebote
              </Link>

              <a className="hidden" href="mailto: info@ed-schmidt-metallbau.de">
                <FaEnvelope
                  aria-label="E-Mail senden"
                  className="flex lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700"
                />
              </a>
              <a className="lg:ml-8 hidden " href="tel:+4940665817">
                <FaPhone
                  className="flex lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700"
                  aria-label="Firma anrufen"
                  href="tel:+4940665817"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
