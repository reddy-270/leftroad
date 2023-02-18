import React, {useRef} from 'react'
import "./Header.css"
import leftroad from "../assets/left_road_svg.svg"
import { useEffect, useState } from 'react'
import {useScrollBy} from "react-use-window-scroll"

const Header = React.forwardRef((props, ref) => {

  const refElements = props.navEleRefs;
  const navListNames = ['Home', 'About us', ' Our Products', 'Development', 'Our Team', 'Referrals']
  
  const scrollBy = useScrollBy();
  const scrollToSpecificSection = (elementRef, eRef) => {
    const x = eRef.current.offsetTop
    const y = elementRef.current.offsetTop
    let topp = x;
    x > y ? topp = -(x-y) - 100 : topp = (y-x)-100
    scrollBy({top : topp, behavior : 'smooth'})
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
  
    const windowSize = useRef([window.innerWidth, window.innerHeight])
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
      paddingTop : '6px'
    }
    const styleListItem = {
      listStyle: 'none',
      margin: '10px',
      padding: '10px',
      cursor: 'pointer',
    }
    const styleListItemZoom = {
      listStyle: 'none',
      margin: '10px 5px',
      padding: '10px 5px',
      cursor: 'pointer',
    }
  return (
    <div ref = {ref} style={ scrollPosition  >10 ? onScrollStyleNavBar: styleNavBar} className='nav_bar'>
      <div style={scrollPosition >10 ? islandStyle : normalNavStyle } className='navbar_singleapp'>
          <img onClick={() => scrollToSpecificSection(props.navEleRefs[0], props.hRef)} style = {scrollPosition > 10 ? {marginTop : '10px'} : {margin: '10px 10px 10px 2px'}} className='navbar_list_1' src = {leftroad} alt='' height="50" width = "75" />
          <ul className='navbar_list_2'>
            {refElements.map((item, index) => {
                return <li style={windowSize.current[0] <1180 ?styleListItemZoom : styleListItem} onClick={ () => scrollToSpecificSection(item, props.hRef)} className = "navbar_listItem" key = {index}> {navListNames[index]} </li>
            })}
          </ul>
          <ul className='navbar_list_3'>
              <li style={styleListItem} className='navbar_listItem'> Careers </li>
              <button onClick={ () => scrollToSpecificSection(refElements[5], props.hRef)} className='contact_button'>Contact us</button>
          </ul>
      </div>
    </div>
  )
})

export default Header