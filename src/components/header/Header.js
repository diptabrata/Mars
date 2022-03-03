import brand from '../../assets/brand.png';
import './Header.css';

export default function Header() {
    return (
      <div className="Header">
          <div className="flex-row">
        <a href="#"><img src={brand} alt="brand-image"  ></img></a>
        <nav className='nav'>
        <a href="#" className='nav-text'>About Mars</a> 
        <a href="#" className='nav-text'>Process</a> 
        <a href="#" className='nav-text'>Buy Tickets</a> 
        <a href="#" className='nav-text'>Blog</a>
        <a href="#" className='nav-text'>Contact</a>
        </nav>
        </div>
      </div>
    );
  }
  
  
  