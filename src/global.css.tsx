import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const styles = css`
  ${emotionNormalize}
  * {
    font-family: 'Fredoka One';
  }
`

export function GlobaStyles() {
  return <Global styles={styles} />
}

export const theme = {
  colors: {
    white: '#fff',
    vine: '#903E58',
    yellow: '#FEFAA3',
    salmon: '#E2725F',
    salmon2: '#D65F54',
  },
}
