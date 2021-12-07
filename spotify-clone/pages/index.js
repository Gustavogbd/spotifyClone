import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>App Spotify</title>
      </Head>
      <main className="">
        <Sidebar />
        {/* Centro */}
      </main>

      <div>
        {/* Player */}
      </div>

    </div>
  )
}
