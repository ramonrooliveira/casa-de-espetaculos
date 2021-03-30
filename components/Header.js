import styles from './Header.module.scss'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.header}>
      <button
        className={`
          ${styles.hamburger}
          ${styles['hamburger--squeeze']}
          ${isActive ? styles['is-active'] : ''}
        `}
        type="button"
        onClick={handleClick}
      >
        <span className={styles['hamburger-box']}>
          <span className={styles['hamburger-inner']}></span>
        </span>
      </button>
      <div className={`${styles.buttons} ${isActive ? styles['is-active'] : ''}`}>
        <Link href="/">HOME</Link>
        <Link href="/historia">HISTÓRIA</Link>
        <Link href="/estrutura">ESTRUTURA</Link>
        <Link href="/" className="logo-link">
          <img className={styles.logo} src="./logo_black.png"></img>
        </Link>
        <Link href="/pub">PUB691</Link>
        <Link href="/galeria">GALERIA</Link>
        <Link href="/contato">CONTATO</Link>
      </div>
    </div>
  )
}

export default Header
