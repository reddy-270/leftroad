import React from 'react'
import './Forms.css'
const Forms = React.forwardRef((props, ref) => {
  return (
    <div ref = {ref} className='forms'>
      <div className='forms_div'>
        <p style={{fontSize : '2.5em', margin : '20px 0px 10px 0px'}}>Have a project in mind ? </p>
        <p style={{fontSize : '1.3em'}}>Schedule a free consulation call.</p>
        <div className='input_fields'>
          <input name='Name' placeholder='Name'></input>
          <input name='Name' placeholder='Company'></input>
          <input name='Name' placeholder='Email'></input>
          <input name='Name' placeholder='Mobile'></input>
        </div>
        <textarea className = 'big_text' placeholder = 'Your Message'></textarea>
        <button className='form_button' >Get in touch</button>
      </div>
      <h2 style={{textAlign : 'center', fontWeight : '500'}}> Do you have a referral? Get in Touch.</h2>
    </div>
  )
})

export default Forms