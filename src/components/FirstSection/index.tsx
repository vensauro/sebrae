import React from 'react'
import { css } from '@emotion/core'
import { Title } from '../title'

const containerStyles = css({
  width: '100%',
  padding: '35px 0',
  background: '#903E58',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

const contentStyle = css({
  color: '#FEFAA3',
  fontSize: '1.5rem',
  width: '90%',
  maxWidth: 980,
  margin: 'auto 0',
  textAlign: 'center',
  lineHeight: '1.4',
})

const spanShadow = css`
  font-weight: bold;
`

type Props = {
  content: string
  title: string
}

export function FirstSection({ content, title }: Props) {
  return (
    <section css={containerStyles}>
      <Title color="#FEFAA3" css={{ maxWidth: 980, margin: 'auto 0' }}>
        {title}
      </Title>
      <p css={contentStyle}>{content}</p>
    </section>
  )
}
