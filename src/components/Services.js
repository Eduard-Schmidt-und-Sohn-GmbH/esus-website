import React from "react"

const Services = () => {
  return (
    <section className="bg-gray-100 rounded-lg py-12 px-4" id="offer">
      <div className="container mx-auto px-0">
        <div className="text-center">
          <span className="text-sm font-semibold">Leistungen</span>
          <h2 className="text-3xl text-center mt-2 mb-12 font-heading">
            Wir bieten folgende Fertigungen und Montagen an:
          </h2>
        </div>
        <div className="flex flex-wrap max-w-5xl -mx-4 md:mx-auto -mb-8">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="h-full p-6 bg-white rounded border-t-4 border-blue-500 shadow-md">
              <h3 className="text-2xl mb-3">T&uuml;ren</h3>
              <p>
                Wir stellen Rauch- und Brandschutztüren<br></br>
                von den Marken&nbsp;
                <a
                  className="mt-auto text-blue-700 hover:underline"
                  href="https://www.jansen.com/"
                >
                  Jansen
                </a>
                &nbsp;und&nbsp;
                <a
                  className="mt-auto text-blue-700 hover:underline"
                  href="https://www.forster-profile.ch/"
                >
                  Forster&nbsp;
                </a>
                <br></br>sowie&nbsp;
                <b>T30 und T90 nach DIN 4103 und DIN 18095</b>
                &nbsp;her. Ebenfalls bieten wir die
                <b>Automatisierung von Schiebe- und Drehflügeltüren</b>
                &nbsp;an.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="h-full p-6 bg-white rounded border-t-4 border-blue-500 shadow-md">
              <h3 className="text-2xl mb-3">Tore</h3>
              <p>
                Neben Türen stellen wir auch Tore wie Schiebetore,<br></br>
                Sektionaltore,<br></br>
                Garagentore<br></br>
                her.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="h-full p-6 bg-white rounded border-t-4 border-blue-500 shadow-md">
              <h3 className="text-2xl mb-3">Stahlkonstruktionen</h3>
              <p>
                Verschiedene Arten der Stahl- und Edelstahlkonstruktionen sind
                für uns kein Problem. Wir bearbeiten Bleche, Edelstähle und
                Beschläge.
              </p>
              <p>
                Auf Wunsch können wir Ihnen Maschinenbau und
                Sonderkonstruktionen anbieten.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="h-full p-6 bg-white rounded border-t-4 border-blue-500 shadow-md">
              <h3 className="text-2xl mb-3">Treppen</h3>
              <p>
                Wir bieten Treppen und Treppengeländer in den verschiedensten
                Variationen an.
              </p>
              <p>Schauen Sie sich gerne gleich die Bilder an.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
