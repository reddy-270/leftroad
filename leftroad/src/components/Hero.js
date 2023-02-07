import React from 'react'
import "./Hero.css"
// import gif from "../assets/hero_gif.svg"
import gif from "../assets/gif_fast.gif"
import hero_text from "../assets/hero_text.svg"
const Hero = React.forwardRef((props, ref) => {
  return (
    <div ref = {ref} className='home'> 
      <div className='bg-image' >

      </div>
      <div className='hero_content'>
        <div className='hero_text'>
          <img src={hero_text} alt = ""></img>
        </div>
        <div className='hero_gif'>
          <img src={gif} alt = ""></img>
        </div>
      </div>
    </div>
  )
})

export default Hero