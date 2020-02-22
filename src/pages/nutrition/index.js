import React from "react"
import Layout from '../../components/layout'
import TopMenu from '../../components/top-menu'
import Head from '../../components/head'
import TeamUpCalendar from "../../components/team-up-calendar"

const NutritionIndexPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Floor Mat" />
                <div class="hide-on-small-only">
                    <TopMenu></TopMenu>
                </div>
                <div class="row">

                    <div class="card extra-large">

                        <div class="card-content">
                            <h3>Nutrition</h3>
                        </div>
                        <div class="card-tabs">
                            <ul class="tabs tabs-fixed-width">
                                <li class="tab"><a class="active" href="#test4">What We Offer</a></li>
                                <li class="tab"><a href="#test5">Weekly Schedule</a></li>
                                <li class="tab"><a href="#test6">Meet the Staff</a></li>
                            </ul>
                        </div>
                        <div class="card-content grey lighten-4">
                            <div id="test4">
                                <div class="row">
                                    <div class="col s6 card-content-image">
                                        <img src={`../../nutrition.jpeg`} />
                                    </div>
                                    <div class="col s6">
                                        <p class="flow-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="test5">
                                <div class="row">
                                    <div class="col s12">
                                        <div class="hide-on-med-and-up">
                                            <a href="/mobile/calendar" class="waves-effect waves-light btn"><i class="material-icons left">today</i>View Mobile Timetable</a>
                                        </div>
                                        <div class="hide-on-small-only">
                                            <TeamUpCalendar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="test6">
                                <div class="row">
                                    <div class="col s6 card-content-image">
                                        <img src={`../../floorpilates.jpeg`} />
                                    </div>
                                    <div class="col s6">
                                        <p class="flow-text">galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </div>
    )
}

export default NutritionIndexPage