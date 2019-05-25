/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {FaGithubSquare, FaLinkedin, FaInstagram} from 'react-icons/fa'


function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {

        return (
          <div className="bio-container">
            <div className="bio">
              <div className="bio-pic">
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={`michael`}
                />
              </div>
              <p className="bio-text">
              JavaScript, Ableton, and Dachshund fanatic.  Blogging about business, code, and screen printing.
              </p>
            </div>
            <div className="social-media">
            <a className="social" href={`https://linkedin.com/in/michaelscottfox`}>
                <FaLinkedin/>
              </a>
           <a className="social" href="https://instagram.com/misterfoxy"><FaInstagram/></a>
           <a className="social" href='https://github.com/misterfoxy'><FaGithubSquare/></a>
            </div>
          </div>

          
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
