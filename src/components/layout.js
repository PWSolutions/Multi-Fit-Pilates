import React from 'react'
import Header from './header'
import TopMenu from './top-menu'
import Footer from './footer'
import '../styles/index.scss'

import LayoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}>
            <div className={LayoutStyles.content}>
                <Header></Header>
                <TopMenu></TopMenu>
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout