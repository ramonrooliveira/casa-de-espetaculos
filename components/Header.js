import styles from './Header.module.scss'
import { useState } from 'react'

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
        <a href="/">Home</a>
        <a href="/contato">Contato</a>
        <a href="/estrutura">Estrutura</a>
        <img className={styles.logo} src="./logo.png"></img>
        <a href="/historia">História</a>
        <a href="/pub">Pub691</a>
        <a href="/galeria">Galeria</a>
      </div>
    </div>
  )
}

export default Header
