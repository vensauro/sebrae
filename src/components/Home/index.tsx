import React from 'react'
import { css } from '@emotion/core'
import SebraeLogo from '../../images/sebrae-logo.svg'
import { theme } from '../../global.css'

const sectionStyle = css({
  background: '#FEFAA3',
  height: '100vh',
  width: '100%',
})

const brandContainer = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  width: '35%',
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

export function Home() {
  return (
    <section css={sectionStyle}>
      <div css={brandContainer}>
        <SebraeLogo css={brandLogo} />
        <p css={brandText}>APRESENTA</p>
      </div>

      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
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
