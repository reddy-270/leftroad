import React, {useState ,useRef} from 'react'
import "./Hero.css"
// import gif from "../assets/hero_gif.svg"
import gif from "../assets/gif_fast.gif"
import hero_text from "../assets/hero_text.svg"
const Hero = React.forwardRef((props, ref) => {
  
  const [browserZoomLevel, setBrowserZoomLevel] = useState(200);

  console.log(browserZoomLevel)
  window.addEventListener('resize', () => {
    const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    console.log(browserZoomLevel)
    setBrowserZoomLevel(browserZoomLevel);
  })

  // const windowSize = useRef([window.innerWidth, window.innerHeight])
  // console.log(windowSize.current[0], windowSize.current[1]);

  // const imgWidth = 0.39* (windowSize.current[0]);

  return (
    <div ref = {ref} className='home'> 
      <div className='bg-image' >

      </div>
      <div className='hero_content'>
        <div className='hero_text'>
          <img style={browserZoomLevel >= 200 ? {width : '530px', height : '330px'} : {width : '530px', height : '330px'}} src={hero_text} alt = ""></img>
        </div>
        <div className='hero_gif'>
          <img style={browserZoomLevel >= 200 ? {width : '550px', height : '340px'} : {width : '620px', height : '370px'}} src={gif} alt = ""></img>
        </div>
      </div>
    </div>
  )
})

export default Hero