import CoverImage from '../components/CoverImage'
import TextBlock from '../components/TextBlock'
import BioSection from '../components/BioSection'
// import Image from 'next/image'

export default function Historia () {
  return (
    <div>
      <CoverImage title="HISTÓRIA" image="frente-zoom.jpeg" />
      <TextBlock
        text={["Inserida num sobrado histórico da década de 20, inspirada na cultura inglesa, é projeto do primeiro proprietário que construiu baseado numa casa que ele possuía em Londres. Todos nossos espaços homenageiam e são inspirados na arte e cultura das ilhas britânicas."]}
        classes="right black overlap-previous"
      />
      <TextBlock
        text={["“Dar um palco para quem não tem”, com essa afirmação em 16 de setembro de 2018 iniciou a Casa de Espetáculos com a proposta inovadora adequada ao mundo contemporâneo de oferecer espaços para atividades culturais e corporativas no formato coworking!",
        ""]}
        classes="left primary"
      />
      <hr></hr>

      {/* <BioSection imageUrl="carla2.jpeg" /> */}

      <img src="/carla2.jpeg" className="full-width-img align-top"/>
      <TextBlock
        text={["Foram anos de restaurações, em adequar o sobrado para atingir todas as condições que a legislação atual exige e qualificar os espaços para profissionais realizarem seus projetos! E quando conseguimos abrir e novamente reabrir, aconteceram muitos momentos maravilhosos para os artistas, professores, público, amigos e familiares preenchendo de alegria e magia todos os nossos espaços com dança, música, teatro e outras atividades."]}
        classes="right black overlap-previous"
      />

      {/* <div className="text-block--1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At faucibus donec sed magna in tellus quisque vel. Risus ultrices laoreet ullamcorper aliquam. Morbi nunc quam tristique proin ultrices.
      </div>
      <div className="text-block--1">
      Parágrafo para apresentar a Carla, contando brevemente sua história e a motivação para fundar a casa.
      </div> */}
      {/* <div className="foto-carla">
        <img
          src="/carla.jpeg"
        />

      </div> */}
      <hr></hr>

      <img src="/palco4.jpeg" className="full-width-img"/>

      <TextBlock
        text={["Quando surgiu o propósito, ainda ninguém poderia imaginar o grande desafio da pandemia em 2020; mas conseguindo de alguma forma prever o futuro, hoje nossa importância é ainda maior, proporcionar um local para excelentes profissionais desenvolverem seus projetos e para as pessoas serem mais felizes!",
        // "Posuere tincidunt malesuada nulla nunc sed imperdiet ut nisi commodo. Elit et nec, viverra eu fusce sodales lobortis eu nunc. Urna proin eu consectetur est urna, pulvinar laoreet et pharetra. Arcu quam convallis porttitor nam. Pulvinar pharetra vehicula magna sagittis, tempus orci."
      ]}
        classes="right primary overlap-previous"
        // auxImage="logo-masks.png"
      >

      </TextBlock>
      {/* <img src="/logo-masks.png" className="logo-masks" /> */}
    </div>
  )
}
