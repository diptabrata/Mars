import './landing.css';
import heading from '../../assets/heading.png';
import border from '../../assets/border.png';
import planet from '../../assets/planet.png';
import title from '../../assets/title.png';
import buy from '../../assets/buy.png';


export default function Landing() {
    return (
      <div className="Landing">
          <img src={heading} alt="heading-image"/>
          <img src={border} alt="border-img" style={{marginLeft:'-53vw',marginTop:'-10vh', position:'absolute'}}/>
          <img src={planet} alt="planet" className='rotating'/>
          <img src={title} alt="title" style={{marginLeft:'-80vw', marginTop:'60vh',position:'absolute'}}/>
          <a href='#'><img src={buy} alt="ticket" style={{marginLeft:'-15vw', marginTop:'60vh',position:'absolute'}}/></a>
            
      </div>
    );
  }
  