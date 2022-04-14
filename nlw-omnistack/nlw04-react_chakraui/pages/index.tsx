import React from 'react'
import Head from 'next/head'

import ExperienceBar from '../components/ExperienceBar'
import { Container } from '@chakra-ui/react'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Move It</title>
      </Head>

      <main>
        <Container
          height="100vh"
          maxWidth="4xl"
          margin="0 auto"
          padding="2.5rem 2rem"
          display="flex"
          flexDirection="column"
        >
          <ExperienceBar />
        </Container>
      </main>
    </div>
  )
}

export default Home
