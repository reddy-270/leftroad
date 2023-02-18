import React, { useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
export const ProductCard = (props) => {

    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const color = props.color;
    const backColor = props.backColor

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold : 0.9,
      });

    const mobileStyleCard = {
        width: '335px',
        height: '420px',
        margin: '30px 0px',
        border: `4px solid ${color}`,
        borderRadius: '12px',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: inView ? `${color}` : `${backColor}`,
        transition : '0.7s' ,
        padding : '2px',
    }
    const styleCardDiv = {
        width: '300px',
        height: '420px',
        margin: '30px 15px',
        border: `4px solid ${color}`,
        borderRadius: '12px',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: isHover ? `${color}` : `${backColor}`,
        transition : '0.7s' ,
        padding : '2px',
    };

    const styleCard = {
        transform: 'translate(-2px, -125px)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px',
        height: '50px',
    }

    const styleText = {
        transform : 'translate(0px, -110px)',
        padding : ' 0px 10px'

    }
    const styleRound = {
        textAlign : 'center',
        transform: 'translate(97px, -50px)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px',
        border: isHover ? '5px solid #1B2430' :`5px solid ${color}`,
        transition : '0.7s' ,
        backgroundColor: `${color}`,
        borderRadius: '50px',
        padding: '15px'
    }
    const mobileStyleRound = {
        textAlign : 'center',
        transform: 'translate(115px, -50px)',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px',
        border: inView ? '5px solid #1B2430' :`5px solid ${color}`,
        transition : '0.7s' ,
        backgroundColor: `${color}`,
        borderRadius: '50px',
        padding: '15px'
    }
  return (
    <div ref = {ref} style={ windowSize.current[0] <750 ? mobileStyleCard: styleCardDiv } onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} className='product_card'>
        <div style={ windowSize.current[0] <750 ?mobileStyleRound : styleRound} className='round'></div>
        <img style={styleCard} src={props.icon} alt = '' />
        <div style={styleText} className='product_card_text'>
            <h2> {props.text} </h2>
            <p style={{textAlign : 'left', fontSize : '1.12em', margin : '5px 0px'}}> {props.para} </p>
        </div>
    </div>
  )
}
