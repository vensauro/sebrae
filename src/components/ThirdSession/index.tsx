import React from 'react'
import { css } from '@emotion/core'
import { Button } from '../button'
import Iconzinho from '../../images/ebook.svg'
import { theme } from '../../global.css'

function Content({ icon: Icon, description }) {
  return (
    <div
      css={{
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#903E58',
        fill: '#903E58',
        textAlign: 'center',
        [theme.maxq[0]]: {
          width: '100%',
        },
      }}
    >
      <Icon
        css={{
          height: 120,
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

export function ThirdSession() {
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
      <Button>Sou professor(a), quero participar</Button>
      <div css={contentContainer}>
        {Array.from({ length: 4 }).map((e) => (
          <Content
            icon={Iconzinho}
            description="Todo professor deve se preparar para a transformação digital"
          />
        ))}
      </div>
      <Button bg="#D65F54">Quero ser professor do novo mundo</Button>
    </section>
  )
}
