import React from 'react'
import { css } from '@emotion/core'
import { Button } from '../button'
import { theme } from '../../global.css'

function Content({ icon, description }) {
  return (
    <div
      css={{
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#903E58',
        textAlign: 'center',
        [theme.maxq[0]]: {
          width: '100%',
        },
      }}
    >
      <div
        css={{
          height: 120,
          width: '100%',
          background: '#903E58',
          mask: `url(${icon}) no-repeat center`,
        }}
      />
      <p
        css={{
          width: '50%',
          fontSize: '1.3rem',
          [theme.maxq[0]]: {
            width: '80%',
          },
        }}
      >
        {description}
      </p>
    </div>
  )
}

const contentContainer = css({
  display: 'flex',
  width: '100%',
  margin: '30px 0',
  [theme.maxq[0]]: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: '70px 0',
  },
})

type Props = {
  button1: string
  button2: string
  section2: Array<{ description: string; icon: string }>
}

export function ThirdSession({ button1, button2, section2 }: Props) {
  console.log({ section2 })
  return (
    <section
      css={{
        height: '100%',
        padding: 40,
        background:
          'transparent linear-gradient(164deg, #FEFAA3 0%, #E2725F 100%) 0% 0% no-repeat padding-box;',
        display: 'flex',
        justifyContent: 'space-evenlyn',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Button>{button1}</Button>
      <div css={contentContainer}>
        {section2.map((content) => (
          <Content icon={content.icon} description={content.description} />
        ))}
      </div>
      <Button bg="#D65F54">{button2}</Button>
    </section>
  )
}
