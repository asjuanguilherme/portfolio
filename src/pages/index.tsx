import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Saudation = styled.div`
  font-size: 2rem;
  color: cadetblue;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  padding: 2rem 0;
`

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Hello World</title>
    </Head>
    <Saudation>Hello World!</Saudation> 
    </>
  )
}

export default Home
