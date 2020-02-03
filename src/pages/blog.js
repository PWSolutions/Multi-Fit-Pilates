import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

const BlogPage = () => {

  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }  
`)

  return (
    <Layout>
      <Head title="CMS Posts"/>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        <div>{data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}</div>
      </ol>
    </Layout>
  )
}

export default BlogPage