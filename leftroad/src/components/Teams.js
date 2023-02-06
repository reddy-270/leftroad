import React from 'react'
import { TeamCard } from './TeamCard'
import './Teams.css'
import team1 from '../assets/team.jpg'
const Teams = React.forwardRef((props, ref) => {
  // const teamImages = [team1];
  // const teamMemNames = ['Bharath'];
  // const teamMemJob = ['React developer']
  // const teamMemLinkedinUrl = ['https://www.linkedin.com/company/leftroad/']
  return (
    <div ref={ref} className='team'>
      <p className='team_heading'>Our <span style={{color : '#F370CE'}}>Team</span></p>
      <div className='team_cards'>
        <TeamCard 
          imageName = {team1}
          memName = 'Bharath' 
          memJob = 'React Developer'
          memLinkedinUrl = 'https://www.linkedin.com/company/leftroad/'
          />
          <TeamCard 
          imageName = {team1}
          memName = 'Bharath' 
          memJob = 'React Developer'
          memLinkedinUrl = 'https://www.linkedin.com/company/leftroad/'
          />
          <TeamCard 
          imageName = {team1}
          memName = 'Bharath' 
          memJob = 'React Developer'
          memLinkedinUrl = 'https://www.linkedin.com/company/leftroad/'
          />
      </div>
    </div>
  )
})

export default Teams