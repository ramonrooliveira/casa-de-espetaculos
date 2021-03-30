const Map = ({ height, width }) => {
  return (
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13818.513538480514!2d-51.2036252!3d-30.0188252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x263fc8b71910c1c8!2sCasa%20de%20Espet%C3%A1culos!5e0!3m2!1sen!2sbr!4v1617065343326!5m2!1sen!2sbr"
        width={ width } 
        height={ height }
        style={{border: "0"}}
        allowfullscreen="" 
        loading="lazy">

      </iframe>
  )
}

export default Map
