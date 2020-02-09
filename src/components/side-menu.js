import React from 'react'
import { Link } from 'gatsby'

const SideMenu = ({ parent }) => {
    return (
        <div class="side-nav">
            <div class="col sm6">
                <Link class="btn purple lighten-2" to={parent + "/meet-the-teachers"}>Meet The Teachers</Link>
            </div>
        </div>
    )
}

export default SideMenu