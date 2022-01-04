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

      {/* <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      > */}
        <TripleImgMosaic />
      {/* </motion.div> */}
      <hr></hr>
      <TextBlock
        text={["Situada na cidade de Porto Alegre, foi projetada e desenvolvida preservando os traços e memórias da arquitetura inglesa em uma construção de mais de 100 anos totalmente renovada! O sobrado histórico é um espaço de Coworking para atividades culturais e que oferece locação de ambientes para projetos tanto no mundo das artes quanto no corporativo; para que ideias que floresçam possam ser realizadas!"]}
        classes="left black overlap-next"
      ></TextBlock>
      <img src="/frente-main.jpeg" className="full-width-img" />
      <TextBlock
        text={["A Casa de Espetáculos é um espaço multicultural; possui o Teatro William Shakespeare com plateia para 88 espectadores, palco para apresentações, camarim, sala técnica de sonorização e iluminação e demais instalações como salas de apoio multifuncionais para aulas, workshops, oficinas, palestras, reuniões e tudo mais que sua criatividade permitir! Contamos ainda com o PUB691 que é um acolhedor espaço onde os frequentadores podem confraternizar, encontrar amigos, aguardar para assistirem shows e apreciarem uma excelente cerveja artesanal e hidromel de fabricação própria, além de petiscos, inspirados na Cultura da Europa Medieval.",
      "Venha conhecer! Entre em contato para saber mais da agenda do teatro e dos demais espaços!"]}
        classes="right primary overlap-previous"
      ></TextBlock>
      <hr></hr>

      <Map height="450" width="100%" />
    </div>
  )
}
