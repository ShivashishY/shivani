import React, { useState, useEffect, useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { getSimplifiedPosts } from '../utils/helpers'
import config from '../utils/config'
import floppy from '../assets/nav-floppy.png'
import looking from '../assets/me.jpg'

export default function WebsiteIndex({ data }) {
  const latest = data.latest.edges
  const highlights = data.highlights.edges
  const simplifiedLatest = useMemo(() => getSimplifiedPosts(latest), [latest])
  const simplifiedHighlights = useMemo(
    () =>
      getSimplifiedPosts(highlights, { shortTitle: true, thumbnails: true }),
    [highlights]
  )

  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />

      <article className="hero">
        <header>
          <div className="container">
            <div className="flex-content">
              <div>
                <h1>Hey, I'm Shivani.</h1>
                <p className="subtitle small">
                I'm glad you're here! I'm a <strong>Project & Operation Manager</strong> currently working as Client Relationship Manager. This website is my digital space.
          </p> 
         <p> You can find {' '}
         <Link to="/blog"> blog posts </Link> about Marketing, Finance, Sales or Product & Tech Policy. 
         Or you can read more {' '}
          <Link to="/about">about me</Link>.
                </p>
              </div>
              <img src={looking} alt="Me" className="main-image" />
            </div>
            <p className="hero-buttons">
              <Link to="https://shivanihere.github.io/" className="button">
                Download CV
              </Link>
 
              
            </p>
          </div>
        </header>

        <div className="container">
          <h2 className="main-header">
            <span>Latest Articles</span> <Link to="/blog">View All</Link>
          </h2>
          <Posts data={simplifiedLatest} />

          <h2 className="main-header">
            <span>Highlights</span> <Link to="/blog">View All</Link>
          </h2>
          <Posts data={simplifiedHighlights} yearOnly />

          <h2 className="main-header">Newsletter</h2>
          <div className="flex-content">
            <p>
            I send out an email when I create something new. I'm never going
              to spam you, and you can unsubscribe any time.
            </p>
            <p className="hero-buttons">
              <a
                href="https://Shivaniyadav.substack.com/subscribe"
                className="button"
              >
                Subscribe
              </a>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}

WebsiteIndex.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 7
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
    highlights: allMarkdownRemark(
      limit: 99
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Highlight" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            shortTitle
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 25, height: 25) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
