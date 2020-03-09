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
    <div>

      <nav class="hide-on-med-and-up white z-depth-0">
            <a href="/" class="brand-logo left"> <img class="responsive-img small-logo" src={`../../logo.png`}></img> </a>
      <a href="#" data-target="dropdown1" class="sidenav-trigger purple-text right"><i class="material-icons">menu</i></a>

        <ul id='dropdown1' class='dropdown-content'>
          <li><a href="/contact">Contat Us</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/cms">Sale Items</a></li>

          <li class="divider"></li>

          <li><a href="/floormat">Floor Mat</a></li>
          <li><a href="/reformer">Reformer</a></li>
          <li><a href="/nutrition">Nutrition</a></li>
        </ul>
      </nav>


      <div class="hide-on-small-only">
        <nav class="big-nav z-depth-0">
          <div class="nav-wrapper white">
            {/*<a class="logo-text" href="/">Multi-Fit <span class="logo-sub-text">Pilates</span></a>*/}
            <a href="/" class="brand-logo left"> <img class="responsive-img" src={`../../logo.png`}></img> </a>
            <ul id="nav-mobile" class="right blue-text text-darken-2">
              <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} href="/contact">Contat Us</Link></li>
              <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/blog">Blogs</Link></li>
              <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/cms">Sale Items</Link></li>
            </ul>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Header