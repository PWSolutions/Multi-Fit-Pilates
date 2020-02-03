import React from 'react'
import { Link } from 'gatsby'

import TopMenuStyles from './top-menu.module.scss'

const TopMenu = () => {
    return (
        <header className={TopMenuStyles.header}>
            <nav>
                <ul className={TopMenuStyles.navList}>
                    <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/floormat">Floor Mat Pilates</Link></li>
                    <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/reformer">Reformer Pilates</Link></li>
                    <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/nutrition">Nutrition</Link></li>
                    <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/blog">Blogs</Link></li>
                    <li><Link className={TopMenuStyles.navItem} activeClassName={TopMenuStyles.activeNavItem} to="/cms">CMS</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default TopMenu