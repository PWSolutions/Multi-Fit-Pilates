import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import cmsStyles from './cms.module.scss'

const CmsPage = () => {

  const data = useStaticQuery(graphql`
  {
    allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
      edges {
        node {
          title
          slug
          publishedDate(fromNow: true, formatString: "Do MMMM YYYY")
        }
      }
    }
  }
  
`)

  return (
    <Layout>
      <Head title="CMS Posts"/>
      <h1>CMS</h1>
      <ol className={cmsStyles.posts}>
        <div>{data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={cmsStyles.post}>
              <Link to={`/cms/${edge.node.slug}`}>
                <h2>{edge.node.publishedDate}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}</div>
      </ol>
    </Layout>
  )
}

export default CmsPage