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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19180.486239986378!2d10.08600277404263!3d53.581793411922405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18b935327ebdb%3A0x6e1585cc4287efb6!2sEduard%20Schmidt%20%26%20Sohn%20GmbH!5e0!3m2!1sde!2sde!4v1651417874051!5m2!1sde!2sde"
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
