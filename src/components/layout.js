import React from "react"
import { Link } from "gatsby"
import {FaInstagram, FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import { rhythm, scale } from "../utils/typography"
import { runInDebugContext } from "vm";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h2
          style={{
            ...scale(1.125),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            backgroundColor: 'whitesmoke',
            padding: '2.5vh 2.5vw'
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
            backgroundColor: 'whitesmoke',
            padding: '2.5vh 2.5vw',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          © {new Date().getFullYear()} -
          {` `}
          misterfoxy
          <div
           style={{
              display: 'flex',
              flexDirection:'row',
              justifyContent: 'space-evenly',
              width: 'auto',
              fontSize: 20,

            }}
          >
          <a href={`https://linkedin.com/in/michaelscottfox`}>
                <FaLinkedin/>
              </a>
           <a href="https://instagram.com/misterfoxy"><FaInstagram/></a>
           <a href='https://github.com/misterfoxy'><FaGithubSquare/></a>
          </div>
          
        </footer>
      </div>
    )
  }
}

export default Layout
