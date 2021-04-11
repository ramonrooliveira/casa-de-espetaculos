// components/Layout.js
import { Component } from 'react'
import { Head } from 'next/head'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        {/* <Head>
          <title>Casa de Espetáculos</title>
          <link rel="icon" href="/logo_black.png" />
        </Head> */}
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
