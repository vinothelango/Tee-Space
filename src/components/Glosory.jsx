import React from 'react'
import styled,{ keyframes }  from 'styled-components'
import Image from '../assets/image/banner-24.png.png'
import Laps from '../assets/image/banner-25.png.png'
const Glosory = () => {
  return (
    <Maincontainer>
        <Subcontains>
        <Contains1>
            <img src={Image} alt="" />
        </Contains1>
        <Contains2>
            <Title>
            Free and easy way to
bring your ideas to life
            </Title>
            <Para>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facilis.
            </Para>
            <BUTTON>Get Started</BUTTON>
            
        </Contains2>
        </Subcontains>
            <TEXTAREA>
                <Tite>
                    T-shirt printing made easy.
                </Tite>
                <Texts>Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix
adipiscing eliet, cowec tetopak</Texts>
            </TEXTAREA>
            <BotContains>
                <Constains3>
                    <Card>
                    <Premimum>Premium quality custom t-shirts</Premimum>
                    {/* <Line>Lorem ipsum det, cowec tetur duis necgi det, consec t
eturlagix adipiscing eliet</Line> */}
                    </Card>
                    <Card1>
                    <Premimum>Easy to create & customize</Premimum>
                    <Line>Lorem ipsum det, cowec tetur duis necgi det, consec t
eturlagix adipiscing eliet</Line>

                    </Card1>
                    <Card>
                        <Premimum>Thousands of free templates</Premimum>
                    {/* <Line>Lorem ipsum det, cowec tetur duis necgi det, consec t
eturlagix adipiscing eliet</Line> */}
                    </Card>
                    <Card>
                        <Premimum>Free standard shipping</Premimum>
                    {/* <Line>Lorem ipsum det, cowec tetur duis necgi det, consec t
eturlagix adipiscing eliet</Line> */}
                    </Card>
                    
                </Constains3>
                <Constains4>
                    <img src={Laps} alt="" />
                </Constains4>
            </BotContains>


    </Maincontainer>
  )
}

export default Glosory

const float = keyframes`
  0%{transform: translatex(0px);}
  50% {transform: translatex(-15px);}
  100% {transform: translatex(0px);}
`
const fadeIn = keyframes`
  from{opacity:0;}
  to{opacity:1}

`

const Maincontainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f9fafb;
    color: #000;
    
`
const Subcontains = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f9fafb;
    color: #000;
`

const Contains1=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px;
    width: 700px;
    img{
        width: 100%;
        border: 8px;
        animation: ${fadeIn} 1s ease forwards, ${float} 4s ease-in-out infinite;
      }
`
const Contains2=styled.div`
       display: flex
;
    width: 450px;
    height: 574px;
    gap: 30px;
    align-items: baseline;
    flex-direction: column;
    justify-content: center;
`
const Title=styled.h1`
    
`
const Para=styled.p`
    
`
const BUTTON=styled.button`
   background-color: #22c55e;
   border: none;
`

const TEXTAREA=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center ;
    text-align: center;
    

`
const Tite=styled.h1`
    
`
const Texts=styled.p`
    width: 80%;
    
`

const BotContains=styled.div`
    display: flex;
    width: 80%;
    gap: 10px;
    margin: 30px;
`
const Constains3=styled.div`
    display: flex;
    flex-direction: column;
    

`
const Card=styled.div`
    /* background-color: aliceblue; */
    gap: 10px;
    padding: 10px;


`
const Card1=styled.div`
    background-color: aliceblue;
   
    padding: 10px;
    border-radius: 10px;


`
const Premimum=styled.h3`

`
const Line=styled.p`
    
`
const Constains4=styled.div`
    width: 916px;
    height: 697px;
    img{
        width: 100%;
        border: 8px;
        animation: ${fadeIn} 1s ease forwards, ${float} 4s ease-in-out infinite;
      }
`


