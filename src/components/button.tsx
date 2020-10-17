import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../global.css'

function LightenDarkenColor(col, amt) {
  let usePound = false

  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

const ButtonStyle = styled.a<{ bg?: string; color?: string }>`
  border-radius: 20px;
  border: none;
  background: ${(p) => p.bg || '#903E58'};

  max-width: 460px;
  max-height: 85px;
  color: ${(p) => p.color || 'white'};
  font-size: 1.8rem;

  padding: 15px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  text-decoration: none;

  &:active {
    background-color: ${(p) => LightenDarkenColor(p.bg || '#903E58', -20)};
    box-shadow: 3px 3px 1px #888;
  }

  ${theme.maxq[0]} {
    font-size: 1.3rem;
  }
`

const ButtonText = styled.div`
  width: 80%;
  text-align: center;
`

type Props = {
  children: string
  bg?: string
  color?: string
  link?: string
} & React.ComponentProps<'a'>

export function Button({ children, link, ...props }: Props) {
  return (
    <ButtonStyle href={link} target="_blank" {...props}>
      <ButtonText>{children.toUpperCase()}</ButtonText>
    </ButtonStyle>
  )
}
