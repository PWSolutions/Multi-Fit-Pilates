import React from "react"
import Layout from '../../components/layout'
import SideMenu from '../../components/side-menu'
import Head from '../../components/head'

const FloorMatMeetTheTeachersPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Floor Mat | Meet The Teachers" />
                <SideMenu parent="floormat"></SideMenu>
                <h1>Floor Mat Pilates</h1>
                <h2>Meet The Teachers</h2>
            </Layout>
        </div>
    )
}

export default FloorMatMeetTheTeachersPage