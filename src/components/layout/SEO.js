import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/useSiteMetadata"

const SEO = () => {
  const {
    title,
    description,
    keywords,
    icbm,
    geo: { position, placename },
    url,
  } = useSiteMetadata()

  return (
    <Helmet>
      <html lang="de" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta content={keywords} name="keywords" />
      <meta content={icbm} name="icbm" />
      <meta content={position} name="geo.position" />
      <meta content={placename} name="geo.position" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}images/header_welding.webp`} />

      <meta rel="canonical" content={url} />

      <title>{title}</title>
    </Helmet>
  )
}

export default SEO
