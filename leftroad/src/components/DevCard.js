import React, {useState} from 'react'

export const DevCard = (props) => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const color = props.color;
    const backColor = props.backColor;
    const styleDevCard = {
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
        transition : '0.7s'
    };
    const styleDevIcon = {
        height : '50px',
        width : '50px',
        zIndex : 100,
    };
    const styleDevRound = {
        zIndex : '100',
        transform : 'translate(125px, 50px)',
        textAlign : 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px',
        border: `5px solid ${color}`,
        transition : '0.7s' ,
        backgroundColor: isHover ? `${backColor}` : 'black',
        borderRadius: '50px',
        padding: '15px'
    };
  return (
    <div  style={styleDevCard} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} className='dev_card'>
        <div className='dev_circle'></div>
        <div style={styleDevRound}></div>
        <img style={styleDevIcon} className='dev_icon' src={props.icon} alt = "" />
        <p>{props.heading}</p>
        <p>{props.para}</p>
    </div>
  )
}
