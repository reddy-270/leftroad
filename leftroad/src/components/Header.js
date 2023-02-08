import React from 'react'
import "./Header.css"
import leftroad from "../assets/left_road_svg.svg"
import { useEffect, useState } from 'react'

export const Header = (props) => {

  const refElements = props.navEleRefs;
  const navListNames = ['Home', 'About us', ' Our Products', 'Development', 'Our Team', 'Referrals']
  
  const scrollToSpecificSection = (elementRef) => {
    window.scrollTo({
      top : elementRef.current.offsetTop ,
      behavior : 'smooth'
    });
  };

  const [scrollPosition, setScrollPosition] = useState(0);

    useEffect (() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    const islandStyle = {
        margin : '5px 10%',
        position : 'sticky',
        top : '0',
        zIndex : '1000',
        display : 'flex',
        border : '2px solid #1B2430',
        borderRadius : '20px',
        background: '#1B2430',
        boxShadow:  `4px -4px 10px #96999c,
                      -4px 4px 10px #96999c`,
        transition : '0.6s',
        justifyContent : 'space-evenly'

    }
    const normalNavStyle = {
      backgroundColor: '#1B2430',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-evenly',
      transition : '0.6s',
      padding : ' 0px 10%',
    }

    const styleNavBar = {
      position : 'sticky',
      top : '0',
      justifyContent : 'center',
      zIndex : '1000'
    }

    const onScrollStyleNavBar = {
      position : 'sticky',
      top : '0',
      justifyContent : 'center',
      zIndex : '1000',
      paddingTop : '3px'
    }
  return (
    <div style={ scrollPosition  >10 ? onScrollStyleNavBar: styleNavBar} className='nav_bar'>
      <div style={scrollPosition >10 ? islandStyle : normalNavStyle } className='navbar_singleapp'>
          <img style = {scrollPosition > 10 ? {marginTop : '10px'} : {margin: '10px 10px 10px 2px'}} className='navbar_list_1' src = {leftroad} alt='' height="50" width = "75" />
          <ul className='navbar_list_2'>
            {refElements.map((item, index) => {
              return <li onClick={ () => scrollToSpecificSection(item)} className = "navbar_listItem" key = {index}> {navListNames[index]} </li>
            })}
          </ul>
          <ul className='navbar_list_3'>
              <li className='navbar_listItem'> Careers </li>
              <button onClick={ () => scrollToSpecificSection(refElements[5])} className='contact_button'>Contact us</button>
          </ul>
      </div>
    </div>
  )
}