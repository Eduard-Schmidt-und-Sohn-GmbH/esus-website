import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"

import Header from "../components/layout/Header"
import AboutUs from "../components/AboutUs"
import Services from "../components/Services"
import Contact from "../components/Contact"
import References from "../components/References"

import Map from "../components/Map"

const Home = ({ data }) => {
  return (
    <Layout>
      <Header />
      <AboutUs />
      <Services />
      <References fetchedImages={data} />
      <Contact />
      <Map />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
      edges {
        node {
          id
          base
          childImageSharp {
            thumb: gatsbyImageData(
              width: 300
              height: 300
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
          relativePath
        }
        next {
          base
        }
      }
    }
  }
`

// fluid {
//   ...GatsbyImageSharpFluid_withWebp
//   presentationWidth
//   presentationHeight
// }
