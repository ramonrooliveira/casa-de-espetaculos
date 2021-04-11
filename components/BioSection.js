// import styles from './CoverImage.module.scss'
// import Image from 'next/image'
import TextBlock from './TextBlock'

const BioSection = ({ imageUrl }) => {
  return (
    <div >
      <TextBlock
        text="Parágrafo para apresentar a Carla, contando brevemente sua história e a motivação para fundar a casa.
        Parágrafo para apresentar a Carla, contando brevemente sua história e a motivação para fundar a casa.
        Parágrafo para apresentar a Carla, contando brevemente sua história e a motivação para fundar a casa.
        Parágrafo para apresentar a Carla, contando brevemente sua história e a motivação para fundar a casa."
        classes="left primary overlap-next"
      ></TextBlock>
      <div className="bio-info">
        <div className="foto-carla">
          <img src={`/${imageUrl}`}/>
        </div>
        <div className="bio-info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu adipiscing at nibh ipsum erat amet venenatis cras eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu adipiscing at nibh ipsum erat amet venenatis cras eget.
        </div>
      </div>
    </div>
  )
}

export default BioSection
