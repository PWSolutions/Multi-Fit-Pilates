import React from "react"
import Layout from '../../components/layout'
import SideMenu from '../../components/side-menu'
import Head from '../../components/head'

const NutritionIndexPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Nutrition" />
                <SideMenu parent="nutrition"></SideMenu>
                <h1>Nutrition</h1>
                <h2>Welcome</h2>
            </Layout>
        </div>
    )
}

export default NutritionIndexPage