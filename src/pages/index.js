import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Posts</h1>
    <hr />
    { posts.map(({title, description, hero, flamelink__meta_ : { createdDate } }) => (
      <section>
        <h2>{title}</h2>
        <p><small>{createdDate}</small></p>
        <p>{description}</p>
        {hero.length > 0 && <Img fixed={hero[0].localFile.childImageSharp.fixed} />}
      </section>
    )) }
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    posts: allFlamelinkBlogContent {
      nodes {
        title
        description
        flamelink__meta_ {
          createdDate(formatString: "YYYY-MM-DD")
        }
        hero {
          localFile {
            childImageSharp {
              fixed(width: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
