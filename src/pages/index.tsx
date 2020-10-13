import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Home } from '../components/Home'
import { FirstSession } from '../components/FirstSection'
import { ThirdSession } from '../components/ThirdSection'

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
  }
}

const IndexPage = ({ data }: Props) => (
  <Layout>
    <Home />
    <FirstSession content={data.firstSection.childContentJson.introText} />
    <ThirdSession {...data.secondSection.childContentJson} />
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
  }
`

export default IndexPage
