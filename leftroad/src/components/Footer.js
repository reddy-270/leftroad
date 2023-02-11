import React from 'react'
import "./Footer.css"
import leftroad_footer from "../assets/left_road_footer.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = (props) => {
  const company = ['Home', 'About us', 'Products', 'Development', 'Our Team']
  const products = ['Mobile Apps', 'Websites', 'Desktop Apps', 'Software Solutions'];
  const devProcess = ['Analyse', 'design', 'Develop', 'Test', 'Launch', 'Support'];


  const scrollToSpecificSection = (elementRef) => {
    window.scrollTo({
      top : elementRef.current.offsetTop,
      behavior : 'smooth'
    });
  };
  return (
    <div className='footer'>
        
        <img className='footer_image' src={leftroad_footer} alt='' height="75" width="150" />
        <div className='footer_item'>
            <ul>
                <li className='footer_list_item'> <h3> Company </h3> </li>
                {company.map((item, index) => {
                  return <li onClick={() => scrollToSpecificSection(props.navEleRefs[index])}  style={{cursor : 'pointer'}} className='footer_list_item' key = {index}>{item}</li>
                })}
                <li  className='footer_list_item'> Recommend us</li>
            </ul>
        </div>

        <div className='footer_item'>
            <ul>

              <li className='footer_list_item'> <h3>Our Products </h3></li>
              {products.map((item , index) => {
                return <li className='footer_list_item' key={index}> {item} </li>
              })}
            </ul>
        </div>
        <div className='footer_item'>
            <ul>
              <li className='footer_list_item'> <h3> Our Development Process </h3></li>
              {devProcess.map((item, index) => {
                return <li className='footer_list_item' key = {index}> {item} </li>
              })}
            </ul>
        </div>
        <div className='footer_item' style={{margin : '30px 20px', padding : '20px 10px'}}>
            <ul>
              <li onClick={() => scrollToSpecificSection(props.navEleRefs[4])} style={{cursor : 'pointer'}} className='footer_list_item'> Our Team </li>
              <li style={{cursor : 'pointer'}} className='footer_list_item'> Career </li>
              <div style={{ display : 'flex', flexWrap : 'wrap'}}>
                <a href='https://www.linkedin.com/company/leftroad/'><FontAwesomeIcon height={24} width = {36} icon={faLinkedinIn} /></a>
                <a href='https://www.instagram.com/nirmaan_iitm/'><FontAwesomeIcon height={24} width = {36} icon={faInstagram} /></a>
              </div>
            </ul>
        </div>
    </div>
  )
}

export default Footer