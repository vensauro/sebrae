import styled from '@emotion/styled'
import React from 'react'
import { Button } from '../button'
import { Title } from '../title'

const Section = styled.section`
  height: 60vh;
  width: 100%;
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
  width: 100%;
`

// const

type Props = {
  content: Array<{
    date: string
    title: string
    description: string
    image: string
  }>
  buttonText: string
}

export function ThirdSection({ buttonText, content }: Props) {
  return (
    <Section>
      <Title>PROGRAMAÇÃO</Title>
      <ItemsContainer>
        {content.map((e) => (
          <div>
            <img src={e.image} />
            <div>
              <div>hora</div>
              <div>
                <span>titulo</span>
                <span>subtitulo</span>
              </div>
            </div>
          </div>
        ))}
      </ItemsContainer>
      <Button bg="#FEFAA3" color="#D65F54">
        {buttonText}
      </Button>
    </Section>
  )
}
