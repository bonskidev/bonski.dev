import Head from 'next/head'

export default function Home() {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
      <Head>
        <title>Bonski Dev</title>
        <meta name="description" content="Situs personal Bonski" />
        <link rel="icon" href="/icon.png" />
      </Head>
      
      <h1 className='text-2xl text-yellow-500'>bonski.dev</h1>
      <p>Segera mengudara dalam waktu dekat!</p>
      </div>
      
    </div>
  )
}
