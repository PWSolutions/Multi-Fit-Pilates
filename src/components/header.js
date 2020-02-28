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

      <div class="hide-on-med-and-up card-panel purple darken-4">
        <a class='dropdown-trigger btn' href='#' data-target='dropdown1'><i class="material-icons right">menu</i></a>

        <ul id='dropdown1' class='dropdown-content purple darken-4'>
        <li><a href="/contact">Contat Us</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/cms">Sale Items</a></li>

          <li class="divider"></li>

          <li><a href="/floormat">Floor Mat</a></li>
          <li><a href="/reformer">Reformer</a></li>
          <li><a href="/nutrition">Nutrition</a></li>
        </ul>
      </div>


      <div class="hide-on-small-only">
        <nav>
          <div class="nav-wrapper purple darken-4">
            <a class="logo-text" href="/">Multi-Fit <span class="logo-sub-text">Pilates</span></a>
            {/*<a href="" class="brand-logo"> <img class="circle responsive-img" src={`../../logo.jpg`}></img> </a>*/}
            <ul id="nav-mobile" class="right">
              <li><a className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} href="/contact">Contat Us</a></li>
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