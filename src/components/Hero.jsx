import React from 'react';

import styled,{ keyframes } from 'styled-components';

import HeroImg from '../assets/image/Item → slideshow-21.png.png'




const Hero = () => {
  return (
    <Section>
      <Left>
        <SmallTag>Create your own</SmallTag>
        <Title>Make the most of printing</Title>
        <Paragraph>What’s more, we do it right! A full administration printing background. Print shirts for yourself or your online business</Paragraph>
        <Buttons>
          <ShopNowButton>
            Shop Now
          </ShopNowButton>
          <HowButton>
            How We Work 
          </HowButton>
        </Buttons>
        <Stats>
          <StatItem>
            <h2>4k+</h2>
            <p>Collections</p>
          </StatItem>
          <StatItem>
            <h2>9k+</h2>
            <p>Items trusted to deliver</p>
          </StatItem>
        </Stats>
      </Left>

      <Right>
        <img src={HeroImg} alt="Hero" />
        {/* <ProductCard>
          
          <p>Adult Quality Tee<br/>$29.00</p>
        </ProductCard> */}
        {/* <Badge>3000+<br/>Products</Badge> */}
      </Right>
    </Section>
  );
};

export default Hero;

const float = keyframes`
  0%{transform: translatey(0px);}
  50% {transform: translatey(-10px);}
  100% {transform: translatey(0px);}
`
const fadeIn = keyframes`
  from{opacity:0;}
  to{opacity:1}

`
const Section =styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 60px 40px;
  max-width: 1500px;
  margin: auto;

`
const Left =styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 20px;

`
const SmallTag =styled.span`
   background: #eae2f8;
  color: #7f56d9;
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 20px;
  width: fit-content;
  font-weight: 500;
` 
const Title=styled.h1`
color: #111;

`
const Paragraph = styled.p`
  color: #555;
  font-size: 16px;
  line-height: 1.6;

`
// const ShopNowButton=styled.button`
//   background: #22c55e;
//   color: white;
//   border: none;
//   padding: 12px 20px;
//   font-size: 14px;
//   border-radius: 6px;
//   cursor: pointer;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   &:hover {
//     background: #16a34a;
//   }
// `
const Buttons=styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`
const ShopNowButton =styled.button`
    background: #22c55e;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    &:hover{
      background: #16a34a;
    }
    `
    const HowButton = styled.button`
      background: none;
      color: #111;
      border: 1px solid #ccc;
      padding: 12px 20px;
      font-size: 12px;
       border-radius: 6px;
       cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 6px;

      &:hover{
         background: #f1f1f1;
      }
`
    const StatItem=styled.div`
      text-align: left;

      h2{
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        color: black;

      }
      p{
        margin: 0;
        color: #555;
        font-size: 14px;

      }
    `
    const Stats=styled.div`
      display: flex;
      gap: 30px;
      margin-top: 20px;
      flex-wrap: wrap;

    `
    const Right=styled.div`
      position: relative;
      max-width: 550px;
      width: 100%;
      margin-top: 20px;

      img{
        width: 100%;
        border: 8px;
        animation: ${fadeIn} 1s ease forwards, ${float} 4s ease-in-out infinite;
      }
    `

    const ProductCard=styled.div`
      position: absolute;
      bottom: 20px;
      left: 20px;
      background: white;
      border-radius: 8px;
        padding: 8px;
        width: 140px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        text-align: center;

        img{
          width: 100%;
          border-radius: 6px;

        }
        p{
          margin: 6px 0 0;
          font-size: 12px;
          color:#333

        }
    `

    const Badge=styled.div`
      position: absolute;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(90deg, #ff7ce5, #6a5af9);
      color: white;
      border-radius: 50%;
      padding: 20px;
      font-size: 12px;
      text-align: center;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    `

