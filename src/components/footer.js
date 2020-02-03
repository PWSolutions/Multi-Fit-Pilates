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
        <footer className={footerStyles.footer}>
            <div>Implemented &amp; Designed by {data.site.siteMetadata.author} &copy;</div>

            <div>{data.site.siteMetadata.socialMedia.map((element, key) => {
                return (<a href={element.url}><img src={'images/'+ element.logo}></img></a>)
            })}</div>
        </footer>
    )
}

export default Footer