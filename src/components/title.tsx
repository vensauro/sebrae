import styled from '@emotion/styled'
import React from 'react'

const H2 = styled.h2`
  font-size: 2rem;
  color: ${(p) => p.color || '#903E58'};
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
type Props = {
  children: string
  color?: string
}

export function Title({ children, color }: Props) {
  return (
    <Container>
      <H2 color={color}>{children}</H2>
    </Container>
  )
}
