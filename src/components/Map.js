import React from "react"

const Map = () => {
  return (
    <section id="map">
      <div>
        <iframe
          allowFullScreen=""
          aria-hidden="false"
          className="rounded"
          frameBorder="0"
          height="500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2217.699878587617!2d10.085702886331376!3d53.581890916950215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18bf0125ec157%3A0x14ed301c9c89a9d1!2sStephanstra%C3%9Fe%2010%2C%2022047%20Hamburg!5e0!3m2!1sde!2sde!4v1649516136691!5m2!1sde!2sde"
          style={{ border: "0" }}
          // tabIndex="0"
          title="Google Maps"
          width="100%"
        />
      </div>
    </section>
  )
}

export default Map
