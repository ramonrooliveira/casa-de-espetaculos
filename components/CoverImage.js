import styles from './CoverImage.module.scss'
// import Image from 'next/image'
import { motion } from 'framer-motion'

const CoverImage = ({ title, image, extra }) => {
  return (
    <div className={`${styles.coverImage} ${styles[extra]}`} >
      {/* <img src={`./${image}`} alt=""/> */}
      {/* <motion.div
        initial="pageInitial" 
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          }
        }}
      > */}
        <img src={`/${image}`} alt="img"/>
        {/* <Image
          src={`/${image}`}
          layout="fill"
          priority="true"
          quality="100"
          // objectFit="cover"
        /> */}
      {/* </motion.div> */}
      <span className={styles.fullTitle}>{ title }</span>
    </div>
  )
}

export default CoverImage
