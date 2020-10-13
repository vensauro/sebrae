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
  text-align: center;
`
type Props = {
  children: string
  color?: string
} & React.ComponentPropsWithoutRef<typeof Container>

export function Title({ children, color, ...props }: Props) {
  return (
    <Container {...props}>
      <H2 color={color}>{children}</H2>
    </Container>
  )
}
