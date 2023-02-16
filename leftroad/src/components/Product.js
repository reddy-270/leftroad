import React from 'react'
import "./Product.css"
import { ProductCard } from './ProductCard.js'
import icon1 from "../assets/product_1.svg"
import icon2 from "../assets/product_2.svg"
import icon3 from "../assets/product_3.svg"
import icon4 from "../assets/product_4.svg"
const Product = React.forwardRef((props, ref) => {

  const icons = [icon1, icon2, icon3, icon4];
  const cardHeading = ["Mobile Apps", "Websites", "Desktop Apps", "Software Solutions"];
  const cardPara = [
    "Experience seamless and intuitive mobile application development with our software company. From ideation to launch, our experts deliver custom solutions to empower your business on the go. Let's build your next success story together.",
    "Transform your digital presence with our innovative web application development solutions. From elegant designs to powerful functionality, our software company delivers bespoke products that elevate your online experience. Let's create a dynamic and scalable platform for your business",
    "Revolutionize the way you work with our cutting-edge desktop application development. From simple utilities to complex systems, our software company creates tailor-made solutions that improve your productivity and efficiency. Let's bring your vision to life and empower your business for success.",
    "At our software company, we craft custom solutions to address your unique business challenges. Our team of experts develops innovative software that maximizes your performance and enhances your customer experience. Let's collaborate and build a better tomorrow for your enterprise"
  ];

  const colorsList = ['#F09D6E', '#7CC9CE', '#F370CE', '#8DD980']
  const backColorList = ['#C69A8180', '#2C434E', '#F370CE33', '#3D5445'];

  return (
    <div ref = {ref} className='product'>
      <div className='product_div'>
        <div className='product_div_text'>
          <p className='product_heading'>Our <span style={{color : '#8DD980'}}>Products</span></p>
          <p className='product_text'>We specialize in delivering bespoke mobile, web, and desktop applications that transform the way you do business. Our team of skilled professionals works with you to understand your specific requirements and develop tailored solutions that take your enterprise to the next level.</p>
          <p className='product_text'>
Whether you need a sleek and functional mobile application, a dynamic web platform, or a comprehensive desktop software, we have the expertise to deliver. We pride ourselves on our ability to turn your ideas into reality, with cutting-edge technology and unparalleled customer service.</p>
<p className='product_text'>
Join us on a journey of success, as we create software solutions that drive your business forward. Let's collaborate and innovate together.</p>
        </div>
        <div className='product_div_cards'>
          {icons.map((item, index) => {
            return <ProductCard icon = {icons[index]} text = {cardHeading[index]} para = {cardPara[index]} color = {colorsList[index]} backColor = {backColorList[index]} key = {index} />
          })}
        </div>
      </div>
    </div>
  )
})

export default Product