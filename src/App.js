import './App.css';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Partnership from './Component/Partnership'
import Testimonials from './Component/Testimonials'
import Help from './Component/Help'
import Design from './Component/Design'
import MyFooter from './Component/Footer_Folder/MyFooter';


 const App = () => {
  return (
    <div className=''>
    <Navbar />
    <Hero />
    <Partnership />
    <Help />
    <Design />
    <Testimonials />
    <MyFooter />
    </div>
  )
}

export default App;
