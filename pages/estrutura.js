import CoverImage from '../components/CoverImage'
import TextBlock from '../components/TextBlock'

export default function Estrutura () {
  return (
    <div>
      <CoverImage title="ESTRUTURA" image="sala-sotao.jpg" />
      <TextBlock
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos repellendus exercitationem sit repudiandae est reprehenderit maxime, dicta perspiciatis eius voluptatum, quibusdam aliquid deleniti eaque cum quod ratione porro impedit?"
        classes="right primary overlap-previous"
      />
      <hr/>

      <TextBlock
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos repellendus exercitationem sit repudiandae est reprehenderit maxime, dicta perspiciatis eius voluptatum, quibusdam aliquid deleniti eaque cum quod ratione porro impedit?"
        classes="left black overlap-next"
        title="Sala 1"
      />
      <CoverImage image="frente" />
      <hr/>

    </div>
  )
}
