import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <Link href="/">HOME</Link>
        <Link href="/historia">HISTÓRIA</Link>
        <Link href="/estrutura">ESTRUTURA</Link>
        <Link href="/pub">PUB691</Link>
        <Link href="/galeria">GALERIA</Link>
        <Link href="/contato">CONTATO</Link>
      </div>
      <div className={styles.contactInfo}>

      </div>
    </div>
  )
}

export default Footer
