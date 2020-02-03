import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {

    return (
        <Layout>
            <Head title="Home"/>

            <Link to="/reformer">Reformer Pilates</Link>
            <h1>Multi-Fit Pilates</h1>
            <h2>Welcome</h2>
        </Layout>
    )
}

export default IndexPage