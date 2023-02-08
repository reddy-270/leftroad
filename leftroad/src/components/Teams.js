import React, {useState} from 'react'
import { TeamCard } from './TeamCard'
import './Teams.css'
import yash from '../assets/yash.jpg'
import nihal from "../assets/nihal.jpeg"
const Teams = React.forwardRef((props, ref) => {

  const [browserZoomLevel, setBrowserZoomLevel] = useState(0);

  console.log(browserZoomLevel)
  window.addEventListener('resize', () => {
    const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
    console.log(browserZoomLevel)
    setBrowserZoomLevel(browserZoomLevel);
  })

  const teamImages = [nihal, yash, nihal];
  const teamMemNames = ['Nihal Puram', 'Yash Ranwe', 'Anish'];
  const teamMemJob = ['Manager', 'Manager', 'Manager']
  const teamMemLinkedinUrl = ['https://www.linkedin.com/company/leftroad/', 'https://www.linkedin.com/company/leftroad/', 'https://www.linkedin.com/company/leftroad/']
  return (
    <div ref={ref} className='team'>
      <div style={{display : 'flex', justifyContent : 'center'}}>
        <div style={{display : 'flex', justifyContent : 'left', width : '1150px'}}>
          <p style={browserZoomLevel >= 220 ? {paddingLeft : '4%'} : {}} className='team_heading'>Our <span style={{color : '#F370CE'}}>Team</span></p>
        </div>
      </div>
      <div className='team_cards'>

        {teamImages.map((item, index) => {
          return <TeamCard imageName = {teamImages[index]} memName = {teamMemNames[index]} memJob = {teamMemJob[index]} memLinkedinUrl = {teamMemLinkedinUrl} key = {index} />
        })}
      </div>
    </div>
  )
})

export default Teams