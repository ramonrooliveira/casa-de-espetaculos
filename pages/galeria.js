import CoverImage from '../components/CoverImage'
import "react-multi-carousel/lib/styles.css";
import UAParser from "ua-parser-js";
import AliceCarousel from 'react-alice-carousel';
// import '../styles/_alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="/galeria1.jpg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/galeria2.jpg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/galeria3.jpg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/galeria4.jpg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/galeria5.jpg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/galeria6.jpg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/galeria7.jpg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/galeria8.jpg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/galeria9.jpg" className="full-width-img" onDragStart={handleDragStart} />,
  <img src="/galeria10.jpg" className="full-width-img" onDragStart={handleDragStart} />,
];


export default function Galeria () {
  return (
    <div>
      <CoverImage title="GALERIA" image="mosaico-galeria.jpeg" 
      extra="dont-cut" 
      />
      <AliceCarousel 
        autoPlay={false}
        // autoPlayControls={true}
        autoPlayInterval={3500}
        animationDuration={1200}
        animationType="fadeout"
        autoPlayStrategy="all"
        infinite={true}
        disableButtonsControls={false}
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
