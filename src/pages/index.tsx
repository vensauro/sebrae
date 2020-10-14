import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Home } from '../components/Home'
import { FirstSection } from '../components/FirstSection'
import { SecondSection } from '../components/SecondSection'
import { ThirdSection } from '../components/ThirdSection'
import { Footer } from '../components/Footer'
import { Query } from '../../graphql-types'

type Props = {
  data: {
    firstSection: Query['file']
    secondSection: Query['file']
    thirdSection: Query['markdownRemark']
    metadata: Query['site']
  }
}

const IndexPage = ({ data }: Props) => {
  const { siteOfficial, social } = data.metadata.siteMetadata
  return (
    <Layout>
      <Home />
      <FirstSection
        content={data.firstSection.childContentJson.introText}
        title={data.firstSection.childContentJson.title}
        link={siteOfficial}
        button1={data.secondSection.childContentJson.button1}
      />
      <SecondSection
        {...data.secondSection.childContentJson}
        link={siteOfficial}
      />
      <ThirdSection
        link={siteOfficial}
        buttonText={data.thirdSection.frontmatter.button}
        content={data.thirdSection.frontmatter.section3}
      />
      <Footer social={social} />
    </Layout>
  )
}

export const query = graphql`
  {
    firstSection: file(base: { eq: "first-session.json" }) {
      id
      childContentJson {
        introText
        title
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
              fixed(width: 300, height: 200) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }

    metadata: site {
      siteMetadata {
        siteOfficial
        social {
          facebook_url
          instagram_url
          twitter
          twitter_url
          youtube_url
          telegram_url
          linkedin_url
        }
      }
    }
  }
`

export default IndexPage
