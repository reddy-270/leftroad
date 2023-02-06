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
    "The ultimate solution for businesses looking to take their digital presence to the next level. With our cutting-edge technology and team of expert developers, we can create custom mobile apps that are tailored to your specific needs and designed to drive real results. Don't settle for a generic, off-the-shelf app that doesn't fully meet the needs of your business. Choose our mobile application development product and experience the difference of a truly custom solution.",
    "Are you ready to take your online presence to the next level? Look no further than our website development product. Our team of expert designers and developers will work with you to create a custom website that is not only visually stunning but also fully optimized to drive conversions and engage your audience. Don't settle for a cookie-cutter website that doesn't fully represent your brand. Choose our website development product and see the difference a custom solution can make. Contact us today to schedule a free consultation and learn more about how we can help you achieve your online goals.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
  ];

  const colorsList = ['#F09D6E', '#7CC9CE', '#F370CE', '#8DD980']
  const backColorList = ['#C69A8180', '#2C434E', '#F370CE33', '#3D5445'];

  return (
    <div ref = {ref} className='product'>
      <div className='product_div'>
        <div className='product_div_text'>
          <p className='product_heading'>Our <span style={{color : '#8DD980'}}>Products</span></p>
          <p className='product_text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
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