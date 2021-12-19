import styles from './Footer.module.scss'
import Link from 'next/link'
import { Icon, InlineIcon } from '@iconify/react'
import bxlInstagram from '@iconify/icons-bx/bxl-instagram'

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* <div className={styles.links}>
        <Link href="/">HOME</Link>
        <Link href="/historia">HISTÓRIA</Link>
        <Link href="/estrutura">ESTRUTURA</Link>
        <Link href="/pub">PUB691</Link>
        <Link href="/galeria">GALERIA</Link>
        <Link href="/contato">CONTATO</Link>
      </div> */}
      <span className={styles.contactEntry}>Bairro Floresta, Porto Alegre<br />
      Rua Visconde do Rio Branco, 691</span>
      <span className={styles.contactEntry}>contato@casadeespetaculos.com.br</span>
      <span className={styles.contactEntry}>
      <Icon icon={bxlInstagram} style={{ color: '#ffffff', fontSize: '24px' }} />
        <a href="https://instagram.com/casadeespetaculos" target="_blank" className={styles.socialLink}>@casadeespetaculos</a>
      </span>
      <span className={styles.contactEntry}>(51) 99830-0101</span>
    </div>
  )
}

export default Footer
