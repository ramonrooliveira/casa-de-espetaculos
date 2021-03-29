// components/Layout.js
import { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
