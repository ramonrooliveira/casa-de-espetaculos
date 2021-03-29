const CoverImage = ({ title, image }) => {
  return (
    <div className="cover-image" >
      <img src={`./${image}.png`} alt=""/>
      <span className="full-title">{ title }</span>
    </div>
  )
}

export default CoverImage
