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
      
      <div class="hide-on-med-and-up">
        <ul id="dropdown1" class="dropdown-content small">
          <li><a href="/nutrition">Contat Us</a></li>
          <li><Link to="/blog">Blogs</Link></li>
          <li><Link to="/cms">Sale Items</Link></li>

          <li class="divider"></li>

          <li><a href="/floormat">Floor Mat</a></li>
          <li><Link to="/reformer">Reformer</Link></li>
          <li><Link to="/nutrition">Nutrition</Link></li>

        </ul>
        <nav>
          <div class="nav-wrapper purple darken-4">
            <ul class="left">
              <li><a class="dropdown-trigger" href="#" data-target="dropdown1"><i class="material-icons right">menu</i></a></li>
            </ul>
          </div>
        </nav>
      </div>


      <div class="hide-on-small-only">
        <nav>
          <div class="nav-wrapper purple darken-4">
            <a href="/">Multi-Fit Pilates</a>
            {/*<a href="" class="brand-logo"> <img class="circle responsive-img" src={`../../logo.jpg`}></img> </a>*/}
            <ul id="nav-mobile" class="right">
              <li><a className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} href="/nutrition">Contat Us</a></li>
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