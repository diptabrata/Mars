import './Footer.css';
import br from '../../assets/breaker-2.png';
import one from '../../assets/footer/one.png';
import two from '../../assets/footer/two.png';

export default function Footer() {

    return (
      <div className="Footer">
          <img src={br} alt="linebreak" style={{width:'100%',marginLeft:'1vw',object:'fill',marginTop:'30vh'}}/>
          <a href='#'><img src={one} style={{marginTop:'80vh', marginLeft:'7.5vw'}}/></a>
          <a href='#'><img src={two} style={{marginTop:'40vh', marginLeft:'7.5vw'}}/></a>
        <div className="flex-column">
  
        <nav className='nav-foo'>
        <a href="#">Instagram</a> 
        <a href="#">Twitter</a> 
        <a href="#">Facebook</a> 
        <a href="#">Youtube</a>
        <a href="#">Privacy Policy</a>
        </nav>
        <p className='foo-text'>Design by Lilia Chan</p>
        </div>
            
      </div>
    );
  }
  