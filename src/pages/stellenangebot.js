import React from "react"
import Layout from "../components/layout/Layout"
import Contact from "../components/Contact"

import { Link } from "gatsby"

const Advert = () => (
  <Layout>
    <div className="container mx-auto px-0 pt-20">
      <div className="w-full max-w-2xl mx-auto">
        {/* <span className="text-sm font-semibold">Stellenangebot</span> */}
        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl mt-2 mb-6 leading-tight font-heading text-red-700">
          Monteur gesucht (m, w, d)
        </h2>
        <p className="mb-8 text-gray-700 leading-relaxed">
          Du möchtest <b>keine langen Fernmontage</b>
          , weit entfernt von der Familie, ausführen,
          <br />
          sondern abends gemütlich zu Hause deine Zeit verbringen?
          <br />
          <br />
          <b>Dann bist du bei uns genau richtig!</b>
          <br />
          <br />
          Wir suchen vielleicht genau DICH für unsere Firma als Verstärkung
          <br />
          in dem Bereich der Montage im Raum Hamburg.
          <br />
          Unser Leistungsbild ersteckt sich über Treppen, Geländer und
          Blechverkleidung,
          <br />
          so wie im Bereich Tür- und Toranlagen
          <br />
          Hier fallen regelmäßig Montagen, Reparaturen und Wartungen an.
          <br />
          Wenn genau DU in diesen Bereichen über Erfahrungen verfügst,
          <br />
          dann bewirb dich bei uns.
          <br />
          <br />
          <b>Bewerbungen per Post oder Mail, siehe Kontaktdaten</b>
        </p>
      </div>
      <Contact />
      <div>
        <Link
          className="mt-10 w-auto inline-block px-8 py-4  leading-none text-white text-center bg-blue-800 hover:bg-blue-900 rounded shadow"
          to="/"
        >
          Zurück auf die Hauptseite
        </Link>
      </div>
    </div>
  </Layout>
)

export default Advert
