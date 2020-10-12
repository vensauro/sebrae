import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

import schemaGenerator from '../utils/schemaGenerator'
import { Query } from '../../graphql-types'

export const siteMetaDataQuery = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
        siteTitleShort
        siteDescription
        siteUrl
        themeColor
        social {
          twitter
        }
      }
    }
  }
`

type SiteMetaDataQuery = Pick<Query, 'site'>

type Props = {
  pageTitle?: string,
  imageUrl?: string,
}

export function Head({ pageTitle, imageUrl }: Props) {
  const { pathname } = useLocation()

  const {
    site: {
      siteMetadata: {
        siteDescription,
        siteTitle,
        siteTitleShort,
        siteUrl,
        social,
        themeColor,
      },
    },
  } = useStaticQuery<SiteMetaDataQuery>(siteMetaDataQuery)

  const pageTitleFull = pageTitle ? `${siteTitle}: ${pageTitle}` : siteTitle
  const canonical = siteUrl + (pathname ?? '')

  return (
    <Helmet>
      <html lang="pt-br" />

      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="width=device-width,initial-scale=1.0,user-scalable=yes"
        name="viewport"
      />

      <meta content={siteTitle} name="apple-mobile-web-app-title" />
      <meta content={pageTitleFull} property="og:title" />
      <meta content={pageTitleFull} name="twitter:title" />
      <title>{pageTitleFull}</title>

      <meta content={siteDescription} name="description" />
      <meta content={siteDescription} property="og:description" />
      <meta content={siteDescription} name="twitter:description" />

      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />
      <meta content={themeColor} name="theme-color" />
      <meta content={siteTitle} name="application-name" />

      <meta content="website" property="og:type" />
      <meta content={siteTitle} property="og:site_name" />
      {/* <meta content={social.fbAppId} property="fb:app_id" /> */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={`@${social.twitter}`} name="twitter:site" />
      <meta content={`@${social.twitter}`} name="twitter:creator" />
      <meta content={pageTitleFull} name="twitter:text:title" />
      <meta content={canonical} property="og:url" />
      <meta content={canonical} name="twitter:url" />
      <link rel="canonical" href={canonical} />

      <meta content={imageUrl || `${siteUrl}/social.png`} property="og:image" />
      <meta content="1024" property="og:image:width" />
      <meta content="512" property="og:image:height" />
      <meta
        content={imageUrl || `${siteUrl}/social.png`}
        name="twitter:image"
      />
      <meta content="1024" name="twitter:image:width" />
      <meta content="512" name="twitter:image:height" />
      <meta content={imageUrl || `${siteUrl}/social.png`} property="og:image" />
      <meta content="1024" property="og:image:width" />
      <meta content="512" property="og:image:height" />

      <script type="application/ld+json">
        {JSON.stringify(
          schemaGenerator({
            location,
            canonical,
            siteUrl,
            pageTitle,
            siteTitle,
            pageTitleFull,
          })
        )}
      </script>
    </Helmet>
  )
}
