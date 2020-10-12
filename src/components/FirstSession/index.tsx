import React from 'react'
import { css } from '@emotion/core'

const containerStyles = css({
  width: '100%',
  padding: '35px 0',
  background: '#903E58',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const contentStyle = css({
  color: '#FEFAA3',
  fontSize: '1.5rem',
  width: '80%',
  maxWidth: 980,
  margin: 'auto 0',
})

type Props = {
  content: string
}

export function FirstSession({ content }: Props) {
  return (
    <section css={containerStyles}>
      <p css={contentStyle}>{content}</p>
    </section>
  )
}
