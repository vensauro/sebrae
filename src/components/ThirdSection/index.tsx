import styled from '@emotion/styled'
import React from 'react'
import { Button } from '../button'
import { Title } from '../title'
import Img from 'gatsby-image'
import { theme } from '../../global.css'

const Section = styled.section`
  /* height: 60vh; */
  width: 100%;
  padding: 30px 0;
  background: rgb(228, 180, 121);
  background: linear-gradient(
    135deg,
    rgba(228, 180, 121, 1) 0%,
    rgba(226, 114, 95, 0.8421569311318278) 60%,
    rgba(226, 114, 95, 1) 100%
  );

  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: white;
  margin: 50px 0;

  ${theme.maxq[0]} {
    flex-direction: column;
  }
`

// const

type Props = {
  content: Array<{
    date: string
    title: string
    description: string
    image: {
      childImageSharp: {
        fixed: any
      }
    }
  }>
  buttonText: string
}

export function ThirdSection({ buttonText, content }: Props) {
  console.log(content)
  return (
    <Section>
      <Title>PROGRAMAÇÃO</Title>
      <ItemsContainer>
        {content.slice(0, 3).map((e) => {
          const date = new Date(e.date)
          return (
            <div
              css={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                [theme.maxq[0]]: {
                  marginBottom: 15,
                },
              }}
            >
              <Img fixed={e.image.childImageSharp.fixed} />
              <div css={{ display: 'flex', width: 300 }}>
                <div
                  css={{
                    width: '35%',
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: '1.3rem',
                  }}
                >
                  <span>
                    {date.getDate()} | {date.getMonth() + 1}
                  </span>
                  <span>{date.getHours()}h</span>
                </div>
                <div
                  css={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span css={{ fontSize: '1.7rem' }}>{e.title}</span>
                  <span>{e.description}</span>
                </div>
              </div>
            </div>
          )
        })}
      </ItemsContainer>
      <Button bg="#FEFAA3" color="#D65F54">
        {buttonText}
      </Button>
    </Section>
  )
}
