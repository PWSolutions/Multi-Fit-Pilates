import React from 'react'
import { Link } from 'gatsby'
import { ArenguForm } from "gatsby-plugin-arengu-forms"

import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => {

    return (
        <Layout>
            <Head title="Contact Us" />



            <div class="row">
                <div class="card extra-large">
                    <div class="card-content grey lighten-4">
                        <div class="row">
                            <div class="col s6 card-content-image">
                                <img src={`../../contact.jpg`} />
                            </div>
                            <div class="col s6">
                            <span class="card-title">Send us your question</span>

                                <ArenguForm
                                    id="158292768154575345"
                                    
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </Layout>
    )
}

export default ContactPage