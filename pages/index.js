import Head from 'next/head'
import TripleImgMosaic from '../components/TripleImgMosaic'
import Map from '../components/Map'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Casa de Espetáculos</title>
        <link rel="icon" href="/logo_black.png" />
      </Head>
      <h1
        className="main-text">
          UM PALCO PARA<br></br>
          QUEM NÃO TEM.
      </h1>
      <TripleImgMosaic />
      <Map height="450" width="100%" />
    </div>
  )
}
