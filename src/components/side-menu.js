import React from 'react'
import { Link } from 'gatsby'

const SideMenu = ({parent}) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={parent + "/meet-the-teachers"}>Meet The Teachers</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default SideMenu