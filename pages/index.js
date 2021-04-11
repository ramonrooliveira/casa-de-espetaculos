import Head from 'next/head'
import { useEffect } from 'react'
import TripleImgMosaic from '../components/TripleImgMosaic'
import Map from '../components/Map'
import CoverImage from '../components/CoverImage'
import TextBlock from '../components/TextBlock'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


export default function Home () {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div>
      {/* <Head>
        <title>Casa de Espetáculos</title>
        <link rel="icon" href="/logo_black.png" />
      </Head> */}
      <CoverImage title="UM PALCO PARA QUEM NÃO TEM." image="palco2.jpeg"/>

      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        <TripleImgMosaic />
      </motion.div>
      <hr></hr>
      <TextBlock
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos repellendus exercitationem sit repudiandae est reprehenderit maxime, dicta perspiciatis eius voluptatum, quibusdam aliquid deleniti eaque cum quod ratione porro impedit?"
        classes="left black overlap-next"
      ></TextBlock>
      <img src="/frente-main.jpeg" className="full-width-img" />
      <TextBlock
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos repellendus exercitationem sit repudiandae est reprehenderit maxime, dicta perspiciatis eius voluptatum, quibusdam aliquid deleniti eaque cum quod ratione porro impedit?"
        classes="right primary overlap-previous"
      ></TextBlock>
      <hr></hr>

      <Map height="450" width="100%" />
    </div>
  )
}
