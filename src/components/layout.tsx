import 'typeface-fredoka-one'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'

// import Header from './header'

import { GlobaStyles, theme } from '../global.css'
import { Head } from './head'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          siteTitle
          social {
            twitter_url
            facebook_url
            youtube_url
            instagram_url
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobaStyles />
      <Head />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        css={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
    </ThemeProvider>
  )
}

export default Layout
