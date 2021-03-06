import styles from './Header.module.scss'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (lockScroll) => {
    setIsActive(!isActive)
    
    if (isActive || !lockScroll) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  return (
    <div className={`${styles.header} ${isActive ? styles['is-active'] : ''}`}>
      <button
        className={`
          ${styles.hamburger}
          ${styles['hamburger--squeeze']}
          ${isActive ? styles['is-active'] : ''}
        `}
        type="button"
        onClick={() => handleClick(true)}
      >
        <span className={styles['hamburger-box']}>
          <span className={styles['hamburger-inner']}></span>
        </span>
      </button>
      <div onClick={() => handleClick(false)} className={`${styles.buttons} ${isActive ? styles['is-active'] : ''}`}>
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
