import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/app.scss'

import SEO from './seo'

const Layout = (props) => {
    return (

        <div class="container">
            <SEO />
            <Header></Header>

            {props.children}

           {/* <Footer></Footer>*/}
        </div>

    )
}

export default Layout