import brand from '../../assets/brand.png';
import './Header.css';

export default function Header() {
    return (
      <div className="Header">
          <div className="flex-row">
        <a href="#"><img src={brand} alt="brand-image"  ></img></a>
        <nav className='nav'>
        <a href="#">About Mars</a> 
        <a href="#">Process</a> 
        <a href="#">Buy Tickets</a> 
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        </nav>
        </div>
      </div>
    );
  }
  
  
  