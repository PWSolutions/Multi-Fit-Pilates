import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import TopMenuStyles from './header.module.scss'

const Header = () => {

  const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            title
          }
        }
      }
    `)

  return (

    <nav>
      <div class="nav-wrapper purple darken-4">
        <a href="/">Multi-Fit Pilates</a>
        {/*<a href="" class="brand-logo"> <img class="circle responsive-img" src={`../../logo.jpg`}></img> </a>*/}
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} href="/nutrition">Contat Us</a></li>
          <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/blog">Blogs</Link></li>
          <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/cms">Sale Items</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header