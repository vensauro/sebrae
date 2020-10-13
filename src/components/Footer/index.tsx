import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import SebraeLogo from '../../images/sebrae-logo2.svg'

import FbIcon from '../../images/icon_fb.svg'
import TtIcon from '../../images/icon_tt.svg'
import YtIcon from '../../images/icon_yt.svg'
import IgIcon from '../../images/icon_ig.svg'
import TgIcon from '../../images/icon_tg.svg'
import LdIcon from '../../images/icon_ld.svg'

import { theme } from '../../global.css'

import Img from 'gatsby-image'
import { SiteSiteMetadataSocial } from '../../../graphql-types'

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
  & .a,
  & .b {
    fill: #5596b8 !important;
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

function SocialLink({
  icon: Icon,
  src,
}: {
  icon: React.ComponentType
  src?: string
}) {
  return (
    <a href={src} target="_blank" rel="noreferrer">
      <Icon css={iconStyle} />
    </a>
  )
}

type Props = {
  social: SiteSiteMetadataSocial
}
export function Footer({ social }: Props) {
  const data = useStaticQuery(query)

  return (
    <StyledFooter>
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
            alignItems: 'center',
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
            margin: '20px 0',
            '& a': {
              fontFamily: 'sans-serif',
              textDecoration: 'none',
              color: '#5596B8',
              fontSize: '1.1rem',
            },
          }}
        >
          <a
            href="https://www.sebrae.com.br/sites/PortalSebrae/ufs/ba"
            target="_blank"
            rel="noreferrer"
          >
            www.ba.sebrae.com.br
          </a>
          <a
            href="tel:0800 570 0800"
            target="_blank"
            rel="noreferrer"
            css={{ fontWeight: 'bold', marginLeft: 30 }}
          >
            0800 570 0800
          </a>
        </div>
        <div
          css={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.3rem',
            fontWeight: 'lighter',
            color: '#5596B8',
            '& p': {
              fontFamily: 'sans-serif',
            },
          }}
        >
          <div>
            <SocialLink icon={TgIcon} src={social.telegram_url} />
            <SocialLink icon={LdIcon} src={social.linkedin_url} />
            <SocialLink icon={FbIcon} src={social.facebook_url} />
            <br
              css={{ display: 'none', [theme.maxq[0]]: { display: 'unset' } }}
            />
            <SocialLink icon={TtIcon} src={social.twitter_url} />
            <SocialLink icon={YtIcon} src={social.youtube_url} />
            <SocialLink icon={IgIcon} src={social.instagram_url} />
          </div>
          <p>@SebraeBahia</p>
        </div>
      </div>
    </StyledFooter>
  )
}
