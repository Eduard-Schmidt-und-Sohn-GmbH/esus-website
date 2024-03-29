import React from "react"
import Layout from "../components/layout/Layout"
import notFoundImage from "../images/not-found-image.svg"

const Error = () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <img className="p-4" src={notFoundImage} alt="Page not found" />
      </main>
    </Layout>
  )
}

export default Error
