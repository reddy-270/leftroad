import React from 'react'
import "./About.css"
const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='about'>
        <div className='about_image'>
          <h1>Image</h1>
        </div>
        <div className='about_text'>
          <p style={{fontSize : '3em', margin : '0px 0px 20px 0px', fontWeight : '500'}}>Who Are <span style = {{color : '#F370CE'}}>We?</span></p>
          <p>Creating software has never been easier! Leftroad offers a revolutionary approach to software development, providing you with the tools and knowledge to make your project a success. From discovering new technologies and creating intuitive user experiences, to applications, integrated systems and debugging, we have everything you need to get the most out of your business. Come join us and see what you can create!"</p>
        </div>
    </div>
  )
})

export default About