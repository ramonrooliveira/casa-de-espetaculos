import styles from './CoverImage.module.scss'

const CoverImage = ({ title, image }) => {
  return (
    <div className={styles['cover-image']} >
      <img src={`./${image}`} alt=""/>
      <span className={styles['full-title']}>{ title }</span>
    </div>
  )
}

export default CoverImage
