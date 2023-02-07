import React from 'react'
import { TeamCard } from './TeamCard'
import './Teams.css'
import yash from '../assets/yash.jpg'
import nihal from "../assets/nihal.jpeg"
const Teams = React.forwardRef((props, ref) => {
  const teamImages = [nihal, yash, nihal];
  const teamMemNames = ['Nihal Puram', 'Yash Ranwe', 'Anish'];
  const teamMemJob = ['Manager', 'Manager', 'Manager']
  const teamMemLinkedinUrl = ['https://www.linkedin.com/company/leftroad/', 'https://www.linkedin.com/company/leftroad/', 'https://www.linkedin.com/company/leftroad/']
  return (
    <div ref={ref} className='team'>
      <p className='team_heading'>Our <span style={{color : '#F370CE'}}>Team</span></p>
      <div className='team_cards'>

        {teamImages.map((item, index) => {
          return <TeamCard imageName = {teamImages[index]} memName = {teamMemNames[index]} memJob = {teamMemJob} memLinkedinUrl = {teamMemLinkedinUrl} key = {index} />
        })}
      </div>
    </div>
  )
})

export default Teams