require("dotenv").config({
  path: `.env`,
})

module.exports = {
  // flags: {
  //   DEV_SSR: true
  // },
  pathPrefix: "",
  siteMetadata: {
    title: `Improve your coding skills`,
    description: `This is a place where I share teachings, showcase experiments, and express my insights on the tech industry.`,
    author: `@JPBelley`,
    siteUrl: `https://jeanphilippebelley.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "G-HME103H7M3",
        includeInDevelopment: false,
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://jeanphilippebelley.us12.list-manage.com/subscribe/post?u=342f9fe8864fd3cea4a7d9498&amp;id=8a42b1e5bf&amp;f_id=008ebce0f0', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-glslify`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jp.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: `jpbelley`,
        collection: [`fragments`],
        server: { address: 'ac-raz3qcd-shard-00-02.tg8byvu.mongodb.net', port: 27017 },
        auth: { user: 'JPBelley', password: process.env.MONGODB_PASS },
        extraParams: { replicaSet: 'cluster0', ssl: true, authSource: `admin`, retryWrites: true }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/images/
        }
      }
    }
  ],
}
