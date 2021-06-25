import React from "react"
import cert3834 from "../documents/cert_iso3834.pdf"
import cert1090 from "../documents/cert_en1090.pdf"

const Contact = () => {
  return (
    <section className="py-12 px-4 text-center" id="aboutus">
      <div className="container mx-auto px-0">
        <div className="w-full max-w-2xl mx-auto">
          <span className="text-sm font-semibold">&Uuml;ber uns</span>
          <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl mt-2 mb-6 leading-tight font-heading text-blue-700">
            Stahl- und Leichtmetallbau in Hamburg
          </h2>
          <p className="mb-8 text-gray-700 leading-relaxed">
            Seit 1855 ist die Eduard Schmidt &amp; Sohn GmbH im Bereich Stahl-
            und Leichtmetallbau sowie RS-Türen, T30-Türen und T90 Türen tätig
            nach DIN 4103 und DIN 18095.
          </p>
          <p className="mb-8 text-black leading-relaxed">
            <b>
              Sie erreichen uns telefonisch oder per Email - wir freuen uns auf
              Sie!
            </b>
          </p>
          <div>
            <a
              className="inline-block py-4 px-8 mr-0 md:mr-6 sm:mr-6 leading-none text-white bg-blue-800 hover:bg-blue-900 rounded shadow"
              href={cert3834}
            >
              Zertifikat: Produktionskontrolle
            </a>
            <a
              className="inline-block py-4 px-8 mt-4 leading-none text-white bg-blue-800 hover:bg-blue-900 rounded shadow"
              href={cert1090}
            >
              Zertifikat: Schweißbetrieb
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
