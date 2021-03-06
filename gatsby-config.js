/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config()

 console.log(JSON.stringify(process.env))

module.exports = {
  siteMetadata: {
    title: 'Multi-Fit Pilates & Nutrition',
    author: 'PW Solutions',
    socialMedia: [
      { logo: "instagram.png", url: "https://www.instagram.com/multifitpilates/" },
      { logo: "facebook.png", url: "https://www.facebook.com/multifitpilates/" }
    ]
  },
  plugins: [
    'gatsby-plugin-arengu-forms',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
