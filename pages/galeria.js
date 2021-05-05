import CoverImage from '../components/CoverImage'
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";
import AliceCarousel from 'react-alice-carousel';
// import '../styles/_alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/pub-interior.jpeg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/palco5.jpeg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/igreja2.jpeg" className="full-width-img" onDragStart={handleDragStart} />,
];


export default function Galeria () {
  return (
    <div>
      <CoverImage title="GALERIA" image="palco-cadeiras.jpeg" />
      <AliceCarousel 
        autoPlay={true}
        // autoPlayControls={true}
        autoPlayInterval={3500}
        animationDuration={1200}
        animationType="fadeout"
        autoPlayStrategy="all"
        infinite={true}
        disableButtonsControls={true}
        mouseTracking 
        items={items} 
      />
    </div>
  )
}

// Galeria.getInitialProps = ({ req }) => {
//   let userAgent;
//   if (req) {
//     userAgent = req.headers["user-agent"];
//   } else {
//     userAgent = navigator.userAgent;
//   }
//   const parser = new UAParser();
//   parser.setUA(userAgent);
//   const result = parser.getResult();
//   const deviceType = (result.device && result.device.type) || "desktop";
//   return { deviceType };
// };
