import React, {useEffect, useRef, useState} from 'react'
import "./DevCard.css"
import { useInView } from 'react-intersection-observer';

export const DevCard = (props) => {

    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold : 1,
      });

    const color = props.color;
    const backColor = props.backColor;
    const styleDevCard = {
        overflow : 'hidden',
        zIndex : '0',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '350px',
        height: '380px',
        border: `2px solid ${color}`,
        borderRadius : '12px',
        color : 'white',
        margin : '15px',
        padding : '5px',
        backgroundColor : isHover ? `${color}` : '#1B2430',
        transition : '1s',
    };
    const mobileStyleDevCard = {
        overflow : 'hidden',
        zIndex : '0',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '360px',
        height: '360px',
        border: `2px solid ${color}`,
        borderRadius : '12px',
        color : 'white',
        margin : '15px',
        padding : '5px',
        backgroundColor : inView ? `${color}` : '#1B2430',
        transition : '1s',
    }
    const styleDevIcon = {
        position : 'relative',
        height : '50px',
        width : '50px',
        zIndex : '1000', 
        transform : 'translate(0px, 80px)',
        justifyContent : 'center',
        alignItems : 'center'
    };
    const styleDevRound = {
        zIndex : '0',
        width: '60px',
        height: '60px',
        border: `5px solid ${color}`,
        transition : '1s' ,
        backgroundColor: isHover ? `${backColor}` : 'black',
        borderRadius: '50px',
        padding: '15px',
    };

    const mobileStyleDevRound = {
        zIndex : '0',
        width: '60px',
        height: '60px',
        border: `5px solid ${color}`,
        transition : '1s' ,
        backgroundColor: inView ? `${backColor}` : 'black',
        borderRadius: '50px',
        padding: '15px',
        alignSelf : 'auto'
    }
    const styleDevCircle = {
        zIndex : '-100',
        position : 'relative',
        width: '450px',
        height : '500px',
        backgroundColor: `${color}`,
        clipPath: 'ellipse(55% 50%)',
        transform : windowSize.current[0] <=750 ? 'translate(-60px, -400px)' : 'translate(-50px , -370px)'
    }
    const styleRemaining = {
        position : 'relative',
        transform : windowSize.current[0] <= 750 ? "translate(0px, -515px)" : "translate(0px, -480px)",
        zIndex : '1000'
    }

    return (
    <div ref={ref} style={ windowSize.current[0] <= 750 ? mobileStyleDevCard : styleDevCard} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} className= {`dev_card`}>
        <div style = {styleDevCircle} className='dev_circle'></div>
        <div style = {styleRemaining}>
            <img style={styleDevIcon} className='dev_icon' src={props.icon} alt = "" />
            <div style={{display : 'flex', justifyContent : 'center'}}>
                <div style={ windowSize.current[0] <= 750 ? mobileStyleDevRound : styleDevRound}></div>
            </div>
            <p style={{fontSize : '1.7em', fontWeight : '500', margin : '15px 10px'}}>{props.heading}</p>
            <p style={{textAlign : 'left', padding : '5px 25px'}}>{props.para}</p>
        </div>
    </div>
  )
}
