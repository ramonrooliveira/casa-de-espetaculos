
const TripleImgMosaic = () => {
  return (
    <div className="main-image-links">
      <div className="single">
        <img src="./igreja2.jpeg" alt=""/>
        <span className="link-title bottom-left"><a href="/historia">HISTÓRIA</a></span>
      </div>
      <div className="double">
        <div>
          <img src="./pub-cover.jpeg" alt=""/>
          <span className="link-title top-left"><a href="/pub">PUB691</a></span>
        </div>
        <div>
            <img src="./palco5.jpeg" alt=""/>
            <span className="link-title bottom-left"><a href="/estrutura">ESTRUTURA</a></span>
        </div>
      </div>
    </div>
  )
}

export default TripleImgMosaic
