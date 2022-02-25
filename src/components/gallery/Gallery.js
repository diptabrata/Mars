import './gallery.css'
import one from '../../assets/gallery/1.jpg'
import two from '../../assets/gallery/2.jpg'
import three from '../../assets/gallery/3.png'
import four from '../../assets/gallery/4.jpg'
import five from '../../assets/gallery/5.jpg'
import six from '../../assets/gallery/6.jpg'
import seven from '../../assets/gallery/7.jpg'
import breaker from '../../assets/breaker-1.png'
import eight from '../../assets/gallery/8.png'
import c1 from '../../assets/cards/one.png'
import c2 from '../../assets/cards/two.png'
import c3 from '../../assets/cards/three.png'
import ct from '../../assets/cards/text.png'
import c4 from '../../assets/cards/bottom.png'


export default function Gallery() {
    return (
      <div className="Gallery">
         <div className='flex-row'>
             <div className='flex-column'> 
                <img src={one} className='img-side' style={{marginLeft:'-22vw'}}/>
                <img src={two} className='img-center' style={{marginLeft:'8vw'}}/>
                <img src={three} className='img-side' style={{marginLeft:'39vw'}}/>
             </div>
             <div className='flex-column' style={{marginTop:'55vh'}}>
                <img src={four} className='img-side' style={{marginLeft:'-22vw'}}/>
                <img src={five} className='img-center' style={{marginLeft:'8vw'}}/>
                <img src={six} className='img-side' style={{marginLeft:'39vw'}}/>
            </div>
            <div className='flex-column' style={{marginTop:'110vh'}}>
                <img src={seven} className='img-side' style={{marginLeft:'-22vw'}}/>
                <img src={two} className='img-center' style={{marginLeft:'8vw'}}/>
                <img src={four} className='img-side' style={{marginLeft:'39vw'}}/>
            
            </div>

         </div>

        <img src={breaker} style={{position:'absolute',marginLeft:'-29vw', width:'100%',marginTop:'52vh'}}/>
        <img src={eight} style={{position:'absolute',marginLeft:'-22vw',marginTop:'130vh'}}/>
        	<div className='cards'>
			<img src={ct} alt="" className='textt'/>
				<div className="container">
				<img src={c1} alt="" className='card-img'/>
				<img src={c2} alt=""  className='card-img'/>
				<img src={c3} alt=""  className='card-img'/>
    			</div>
				<img src={c4} alt="" className='texttt' />
			</div>		
			
		
      </div>
    );
  }