import React from "react"
import { FaLocationArrow, FaMobileAlt, FaClock } from "react-icons/fa"

const AboutUs = () => {
  return (
    <section className="bg-gray-100 rounded-lg py-12 px-4" id="contact">
      <div className="container mx-auto px-0" id="aboutus">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold">Kontaktdaten</span>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-6">
          <div className="lg:w-1/3 md:w-1/3 w-full px-4 mb-6">
            <div className="text-center ">
              <FaLocationArrow
                className="mx-auto text-blue-700"
                style={{ fontSize: "48px" }}
              />
              <h3 className="text-xl my-2 font-heading">Anfahrt</h3>
              <p className="inline-block leading-relaxed font-bold">
                Eduard Schmidt &amp; Sohn GmbH
              </p>
              <p className="leading-relaxed">Walddörferstraße 382</p>
              <p className="leading-relaxed">22047 Hamburg</p>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full px-4 mb-6">
            <div className="text-center">
              <FaMobileAlt
                className="mx-auto text-blue-700"
                style={{ fontSize: "48px" }}
              />
              <h3 className="text-xl my-2 font-heading">Kontakt</h3>
              <div>
                <p className="inline-block leading-relaxed font-bold">
                  Tel.: 040 / 665 817
                </p>
                <p className="leading-relaxed">Fax: 040 / 666 657</p>
                <p className="leading-relaxed">
                  Mail: info@ed-schmidt-metallbau.de
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 w-full px-4 mb-6">
            <div className="text-center">
              <FaClock
                className="mx-auto text-blue-700"
                style={{ fontSize: "48px" }}
              />
              <h3 className="text-xl my-2 font-heading">Öffnungszeiten</h3>
              <p className="inline-block leading-relaxed font-bold">
                Montag - Freitag:
              </p>
              <p className="leading-relaxed">07:00 - 17:00</p>
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          <h2 className="text-3xl text-center mt-8 font-heading">
            Wir freuen uns auf ihren Anruf
          </h2>
        </div> */}
      </div>
    </section>
  )
}

export default AboutUs
