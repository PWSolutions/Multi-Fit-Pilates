import React from "react"
import Layout from '../../components/layout'
import SideMenu from '../../components/side-menu'
import Head from '../../components/head'

const NutritionMatMeetTheTeachersPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Nutrition | Meet The Teachers" />
                <SideMenu parent="nutrition"></SideMenu>
                <h1>Nutrition</h1>
                <h2>Meet The Teachers</h2>
            </Layout>
        </div>
    )
}

export default NutritionMatMeetTheTeachersPage