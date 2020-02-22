import React from 'react'
import { Link } from 'gatsby'

const TopMenu = ({ parent }) => {
    return (
        <div class="row">
            <div class="col m4">
                <a href="/floormat">
                    <div class="card small extra-small">
                        <div class="card-image">
                            <img class="responsive-img" src={`../../floorpilates.jpeg`} />
                        </div>
                        <div class="card-content">
                            <span class="card-title  purple-text">Floor Mat Pilates</span>
                        </div>

                    </div>
                </a>
            </div>

            <div class="col m4">
                <a href="/reformer">
                    <div class="card small extra-small">
                        <div class="card-image">
                            <img class="responsive-img" src={`../../reformer.jpeg`} />
                        </div>
                        <div class="card-content">
                            <span class="card-title purple-text">Reformer Pilates</span>
                        </div>

                    </div>
                </a>
            </div>

            <div class="col m4">
                <a href="/nutrition">
                    <div class="card small extra-small">
                        <div class="card-image">
                            <img class="responsive-img" src={`../../nutrition2.jpg`} />
                        </div>
                        <div class="card-content">
                            <span class="card-title purple-text">Nutrition</span>
                        </div>

                    </div>
                </a>
            </div>
        </div>
    )
}

export default TopMenu