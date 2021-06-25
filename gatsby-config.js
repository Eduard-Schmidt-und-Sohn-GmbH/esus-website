const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "Eduard Schmidt & Sohn GmbH  - Stahl- und Metallbau in Hamburg",
    author: "Nino Gjoni",
    description:
      "Stahlbau und Metallbau in Hamburg. Fertigung und Montage Stahl- und Edelstahlkonstruktionen aller Art. Wir freuen uns auf Sie!",
    keywords:
      "Metallbau, Schlosserei, Metallbau Hamburg, Schlosserei Hamburg,  Metalltreppen, Treppenbau, Geländer, Fensterbau, Stahlbau Hamburg, Brandschutztüren Hamburg, Rauchschutztüren Hamburg, Reparatur Hamburg, Fertigung Hamburg, Montage Hamburg, Etahlkonstruktionen, Edelstahlkonstruktionen, Maschinenbau, Schiebetüren, Drehflügeltüren",
    icbm: "53.5867,10.1039",
    geo: {
      position: "53.5867;10.1039",
      placename: "Hamburg",
    },
    url: "https://www.ed-schmidt-metallbau.de/",
    siteUrl: `https://www.ed-schmidt-metallbau.de/`,
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-smoothscroll",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/gallery/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ESUS Webseite",
        short_name: "ESUS Webseite",
        start_url: "/",
        background_color: theme.colors.white,
        // theme_color: theme.colors.teal[500],
        icon: "static/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-198760797-1", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
  ],
}
