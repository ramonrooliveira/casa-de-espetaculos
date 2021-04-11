import CoverImage from '../components/CoverImage'
import TextBlock from '../components/TextBlock'

export default function Estrutura () {
  return (
    <div>
      <CoverImage title="ESTRUTURA" image="sala-sotao.jpeg" />
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
      <img src="/sala1.jpeg" className="full-width-img"/>
      <hr/>
      <TextBlock
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos repellendus exercitationem sit repudiandae est reprehenderit maxime, dicta perspiciatis eius voluptatum, quibusdam aliquid deleniti eaque cum quod ratione porro impedit?"
        classes="right primary overlap-next"
        title="Sala 2"
      />
      <img src="/sala2.jpeg" className="full-width-img"/>
      <hr/>

      <TextBlock
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos repellendus exercitationem sit repudiandae est reprehenderit maxime, dicta perspiciatis eius voluptatum, quibusdam aliquid deleniti eaque cum quod ratione porro impedit?"
        classes="left black overlap-next"
        title="Palco"
      />
      <img src="/palco1.jpeg" className="full-width-img"/>

    </div>
  )
}
