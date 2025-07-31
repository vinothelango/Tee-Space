import React from 'react'
import Img1 from '../assets/image/Link (4).png'
import Img2 from '../assets/image/banner-decor-21.jpg.png'
import Img3 from '../assets/image/banner-decor-22.jpg.png'
import Img4 from '../assets/image/banner-decor-24.jpg.png'
import Img5 from '../assets/image/banner-decor-25.jpg.png'
import Img6 from '../assets/image/banner-decor-26.jpg.png'
import styled from 'styled-components'


const Vacation = () => {
  return (
    <Maincontent>
      <Maincontains1>
      <Imgbox1>
      <img src={Img1} alt=""  /></Imgbox1>
        <Imgbox2>
      <img src={Img2} alt=""  /></Imgbox2>
       <Imgbox3>
      <img src={Img3} alt=""  /></Imgbox3>
        <Imgbox4>
      <img src={Img4} alt=""  /></Imgbox4>
        <Imgbox5>
      <img src={Img5} alt=""  /></Imgbox5>
        <Imgbox6>
      <img src={Img6} alt=""  /></Imgbox6>

      <Subcontent>
        <Head>
          Enjoy up your vacations in the best T-Shirts
        </Head>
        <Pa>
          T-shirts that keep you moving 
        </Pa>
        <Buttons>
          <But1>
              Shop Now
          </But1>
          <But2>
              Contact Us
          </But2>
        </Buttons>
      </Subcontent>
      </Maincontains1>


       
  </Maincontent> 
 
  )
}


export default Vacation

const Maincontent=styled.div`
  display: flex;
  background-color: #e1dfdf;
  justify-content: center;

  
`
const Maincontains1=styled.div`
    display: flex;
  background-color: #e1dfdf;
  justify-content: center;
 height: 600px;
`
const Imgbox1=styled.div`
  position: absolute;
  left: 10px;
  

`
const Imgbox2=styled.div`
  position: absolute;
  left: 370px;
  margin-top: 300px;
  padding: 20px;
  img{
    width: 162px;
    height: 210px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

`
const Imgbox3=styled.div`
  position: absolute;
  right: 0;
  margin-top: 180px;

  img{
    border-radius: 10px 0 0 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`
const Imgbox4=styled.div`
  position: absolute;
  left:0;
  
 margin-top: 280px;
 img{
  border-radius:0 10px 10px 0 ;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
 }
`
const Imgbox5=styled.div`
  position: absolute;
  right: 300px;

  img{
    border-radius: 0 0 10px 10px ;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`
const Imgbox6=styled.div`
  position: absolute;
  right: 330px;
  margin-top: 420px;

  img{
    border-radius: 10px 10px 0 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`

const Subcontent=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  width: 60%;
  text-align: center;
  margin-top:-100px ;
`
const Head=styled.h2`
  width: 100%;
  font-size: 35px;
`
const Pa=styled.p`
  color: gray;
  font-size: 20px;
`
const Buttons=styled.div`
  padding: 10px;
  gap: 10px;
`
const But1=styled.button`
  background-color: #2EBB77;
`
const But2=styled.button`
  margin-left: 8px;
  background-color: white;
  color: black;
`
const Socialmedia=styled.div`
  display: flex;
  
`
const P1=styled.p`
  
`