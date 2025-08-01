import React from 'react'
import styled from 'styled-components'
import HEADS from '../assets/image/Link → logo-black.png.png'
import Payment from '../assets/image/footer-payment-method.png.png'

const Footer = () => {
  return (
    <Maincontent>
        <Subcontent>
        <Address>
            <img src={HEADS} alt="" />
            <P1>
                hello@teespace.io
            </P1>
            <P2>+91 9279 0000 8000</P2>
            
            <P3>3665 Paseo Place, Suite 0960
San Diego</P3>
        </Address>
        <Info>
            <InfoH>Information</InfoH>
            <Link1>About Us</Link1>
            <Link2>Our Blog</Link2>
            <Link3>Start a return</Link3>
            <Link4>Contact Us</Link4>
            <Link5>Shipping FAQ</Link5>
        </Info>
        <Links>
            <LinkH>Useful links</LinkH>
            <Link1>My Account</Link1>
            <Link2>Print Provider</Link2>
            <Link3>Become a Partner</Link3>
            <Link4>Custom Products</Link4>
            <Link5>Make your Own shirt</Link5>
        </Links>
        <News>
            <NewH>Newsletter</NewH>
            <Pa>Get the latest news, events & more delivered
to your inbox.</Pa>
            <input type="text" placeholder='Your Email Address' style={{backgroundColor:'white',boxShadow:"0 4px 20px rgba(0, 0, 0, 0.3)", padding:"12px",borderRadius:"10px", color:"black"}} />
        </News>
        </Subcontent>
        <img src={Payment} alt="" style={{cursor:'pointer'}}/>
        <Auth>
            © 2025 TeeSpace. All rights reserved.
        </Auth>
    </Maincontent>
  )
}

export default Footer
const Maincontent=styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px;
 gap: 40px;
 align-items: center;
 justify-content: center;
 background-color: #f5f4f4;

`
const Subcontent=styled.div`
    display: flex;
    margin-top: 50px;
`
const Address = styled.div`
    align-items: center;
    margin-right: 40px;
    color: black;
`
const P1=styled.p`
    color: gray;
        cursor: pointer;
      &:hover {
    color: #0d9488;
  };
`
const P2=styled.p`
    color:black;font-size:18px;
    font-weight: bold;

`
const P3=styled.p`
    color: gray;
    width: 75%;
        cursor: pointer;
      &:hover {
    color: #0d9488;
  };
`
const Info=styled.div`
         margin-left: 40px;
    margin-right: 40px;
    
`
const InfoH=styled.h3`
    color: black;
`
const Links=styled.div`
         margin-left: 40px;
    margin-right: 40px;
    color: black;
   
`
const LinkH=styled.h3`
    
`
const Auth=styled.p`
    color: #7E7E7E;
`
const News=styled.div`
        margin-left: 40px;
    margin-right: 40px;
`
const NewH=styled.h3`
    color: black;
`
const Pa=styled.p`
    color: gray;
    width: 80%;
        cursor: pointer;
      &:hover {
    color: #0d9488;
  };
`
const Link1 =styled.p`
    color: gray;

    cursor: pointer;
      &:hover {
    color: #0d9488;
  };
`
const Link2 =styled.p`
    color: gray;
        cursor: pointer;
      &:hover {
    color: #0d9488;
  };
`
const Link3 =styled.p`
    color: gray;
        cursor: pointer;
      &:hover {
    color: #0d9488;
  };
`
const Link4 =styled.p`
    color: gray;
        cursor: pointer;
      &:hover {
    color: #0d9488;
  };
`
const Link5 =styled.p`
    color: gray;
        cursor: pointer;
      &:hover {
    color: #0d9488;
  };
`
