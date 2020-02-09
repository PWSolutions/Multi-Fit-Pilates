import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql, withPrefix } from "gatsby"

const seo = ({ title, description, image, pathname, article }) => {

    return (
        <Helmet title={seo.title}>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />


            <script src={withPrefix('js/app.js')} type="text/javascript" />
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