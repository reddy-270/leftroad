import './App.css';
import About from './components/About';
import Dev from './components/Dev';
import Footer from './components/Footer';
import Forms from './components/Forms';
import { Header } from "./components/Header.js"
import Hero from './components/Hero';
import Product from './components/Product';
import Teams from './components/Teams';
import { useRef, useState } from 'react';
import { FooterMobile } from './components/FooterMobile';
import { MobileHeader } from './components/MobileHeader';

// import detectZoom from 'detect-zoom';

function App() {

  const [browserZoomLevel, setBrowserZoomLevel] = useState(0);
  const windowSize = useRef([window.innerWidth, window.innerHeight])
  console.log(windowSize.current[0], windowSize.current[1]);

  window.addEventListener('resize', () => {
    const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    console.log(browserZoomLevel)
    setBrowserZoomLevel(browserZoomLevel);
  })


  const scrollToSpecificSection = (elementRef) => {
    window.scrollTo({
      top : elementRef.current.offsetTop ,
      behavior : 'smooth'
    });
  };
  const home = useRef(null);
  const about = useRef(null);
  const forms = useRef(null);
  const products = useRef(null);
  const development = useRef(null);
  const team = useRef(null);

  const navElementRefs = [home, about, products, development, team, forms]

  return (

    <div className="App">
      
      {windowSize.current[0] > 1150 ? <Header navEleRefs = {navElementRefs} /> : <MobileHeader navEleRefs = {navElementRefs} />}
      <Hero ref = {home} />
      <About ref = {about} />
      <Forms ref = {forms}/>
      <Product ref = {products} />
      <Dev ref = {development} />
      <Teams ref = {team} />
      <div className='contact_div' >
        <div className='contact_text'>
          <p > Have a project in mind? </p>
          <p> Schedule a free consultation today. </p>
        </div>
        <div className='button_div'>
          <button onClick={ () => scrollToSpecificSection(navElementRefs[5])} className='contac_button'>Contact Us</button>
        </div>
      </div>

      {windowSize.current[0] <850 ? <FooterMobile navEleRefs = {navElementRefs} /> : <Footer navEleRefs = {navElementRefs} />}
    </div>
  );
}

export default App;
