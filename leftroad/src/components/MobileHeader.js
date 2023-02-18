import React, { useRef, useState, useEffect, forwardRef } from 'react'
import left_raod from "../assets/left_road_svg.svg"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useScrollBy } from 'react-use-window-scroll';

const MobileHeader = forwardRef((props, ref) => {

  const navRefs = props.navEleRefs
  const [scrollPosition, setScrollPosition] = useState(0);

    useEffect (() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    const scrollBy = useScrollBy();
  const [clickState, setClickState] = useState(false);
  const scrollToSpecificSection = (elementRef, eRef) => {
    const x = eRef.current.offsetTop
    const y = elementRef.current.offsetTop
    let topp = x;
    x > y ? topp = -(x-y) - 100 : topp = (y-x)-100
    scrollBy({top : topp, behavior : 'smooth'})
  };

  const navListNames = ['Home', 'About us', 'Products', 'Development', 'Our Team', 'Referrals'];
  const windowSize = useRef([window.innerHeight, window.innerHeight]);
  const styleMobileHeaderInside = {
    display : 'flex',
    justifyContent : 'space-between',
  };
  const styleMobileHeader = {
    marginBottom : '10px',
    padding : '20px 10px 5px 10px',
    position : 'sticky',
    top : '0',
    zIndex : '100',
    transition : '0.6s'
  }

  const onScrollStyleMobileHeader = {
    padding : '5px',
    position : 'sticky',
    top : '0',
    zIndex : '100',
    transition : '0.6s'
  }

  const onScrollStyleMobileHeaderInside = {
    backgroundColor : '#1B2430',
    margin : '5px',
    position : 'sticky',
    top : '0',
    zIndex : '100',
    display : 'flex',
        border : '2px solid #1B2430',
        borderRadius : '20px',
        background: '#1B2430',
        boxShadow:  `4px -4px 10px #96999c,
                      -4px 4px 10px #96999c`,
        transition : '0.6s',
    justifyContent : 'space-between',
  }

  const styleHam = {
    fontSize : '2em',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    padding : '20px',
    paddingRight : '5%'
  }

  const styleNavBar = {
    height : '100vh' ,
    width : '75%',
    backgroundColor : 'black',
    position : 'fixed',
    right : clickState ? '0px' : `-${windowSize.current[0]}px`,
    top : '0px',
    transition : '0.3s',
    padding : '15px',
    zIndex : '1000'
  }

  const styleTimes = {
    display : 'flex', 
    justifyContent : 'flex-end', 
    fontSize : '2em',
    padding : '15px'
  }
  const styleRuler = {
    color : 'gray',
    border :'1px solid gray',
    filter : 'blur(0.6px)',
    width : '255px',
    height : '0.2px'
  }
  const styleListItem = {
    listStyle: 'none',
    margin: '10px',
    padding: '10px',
    cursor: 'pointer',
  }

  return (
    <div ref = {ref} style={ scrollPosition >5 ? onScrollStyleMobileHeader : styleMobileHeader} className='mobile_header'> 
      <div style={ scrollPosition >5 ? onScrollStyleMobileHeaderInside : styleMobileHeaderInside} className='mobile_header_inside'>
        <div onClick={() => scrollToSpecificSection(navRefs[0], props.hRef)} style={{paddingLeft : '4%'}}> 
          <img src={left_raod} alt = '' ></img>
        </div>
        <div style={styleHam}>
          <FontAwesomeIcon onClick = {() => setClickState(true)} icon= {faBars} />
        </div>
      </div>
      <div style={styleNavBar} id='nav_bar'>
        <div style={styleTimes}> 
          <FontAwesomeIcon onClick={() => setClickState(false)} style={{border : '1px solid white', borderRadius  : '50%', height : '30px', width : '30px', padding :'5px'}} icon={faTimes} />
        </div>
        <ul style={{listStyle : 'none', paddingLeft : '10px'}}>
          {props.navEleRefs.map((item, index) => {
              return <div>
                <hr style={styleRuler}></hr>
                <li style={{padding : '8px 15px', cursor : 'pointer'}} onClick={ () => {scrollToSpecificSection(item, props.hRef); setClickState(false)}} className = "navbar_listItem" key = {index}> {navListNames[index]} </li>
              </div>
            })}
        </ul>
        <ul className='navbar_list_3'>
              <li style={styleListItem} className='navbar_listItem'> Careers </li>
              <button onClick={ () => {scrollToSpecificSection(props.navEleRefs[5], props.hRef); setClickState(false)}} className='contact_button'>Contact us</button>
        </ul>
      </div>
    </div>
  )
})

export default MobileHeader
