import two from '../../assets/two.png';
import './two.css';
import click from '../../assets/click2.png';
import text from '../../assets/gallery-text.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function Two() {
    return (
      <div className="two">
         <img src={two} />
        <a href='#'> <img src={click} className="img"/></a>
        <img src={text}  className="img-text" />
    
      </div>
    );
  }