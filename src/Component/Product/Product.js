import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import '../../Component/Product.css'
import Avatar1 from '../Images/1.png'
import Avatar2 from '../Images/2.jpg'
import Avatar3 from '../Images/3.jpg'
import Avatar4 from '../Images/4.jpg'






// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };



function Product() {
  return (
    <div className="Courasel_Container">
        <h2>Supporting Brands</h2>
        <Carousel autoplay effect="fade">
            <div className="First_Slide">
                <img src={Avatar1} alt="Image1" style={{
                    height:"100%",
                    width:"100%"
                }}/>
            </div>

            <div className="Second_Slide">
                <img src={Avatar2} alt="Image2" style={{
                    height:"100%",
                    width:"100%"
                }}/>
            </div>

            <div className="Third_Slide">
                <img src={Avatar3} alt="Image3" style={{
                    height:"100%",
                    width:"100%"
                }}/>
            </div>

            <div className="Fourth_Slide">
                <img src={Avatar4} alt="Image4" style={{
                    height:"100%",
                    width:"100%"
                }}/>
            </div>

            {/* <div className="Fifth_Slide">
                <img src={Avatar1} alt="Image5" style={{
                    height:"100%",
                    width:"100%"
                }}/>
            </div> */}
        </Carousel>
    </div>
  );
}

export default Product;