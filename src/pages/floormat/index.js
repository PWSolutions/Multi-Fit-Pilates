import React from "react"
import Layout from '../../components/layout'
import SideMenu from '../../components/side-menu'
import Head from '../../components/head'

const FloorMatIndexPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Floor Mat" />
                <SideMenu parent="floormat"></SideMenu>
                <h1>Floor Mat Pilates</h1>
                <h2>Welcome</h2>
            </Layout>
        </div>
    )
}

export default FloorMatIndexPage