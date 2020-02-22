import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {

    return (
        <Layout>
            <Head title="Home" />

            {/*  <div class="carousel carousel-slider">
                <a class="carousel-item" href="/floormat">
                    <img src={`../../floorpilates.jpeg`} />
                </a>
                <a class="carousel-item" href="#two!"><img src={`../../reformer.jpeg`} /></a>
                <a class="carousel-item" href="#three!"><img src={`../../nutrition.jpeg`} /></a>
            </div>
*/}
            <div class="row">
                <div class="col m4">
                    <div class="card large">
                        <div class="card-image">
                            <img class="responsive-img" src={`../../floorpilates.jpeg`} />
                        </div>
                        <div class="card-content">
                            <span class="card-title  purple-text">Floor Mat Pilates</span>
                            <p>Reformer Pilates is done using the Pilates reformer machine and is generally more intense and more dynamic than mat based Pilates as it adds resistance to the Pilates exercises via the use of the springs which form part of the machine.</p>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn purple" href="/floormat"><i class="material-icons right">info_outline</i>More Information</a>
                        </div>
                    </div>
                </div>

                <div class="col m4">
                    <div class="card large">
                        <div class="card-image">
                            <img class="responsive-img" src={`../../reformer.jpeg`} />
                        </div>
                        <div class="card-content">
                            <span class="card-title purple-text">Reformer Pilates</span>
                            <p>Reformer Pilates is done using the Pilates reformer machine and is generally more intense and more dynamic than mat based Pilates as it adds resistance to the Pilates exercises via the use of the springs which form part of the machine.</p>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn purple" href="/reformer"><i class="material-icons right">info_outline</i>More Information</a>
                        </div>
                    </div>
                </div>

                <div class="col m4">
                    <div class="card large">
                        <div class="card-image">
                            <img class="responsive-img" src={`../../nutrition2.jpg`} />
                        </div>
                        <div class="card-content">
                            <span class="card-title purple-text">Nutrition</span>
                            <p>Reformer machine and is generally more intense and more dynamic than mat based Pilates as it adds resistance to the Pilates exercises via the use of the springs which form part of the machine.</p>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-light btn purple" href="/nutrition"><i class="material-icons right">info_outline</i>More Information</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage