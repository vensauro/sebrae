import 'typeface-fredoka-one'

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'

import { WindowLocation, useLocation } from '@reach/router'

// import Header from './header'

import { GlobaStyles, theme } from '../global.css'
import { Head } from './head'
import { Query } from '../../graphql-types'

type SiteMetaDataQuery = Pick<Query, 'site'>

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery<SiteMetaDataQuery>(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          siteTitle
          siteTitleShort
          siteDescription
          siteUrl
          themeColor
          social {
            twitter_url
            facebook_url
            youtube_url
            instagram_url
            twitter
          }
        }
      }
    }
  `)

  const location = useLocation()

  return (
    <ThemeProvider theme={theme}>
      <GlobaStyles />
      <Head {...data.site.siteMetadata} location={location} />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      {/* <div
        css={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      > */}
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
      {/* </div> */}
    </ThemeProvider>
  )
}

export default Layout
