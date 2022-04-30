import React from "react"
import Layout from "../components/layout/Layout"
import { Link } from "gatsby"

const Impressum = () => (
  <Layout>
    <div className="container mx-auto mt-8 cursor-pointer">
      <Link
        className="w-auto inline-block px-8 py-4 mt-auto leading-none text-white text-center bg-blue-800 hover:bg-blue-900 rounded shadow"
        to="/"
      >
        Zurück auf die Hauptseite
        <i className="ml-4 fas fa-phone-alt" style={{ fontSize: "18px" }} />
      </Link>
    </div>
    <div className="text-left container mx-auto px-0">
      <h1>Impressum</h1>
      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Eduard Schmidt &amp; Sohn GmbH
        <br />
        Stephanstraße 10-12
        <br />
        22047 Hamburg
      </p>
      <p>
        Handelsregister: HRB 76965
        <br />
        Registergericht: Amtsgericht Hamburg
      </p>
      <p>
        <strong>Vertreten durch:</strong>
        <br />
        Claus Br&uuml;chmann
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: 040 / 665 817
        <br />
        Telefax: 040 / 666 657
        <br />
        E-Mail: info@ed-schmidt-metallbau.de
      </p>
      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
        Umsatzsteuergesetz:
        <br />
        DE 212435161
      </p>
      <h2>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <p>
        Quelle:
        <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
    </div>
  </Layout>
)
export default Impressum
