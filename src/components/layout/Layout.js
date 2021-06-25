import React from "react"

import Seo from "./SEO"
import Navbar from "./Navbar"
import Footer from "./Footer"

import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Navbar />

      <main className="text-center">{children}</main>
      <Footer />
      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Akzeptieren"
        declineButtonText="Ablehnen"
        cookieName="gatsby-gdpr-google-analytics"
      >
        Diese Internetseite verwendet Cookies und Google Analytics für die
        Analyse und Statistik. Wir nutzen Cookies zu unterschiedlichen Zwecken,
        unter anderem zur Analyse . Durch die weitere Nutzung der Website
        stimmen Sie der Verwendung zu. (+Extra Button zur Datenschutzsseite)
      </CookieConsent>
    </>
  )
}

export default Layout
