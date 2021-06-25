import * as React from "react"
import Gallery from "@browniebroke/gatsby-image-gallery"

// Kann man machen
// const CustomWrapperStyle = ({ children, onClick }) => (
//   <div className="px-2 mb-4" onClick={onClick}>
//     {children}
//   </div>
// )

const References = ({ fetchedImages }) => {
  const category = props => (
    <div>
      <h3 className="underline text-3xl text-center mt-2 mb-12 font-heading">
        {props.title}
      </h3>
      <Gallery
        images={fetchedImages.allFile.edges
          .filter(edge => {
            return edge.node.relativePath.includes(props.search)
          })
          .map(edge => {
            return edge.node.childImageSharp
          })}
      />
    </div>
  )

  return (
    <section className="py-12 px-4" id="references">
      <div className="container mx-auto">
        <div className="text-center">
          <span className="text-sm font-semibold">Referenzen</span>
          {category({ title: "Vordach", search: "ASK" })}
          {category({ title: "Geländer", search: "Geländer" })}
          {category({ title: "Aufzug", search: "altona" })}
          {category({ title: "Sonstiges", search: "sonstige" })}
        </div>
      </div>
    </section>
  )
}

export default References
