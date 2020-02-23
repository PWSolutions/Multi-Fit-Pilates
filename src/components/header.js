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
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li class="divider" tabindex="-1"></li>
          <li><a href="#!">three</a></li>
          <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
          <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
        </ul>
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