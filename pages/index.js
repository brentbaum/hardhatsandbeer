import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BEER AND HARD HATS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header title="Welcome to my app!" /> */}
        <p className="description" style={{ fontSize: "10rem" }}>
          👷 🍻 👷‍♀️
        </p>
      </main>

    </div>
  )
}
