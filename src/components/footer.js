import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            title,
            author,
            socialMedia {
              logo
              url
            }
          }
        }
      }
    `)

  return (
    <div class="footer-copyright">
      Implemented &amp; Designed by {data.site.siteMetadata.author} &copy; 2020
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
    </div>
  )
}

export default Footer