import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
const seo = ({ title, description, image, pathname, article }) => {
    
    return (
            <Helmet title={seo.title}>
                <link rel="./index.scss"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                
            </Helmet>
    )
}
export default seo
seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    pathname: PropTypes.string,
    article: PropTypes.bool,
}
seo.defaultProps = {
    title: null,
    description: null,
    image: null,
    pathname: null,
    article: false,
}