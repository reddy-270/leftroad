import React from 'react'
import './TeamCard.css'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const TeamCard = (props) => {
  return (
    <div className='team_card'>
        <img className='team_card_image' src = {props.imageName} alt = '' />
        <div className='team_card_text'>
            <div>
                <p style={{fontSize : '2em', margin : '15px 5px'}}>{props.memName}</p>
                <p style={{fontSize : '1.2em', margin : '15px 5px'}}>{props.memJob}</p>
            </div>
            <div className='icon_linkedin'>
                <a target='_blank' rel='noopener' className='icon_link' href={props.memLinkedinUrl}> <FontAwesomeIcon height={32} width = {38} icon={faLinkedinIn} /></a>
            </div>
        </div>
    </div>
  )
}
