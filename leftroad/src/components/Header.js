import React from 'react'
import "./Header.css"
import leftroad from "../assets/left_road.png"
export const Header = (props) => {

  const refElements = props.navEleRefs;
  const navListNames = ['Home', 'About us', ' Our Products', 'Development', 'Our Team', 'Referrals']
  console.log(refElements)
  const scrollToSpecificSection = (elementRef) => {
    window.scrollTo({
      top : elementRef.current.offsetTop,
      behavior : 'smooth'
    });
  };

  return (
    <div className='navbar_singleapp'>
        <img className='navbar_list_1' src = {leftroad} alt='' height="75" width = "75" />
        <ul className='navbar_list_2'>
          {refElements.map((item, index) => {
            return <li onClick={ () => scrollToSpecificSection(item)} className = "navbar_listItem" key = {index}> {navListNames[index]} </li>
          })}
        </ul>
        <ul className='navbar_list_3'>
            <li className='navbar_listItem'> Careers </li>
            <button className='contact_button'>Contact us</button>
        </ul>
    </div>
  )
}