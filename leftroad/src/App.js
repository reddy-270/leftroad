import './App.css';
import About from './components/About';
import Dev from './components/Dev';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Header from "./components/Header"
import Hero from './components/Hero';
import Product from './components/Product';
import Teams from './components/Teams';
import { useRef, useState } from 'react';
import FooterMobile from './components/FooterMobile';
import MobileHeader  from './components/MobileHeader';
import { useScrollBy } from 'react-use-window-scroll';

// import detectZoom from 'detect-zoom';

function App() {

  const [browserZoomLevel, setBrowserZoomLevel] = useState(200);
  const windowSize = useRef([window.innerWidth, window.innerHeight])
  console.log(windowSize.current[0], windowSize.current[1]);

  window.addEventListener('resize', () => {
    const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    console.log(browserZoomLevel)
    setBrowserZoomLevel(browserZoomLevel);
  })

  const scrollBy = useScrollBy();
  const scrollToSpecificSection = (elementRef) => {
    const x = windowSize.current[0] < 1150 ?  mobHeader.current.offsetTop : header.current.offsetTop;
    const y = elementRef.current.offsetTop
    let topp = x
    x > y ? topp = -(x-y) - 100 : topp = (y-x)-100
    scrollBy({top : topp, behavior : 'smooth'})
  
  };
  const header = useRef(null);
  const mobHeader = useRef(null);
  const home = useRef(null);
  const about = useRef(null);
  const forms = useRef(null);
  const products = useRef(null);
  const development = useRef(null);
  const team = useRef(null);

  let fRef = header
  windowSize.current[0] <= 1150 ?fRef = mobHeader : fRef = header;

  const navElementRefs = [home, about, products, development, team, forms]

  return (

    <div className="App">
      
      {windowSize.current[0] > 1150 ? <Header ref = {header} hRef = {header} navEleRefs = {navElementRefs} /> : <MobileHeader ref = {mobHeader} hRef = {mobHeader} navEleRefs = {navElementRefs} />}
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

      {windowSize.current[0] <850 ? <FooterMobile fRefer = {fRef} navEleRefs = {navElementRefs} /> : <Footer fRefer = {fRef} navEleRefs = {navElementRefs} />}
    </div>
  );
}

export default App;
