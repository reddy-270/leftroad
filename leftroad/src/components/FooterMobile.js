import React from 'react'
import './FooterMobile.css'
import leftroad_footer from "../assets/left_road_footer.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export const FooterMobile = (props) => {
    const company = ['Home', 'About us', 'Products', 'Development', 'Our Team', 'Referrals' ]
  
    const scrollToSpecificSection = (elementRef) => {
      window.scrollTo({
        top : elementRef.current.offsetTop,
        behavior : 'smooth'
      });
    };
    return (
      <div className='mobile_footer'>
            <div className='mobile_footer_left'> 
                <img className='mobile_footer_image' src={leftroad_footer} alt='' height="75" width="150" />
                <div style={{ display : 'flex', flexWrap : 'wrap'}}>
                    <a href='https://www.linkedin.com/company/leftroad/'><FontAwesomeIcon height={24} width = {34} icon={faLinkedinIn} /></a>
                    <a href='https://www.instagram.com/nirmaan_iitm/'><FontAwesomeIcon height={24} width = {34} icon={faInstagram} /></a>
                </div>
            </div>
            <div className='mobile_footer_item'>
              <ul>
                  {company.map((item, index) => {
                    return <li onClick={() => scrollToSpecificSection(props.navEleRefs[index])}  style={{cursor : 'pointer'}} className='mobile_footer_list_item' key = {index}>{item}</li>
                  })}
              </ul>
            </div>
        </div>
    )
}
