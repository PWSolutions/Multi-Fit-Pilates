import React from "react"
import Layout from '../../components/layout'
import SideMenu from '../../components/side-menu'
import Head from '../../components/head'

const ReformerIndexPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Reformer" />
                <SideMenu parent="reformer"></SideMenu>
                <h1>Reformer Pilates</h1>
                <h2>Welcome</h2>
            </Layout>
        </div>
    )
}

export default ReformerIndexPage