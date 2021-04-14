import CoverImage from '../components/CoverImage'
import TextBlock from '../components/TextBlock'


export default function Pub () {
  return (
    <div>
      <CoverImage title="PUB691" image="pub-logo.jpeg" />
      {/* <TextBlock
        icon="instagram"
        iconSize="64px"
        text="@pubdavisconde691"
        classes="right primary overlap-next small-card"
      /> */}
      <TextBlock
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos repellendus exercitationem sit repudiandae est reprehenderit maxime, dicta perspiciatis eius voluptatum, quibusdam aliquid deleniti eaque cum quod ratione porro impedit?"
        classes="left black overlap-next"
      />
      <img src="/pub-interior.jpeg" className="full-width-img"/>
      <TextBlock
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eos repellendus exercitationem sit repudiandae est reprehenderit maxime, dicta perspiciatis eius voluptatum, quibusdam aliquid deleniti eaque cum quod ratione porro impedit?"
        classes="right primary overlap-previous"
      />
      {/* <TextBlock
        icon="instagram"
        iconSize="130px"
        text="@pubdavisconde691"
        classes="left black overlap-previous small-card"
      /> */}
    </div>
  )
}
