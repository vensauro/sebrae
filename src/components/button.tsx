import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { theme } from '../global.css'

function LightenDarkenColor(col, amt) {
  var usePound = false

  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }

  var num = parseInt(col, 16)

  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

const ButtonStyle = styled.button<{ bg?: string }>`
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
`

type Props = {
  children: string
  bg?: string
  color?: string
} & React.ComponentProps<'button'>

export function Button({ children, ...props }: Props) {
  return (
    <ButtonStyle {...props}>
      <ButtonText>{children.toUpperCase()}</ButtonText>
    </ButtonStyle>
  )
}
