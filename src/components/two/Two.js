import two from '../../assets/two.png';
import './two.css';
import click from '../../assets/click2.png';
import text from '../../assets/gallery-text.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default function Two() {
    return (
      <div className="two">
         <img src={two} />
        <a href='#'> <img src={click} className="img"/></a>
        <img src={text}  className="img-text" />
        <div className="carousal">
             
                </div>
      </div>
    );
  }