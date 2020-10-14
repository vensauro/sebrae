import React from 'react'
import { css } from '@emotion/core'
import { Title } from '../title'
import { Button } from '../button'
import { theme } from '../../global.css'

const containerStyles = css({
  width: '100%',
  paddingBottom: 40,
  background: '#903E58',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.maxq[0]]: {
    padding: 40,
    width: 'unset',
  },
})

const contentStyle = css({
  color: '#FEFAA3',
  fontSize: '1.5rem',
  width: '90%',
  maxWidth: 980,
  margin: 'auto 0',
  textAlign: 'center',
  lineHeight: '1.4',
  marginBottom: 40,
})

const titleStyle = css({
  maxWidth: 980,
  margin: 'auto 0',
  [theme.maxq[0]]: {
    fontSize: '1.2rem',
  },
})

type Props = {
  content: string
  button1?: string
  title: string
  link: string
}

export function FirstSection({ content, title, link, button1 }: Props) {
  return (
    <section css={containerStyles}>
      <Title color="#FEFAA3" css={titleStyle}>
        {title}
      </Title>
      <p css={contentStyle}>{content}</p>
      <Button link={link} bg="#FEFAA3" color="#D65F54">
        {button1}
      </Button>
    </section>
  )
}
