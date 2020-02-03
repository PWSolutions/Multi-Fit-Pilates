const path = require('path')
require('dotenv').config()

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {

    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  async function createBlogPost() {
    const blogTemplate = path.resolve('./src/templates/blog.js')

    const res = await graphql(`
    query{
        allMarkdownRemark{
          edges{
            node{            
              fields{
                slug
              }              
            }
          }
        }
      }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        component: blogTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug
        }
      })
    })
  }

  async function createCmsPost() {
    const cmsTemplate = path.resolve('./src/templates/cms.js')

    const res = await graphql(`
    query{
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }`)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
      createPage({
        component: cmsTemplate,
        path: `/cms/${edge.node.slug}`,
        context: {
          slug: edge.node.slug
        }
      })
    })

  }

  await createBlogPost()
  await createCmsPost();


}