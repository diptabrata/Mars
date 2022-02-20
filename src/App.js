import celestial from '../src/assets/bg.png';
import './App.css';
import Header from './components/header/Header';
import Landing from './components/content/Landing';

function App() {
  return (
    <div className="App">
      <div className='flex-column'>
         <Header/>
         <Landing/>
         </div>
      <img src={celestial} alt="bg-image" style={{ width: '100%',height:'100%' , margin:'0px'}} ></img>
   
    </div>
  );
}

export default App;
