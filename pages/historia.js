import CoverImage from '../components/CoverImage'
import TextBlock from '../components/TextBlock'
import BioSection from '../components/BioSection'
// import Image from 'next/image'

export default function Historia () {
  return (
    <div>
      <CoverImage title="HISTÓRIA" image="frente-zoom.jpeg" />
      <TextBlock
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos repellendus exercitationem sit repudiandae est reprehenderit maxime, dicta perspiciatis eius voluptatum, quibusdam aliquid deleniti eaque cum quod ratione porro impedit?"
        classes="right black overlap-previous"
      />
      <hr></hr>

      <BioSection imageUrl="carla2.jpeg" />

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
        text="Posuere tincidunt malesuada nulla nunc sed imperdiet ut nisi commodo. Elit et nec, viverra eu fusce sodales lobortis eu nunc. Urna proin eu consectetur est urna, pulvinar laoreet et pharetra. Arcu quam convallis porttitor nam. Pulvinar pharetra vehicula magna sagittis, tempus orci.
        Posuere tincidunt malesuada nulla nunc sed imperdiet ut nisi commodo. Elit et nec, viverra eu fusce sodales lobortis eu nunc. Urna proin eu consectetur est urna, pulvinar laoreet et pharetra. Arcu quam convallis porttitor nam. Pulvinar pharetra vehicula magna sagittis, tempus orci."
        classes="right primary overlap-previous"
        auxImage="logo-masks.png"
      >

      </TextBlock>
      {/* <img src="/logo-masks.png" className="logo-masks" /> */}
    </div>
  )
}
