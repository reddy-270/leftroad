import React, { forwardRef } from 'react'
import './FooterMobile.css'
import leftroad_footer from "../assets/left_road_footer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import {useScrollBy} from "react-use-window-scroll"
const FooterMobile = forwardRef((props, ref) => {
    const company = ['Home', 'About us', 'Products', 'Development', 'Our Team', 'Referrals' ]
  
    const scrollBy = useScrollBy();
    const scrollToSpecificSection = (elementRef, eRef) => {
      const x = eRef.current.offsetTop
      const y = elementRef.current.offsetTop
      let topp = x;
      x > y ? topp = -(x-y) - 100 : topp = (y-x)-100
      scrollBy({top : topp, behavior : 'smooth'})
    };
    return (
      <div ref = {ref} className='mobile_footer'>
            <div className='mobile_footer_left'> 
                <img onClick={() => {scrollToSpecificSection(props.navEleRefs[0], props.fRefer)}} className='mobile_footer_image' src={leftroad_footer} alt='' height="75" width="150" />
                <div style={{ display : 'flex', flexWrap : 'wrap'}}>
                    <a href='https://www.linkedin.com/company/leftroad/'><FontAwesomeIcon height={24} width = {34} icon={faLinkedinIn} /></a>
                    <a href='https://www.instagram.com/nirmaan_iitm/'><FontAwesomeIcon height={24} width = {34} icon={faInstagram} /></a>
                </div>
            </div>
            <div className='mobile_footer_item'>
              <ul>
                  {company.map((item, index) => {
                    return <li onClick={() => scrollToSpecificSection(props.navEleRefs[index], props.fRefer)}  style={{cursor : 'pointer'}} className='mobile_footer_list_item' key = {index}>{item}</li>
                  })}
              </ul>
            </div>
        </div>
    )
})

export default FooterMobile
