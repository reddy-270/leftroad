import React from 'react'

const Hero = React.forwardRef((props, ref) => {
  return (
    <div ref = {ref} className='home'> 

      Hero..
    </div>
  )
})

export default Hero