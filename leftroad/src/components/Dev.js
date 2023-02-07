import React from 'react'
import "./Dev.css"
import icon1 from "../assets/dev_1.svg"
import icon2 from "../assets/dev_2.svg"
import icon3 from "../assets/dev_3.svg"
import icon4 from "../assets/dev_4.svg"
import icon5 from "../assets/dev_5.svg"
import icon6 from "../assets/dev_6.svg"
import { DevCard } from './DevCard'

const Dev = React.forwardRef((props, ref) => {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  const colors = ["#4C93CE", "#FF997E", "#96D7B0", "#F06E92", "#ECC879", "#A377CF"];
  const headings = ["Analyse", "Design", "Develop", "Test", "Launch", "Support"];
  const paras = [
    "Our team reviews & analyzes the project requirements and prepares a statement of work document. Our SOW details out project cost and timeline of various use cases/modules of the mobile app.", 
    "Once the Master Services Agreement (MSA) is in place, our design team works on application workflow & user experience. We provide low & high-fidelity designs of the mobile app.", 
    "Our team of Mobile engineers, API, and Integration specialists, and Full Stack engineers work together to complete the mobile application development. We follow agile methodology.", 
    "We deliver high-quality and defect-free applications to our clients. Our dedicated team of Quality Assurance Engineers & Mobile tester thoroughly test and validate the business requirement of the project.", 
    "We help our clients to go live with the app. We deploy API to our client’s cloud server (AWS, Google Cloud, Azure) and publish. the app to the Apple App Store & Google Play Store.",
    "We provide 30 days free support once you go live. Long term support can be offered on an affordable monthly cost."
  ]
  const backColor = ["#7DA7D4", "#F3B19C", "#B6DEC2", "#E590A8", "#EBD49C", "#AF93D4"]
  return (
    <div ref = {ref} className='development'>
      <div className='dev_text'>
        <p className='dev_heading'>Our <span style={{color : '#ECC879'}}>Development Process</span></p>
        <p className='dev_para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className='dev_cards'>
        {icons.map((item, index) => {
          return <DevCard  icon = {icons[index]} color = {colors[index]} backColor = {backColor[index]} heading = {headings[index]} para = {paras[index]} key = {index} />
        })}
      </div>
    </div>
  )
})

export default Dev