import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Home } from '../components/Home'
import { FirstSession } from '../components/FirstSession'
import { File } from '../../graphql-types'
import { ThirdSession } from '../components/ThirdSession'

type Props = {
  data: {
    firstSession: {
      childContentJson: {
        content: string
      }
    }
  }
}

const IndexPage = ({ data }: Props) => (
  <Layout>
    <Home />
    <FirstSession content={data.firstSession.childContentJson.content} />
    <ThirdSession />
  </Layout>
)

export const query = graphql`
  {
    firstSession: file(base: { eq: "first-session.json" }) {
      id
      childContentJson {
        content
        id
      }
    }
  }
`

export default IndexPage
