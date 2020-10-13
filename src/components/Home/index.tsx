import React from 'react'
import { css } from '@emotion/core'
import SebraeLogo from '../../images/sebrae-logo.svg'
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
    height: '40%',
  },
})

const brandLogo = css({
  height: 200,
  [theme.maxq[0]]: {
    height: 150,
    margin: -45,
  },
})

const brandText = css({
  color: 'white',
  fontSize: '2rem',
  fontWeight: 'lighter',
  marginLeft: 30,
  [theme.maxq[0]]: {
    marginLeft: 0,
    fontSize: '1.7rem',
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
    marginTop: 10,
    color: '#E0CC9A',
    fontSize: '2.3rem',
  },
})

const queries = graphql`
  query LandImages {
    imageSharp(original: { src: { regex: "/banner-lading-page_croped/" } }) {
      fluid(maxWidth: 3120, maxHeight: 2290, quality: 60) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

type Querie = Pick<Query, 'imageSharp'>

export function Home() {
  const { imageSharp } = useStaticQuery<Querie>(queries)
  return (
    <section css={sectionStyle}>
      <Img fluid={imageSharp.fluid} />
      <div css={brandContainer}>
        <SebraeLogo css={brandLogo} />
        <p css={brandText}>APRESENTA</p>
      </div>

      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          height: '100%',
          paddingTop: '20%',
          paddingLeft: '10%',
        }}
      >
        <h1 css={pageTextStyle}>
          SEMANA DO PROFESSOR <br /> DO <span>NOVO MUNDO</span>
          <p>De 27 a 30 de outubro</p>
        </h1>
      </div>
    </section>
  )
}
