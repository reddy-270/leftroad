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

  const windowSize = useRef([window.innerWidth, window.innerHeight])
  return (
    <div ref = {ref} className='home'> 
      <div className='bg-image' >

      </div>
      {windowSize.current[0] <= 890 ? 
      <div className='hero_content'>
        <div style={{}} className='hero_text'>
          <img style={{width : '250px', height : '150px'}} src={hero_text} alt = ""></img>
        </div>
        <div className='hero_gif'>
          <img style={{width : '360px', height : '210px'}} src={gif} alt = ""></img>
        </div>
      </div> :
       windowSize.current[0] <1150 && windowSize.current[0] > 890 ?  
       <div className='hero_content'>
       <div className='hero_text'>
         <img style={{width : '450px', height : '280px'}} src={hero_text} alt = ""></img>
       </div>
       <div className='hero_gif'>
         <img style={{width : '420px', height : '280px'}} src={gif} alt = ""></img>
       </div>
     </div>
       :
      <div className='hero_content'>
        <div className='hero_text'>
          <img style={{width : '530px', height : '330px'}} src={hero_text} alt = ""></img>
        </div>
        <div className='hero_gif'>
          <img style={{width : '620px', height : '370px'}} src={gif} alt = ""></img>
        </div>
      </div> }
    </div>
  )
}) 

export default Hero