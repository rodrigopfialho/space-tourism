import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import {Container, Main, Space, Explore} from '../styles/styleIndex'

export default function Home() {
  return (
    <Container>

      <Head>
        <title>Home | Space-Tourism</title>
      </Head>
      <Header />

      <Main>
        <Space>
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h2>SPACE</h2>
          <p>Let’s face it; if you want to go to space, 
            you might as well genuinely go to outer space 
            and not hover kind of on the edge of it. 
            Well sit back, and relax because we’ll 
            give you a truly out of this world experience!
          </p>
        </Space>
        <Explore>
          <Link href="/destination">
          <button type="button">
            EXPLORE
          </button>
          </Link>
        </Explore>
      </Main>
    </Container>
  )
}
