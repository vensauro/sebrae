import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Home } from '../components/Home'
import { FirstSection } from '../components/FirstSection'
import { SecondSection } from '../components/SecondSection'
import { ThirdSection } from '../components/ThirdSection'

type Props = {
  data: {
    firstSection: {
      childContentJson: {
        introText: string
      }
    }
    secondSection: {
      childContentJson: {
        button1: string
        button2: string
        section2: Array<{ description: string; icon: string }>
      }
    }
    thirdSection: {
      frontmatter: {
        button: string
        section3: Array<{
          date: string
          title: string
          description: string
          image: {
            childImageSharp: {
              fixed: any
            }
          }
        }>
      }
    }
  }
}

const IndexPage = ({ data }: Props) => (
  <Layout>
    <Home />
    <FirstSection content={data.firstSection.childContentJson.introText} />
    <SecondSection {...data.secondSection.childContentJson} />
    <ThirdSection
      buttonText={data.thirdSection.frontmatter.button}
      content={data.thirdSection.frontmatter.section3}
    />
  </Layout>
)

export const query = graphql`
  {
    firstSection: file(base: { eq: "first-session.json" }) {
      id
      childContentJson {
        introText
        id
      }
    }
    secondSection: file(base: { eq: "second-session.json" }) {
      id
      childContentJson {
        introText
        button1
        button2
        section2 {
          description
          icon
        }
      }
    }
    thirdSection: markdownRemark {
      frontmatter {
        button
        section3 {
          date
          description
          title
          image {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
