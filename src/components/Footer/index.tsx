import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import SebraeLogo from '../../images/sebrae-logo.svg'

import FbIcon from '../../images/icon_fb.svg'
import TtIcon from '../../images/icon_tt.svg'
import YtIcon from '../../images/icon_yt.svg'
import IgIcon from '../../images/icon_ig.svg'

import { theme } from '../../global.css'

import Img from 'gatsby-image'

const StyledFooter = styled.footer`
  padding: 15px;
  background: #fefaa3;

  ${theme.minq[1]} {
    display: flex;
    justify-content: space-between;
  }
`

const StyledSebraeLogo = styled(SebraeLogo)`
  width: 220px;
  & > g:nth-child(4) > path:nth-child(1) {
    fill: #1d66c4 !important;
  }
`

const iconStyle = css({
  height: 40,
  width: 40,
  margin: 8,
})

const query = graphql`
  query FooterImages {
    education: imageSharp(
      original: { src: { regex: "/educacao_empreendedora/" } }
    ) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }

    undime: imageSharp(original: { src: { regex: "/undime/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }

    governo: imageSharp(original: { src: { regex: "/governo/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`

type Props = {}
export function Footer({}: Props) {
  const data = useStaticQuery(query)

  console.log(data)
  return (
    <StyledFooter>
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          [theme.minq[1]]: {
            width: 'unset',
          },
        }}
      >
        <StyledSebraeLogo />
      </div>
      <div
        css={{
          [theme.minq[1]]: {
            width: '55%',
          },
        }}
      >
        <div
          css={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <Img fixed={data.education.fixed} />
          <Img fixed={data.undime.fixed} />
          <Img fixed={data.governo.fixed} />
        </div>
        <div
          css={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 'lighter',
            color: '#1F76BF',
            '& p': {
              fontFamily: 'sans-serif',
            },
          }}
        >
          <p>wwww.ba.sebrae.com.br</p>
          <p css={{ fontWeight: 'bold', marginLeft: 30 }}>0800 570 0800</p>
        </div>
        <div
          css={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.3rem',
            fontWeight: 'lighter',
            color: '#1F76BF',
            '& p': {
              fontFamily: 'sans-serif',
            },
          }}
        >
          <div>
            <FbIcon css={iconStyle} />
            <TtIcon css={iconStyle} />
            <YtIcon css={iconStyle} />
            <IgIcon css={iconStyle} />
          </div>
          <p>SebraeBahia</p>
        </div>
      </div>
    </StyledFooter>
  )
}
