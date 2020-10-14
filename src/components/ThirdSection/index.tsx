import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Button } from '../button'
import { Title } from '../title'
import Img from 'gatsby-image'
import { theme } from '../../global.css'
import { BsFillCaretRightFill, BsFillCaretLeftFill } from 'react-icons/bs'
import { css } from '@emotion/core'
import { MarkdownRemarkFrontmatter } from '../../../graphql-types'

const Section = styled.section`
  /* height: 60vh; */
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
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
  align-items: center;
  width: 100%;
  color: white;
  margin-bottom: 25px;

  ${theme.maxq[0]} {
    flex-direction: column;
    margin: 15px 0;
  }
`

const ArrowContainer = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  background: transparent;
  border: none;
  outline: none;
  color: white;
`

const caretStyle = css({
  height: '4rem',
  width: '4rem',
  [theme.maxq[0]]: {
    height: '2rem',
    width: '2rem',
  },
})

type Props = {
  content: MarkdownRemarkFrontmatter['section3']
  buttonText: string
  link: string
}

export function ThirdSection({ buttonText, content, link }: Props) {
  const [slidePosition, setSlidePosition] = useState(0)

  function prevPosition() {
    if (slidePosition > 0) {
      setSlidePosition(slidePosition - 1)
    } else {
      setSlidePosition(content.length - 3)
    }
  }

  function nextPosition() {
    if (slidePosition + 3 < content.length) {
      setSlidePosition(slidePosition + 1)
    } else {
      setSlidePosition(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(nextPosition, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Section>
      <Title>PROGRAMAÇÃO</Title>
      <div
        css={css`
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
          color: white;
          /* margin: 50px 0; */
        `}
      >
        <ArrowContainer onClick={prevPosition}>
          <BsFillCaretLeftFill css={caretStyle} />
        </ArrowContainer>
        <ItemsContainer>
          {content.slice(slidePosition, slidePosition + 3).map((e, idx) => {
            const date = new Date(e.date)
            return (
              <div
                key={idx}
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
                <div
                  css={{
                    display: 'flex',
                    width: 300,
                    marginTop: 10,
                    justifyContent: 'center',
                  }}
                >
                  <div
                    css={{
                      display: 'flex',
                      flexDirection: 'column',
                      fontSize: '1.3rem',
                    }}
                  >
                    <span>
                      {date.getDate()} / {date.getMonth() + 1}
                    </span>
                    <span>{date.getHours()}h</span>
                  </div>
                  <span css={{ fontSize: '1.6rem', marginLeft: 15 }}>
                    {e.title}
                  </span>
                </div>
              </div>
            )
          })}
        </ItemsContainer>
        <ArrowContainer onClick={nextPosition}>
          <BsFillCaretRightFill css={caretStyle} />
        </ArrowContainer>
      </div>
      <Button bg="#FEFAA3" color="#D65F54" link={link}>
        {buttonText}
      </Button>
    </Section>
  )
}
