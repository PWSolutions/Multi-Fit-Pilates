import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {

    return (
        <Layout>
            <Head title="Home" />

            <div class="row">
                <div class="col s4">
                    <div class="card small">
                        <div class="card-image">
                            <img src={`../../floorpilates.jpeg`} />
                        </div>
                        <div class="card-content">
                            <p>Reformer Pilates is similar yet very different to mat based Pilates. Reformer Pilates is done using the Pilates reformer machine and is generally more intense and more dynamic than mat based Pilates as it adds resistance to the Pilates exercises via the use of the springs which form part of the machine.</p>
                        </div>
                        <div class="card-action">
                            <a href="/flootmat">More Information</a>
                        </div>
                    </div>
                </div>

                <div class="col s4">
                    <div class="card small">
                        <div class="card-image">
                            <img src={`../../reformer.jpeg`} />
                        </div>
                        <div class="card-content">
                            <p>Reformer Pilates is similar yet very different to mat based Pilates. Reformer Pilates is done using the Pilates reformer machine and is generally more intense and more dynamic than mat based Pilates as it adds resistance to the Pilates exercises via the use of the springs which form part of the machine.</p>
                        </div>
                        <div class="card-action">
                            <a href="/reformer">More Information</a>
                        </div>
                    </div>
                </div>

                <div class="col s4">
                    <div class="card small">
                        <div class="card-image">
                            <img src={`../../nutrition.jpeg`} />
                        </div>
                        <div class="card-content">
                            <p>Reformer Pilates is similar yet very different to mat based Pilates. Reformer Pilates is done using the Pilates reformer machine and is generally more intense and more dynamic than mat based Pilates as it adds resistance to the Pilates exercises via the use of the springs which form part of the machine.</p>
                        </div>
                        <div class="card-action">
                            <a href="/nutrition">More Information</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage