import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          keywords
          icbm
          geo {
            position
            placename
          }
          url
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
