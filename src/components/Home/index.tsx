import React from 'react'
import { css } from '@emotion/core'
import SebraeLogo from '../../images/sebrae-logo2.svg'
import { theme } from '../../global.css'
import { graphql, useStaticQuery } from 'gatsby'
import { Query } from '../../../graphql-types'
import Img from 'gatsby-image'

const sectionStyle = css({
  background: '#5b1b26',
  // height: '100vh',
  width: '100%',
  position: 'relative',
})

const brandContainer = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  [theme.maxq[0]]: {
    flexDirection: 'column',
    height: '30%',
  },
})

const brandLogo = css({
  height: 200,
  [theme.maxq[0]]: {
    height: 100,
    marginTop: 10,
    marginBottom: -10,
  },
})

const brandText = css({
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'lighter',
  marginLeft: 30,
  marginBottom: 40,
  [theme.maxq[0]]: {
    marginLeft: 0,
    marginBottom: 0,
    fontSize: '1rem',
  },
})

const pageTextContainerStyle = css({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  height: '100%',
  paddingTop: '14%',
  paddingLeft: '10%',
  [theme.maxq[0]]: {
    paddingTop: '40%',
    // paddingLeft: '5%',
    justifyContent: 'flex-start',
  },
})

const pageTextStyle = css({
  width: '80%',
  fontSize: '3.3rem',
  color: '#CC878C',
  '& span': {
    color: '#fff',
  },
  '& p': {
    fontSize: '2.3rem',
    // '&:first-child': {
    color: '#E0CC9A',
    marginTop: 5,
    marginBottom: 2,
    // },
    '&:last-child': {
      color: 'white',
      margin: 0,
    },
  },
  [theme.maxq[0]]: {
    '& p': {
      fontSize: '1rem',
    },
    width: '50%',
    fontSize: '1.3rem',
  },
})

const queries = graphql`
  query LandImages {
    desktopImg: imageSharp(
      original: { src: { regex: "/banner-lading-page_croped/" } }
    ) {
      fluid(maxWidth: 3120, maxHeight: 2290, quality: 70) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    mobileImg: imageSharp(
      original: { src: { regex: "/banner-lading-page_mobile/" } }
    ) {
      fluid(maxWidth: 1687, maxHeight: 2340, quality: 70) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

type Querie = {
  desktopImg: Query['imageSharp']
  mobileImg: Query['imageSharp']
}

export function Home() {
  const { desktopImg, mobileImg } = useStaticQuery<Querie>(queries)
  const sources = [
    mobileImg.fluid,
    {
      ...desktopImg.fluid,
      media: '(min-width: 768px)',
    },
  ]

  return (
    <section css={sectionStyle}>
      <Img fluid={sources} />
      <div css={brandContainer}>
        <SebraeLogo css={brandLogo} />
        <p css={brandText}>APRESENTA</p>
      </div>

      <div css={pageTextContainerStyle}>
        <h1 css={pageTextStyle}>
          SEMANA DO PROFESSOR <br /> DO <span>NOVO MUNDO</span>
          <p>De 27 a 30 de outubro</p>
          <p>100% online e gratuito</p>
        </h1>
      </div>
    </section>
  )
}
