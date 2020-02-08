import React from 'react'
import { Link } from 'gatsby'

const SideMenu = ({ parent }) => {
    return (

        <Link class="btn purple lighten-2" to={parent + "/meet-the-teachers"}>Meet The Teachers</Link>

    )
}

export default SideMenu