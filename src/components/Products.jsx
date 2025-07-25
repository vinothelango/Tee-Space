import React from 'react'
import styled from 'styled-components'
import Item1 from '../assets/image/Item.png'
import Item2 from '../assets/image/Item (1).png'
import Item3 from '../assets/image/Item (2).png'
import Item4 from '../assets/image/Item (3).png'
import Color1 from "../assets/image/span.color-variation.png"
import Color2 from "../assets/image/span.color-variation (1).png"
import Card1 from "../assets/image/Link → banner-26.png.png"
import Card2 from "../assets/image/Link → banner-27.jpg.png"

const Products = () => {
  return (
    <Maincontains>
        <Contains>
            <Topic>
            <Title>
                Our picks for you
            </Title>
            <Subhead>Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix
adipiscing eliet, cowec tetopak</Subhead>
            </Topic>
             <Cardcontains>
                <Cards>
                    <img src={Item1} alt="" />
                    <Prodhead>Premium Crewneck Sweatshirt</Prodhead>
                    <P>$26.00-28.00</P>
                     <Rounds>
                        <img src={Color1} alt="" />
                        <img src={Color2} alt="" />
                        <P>+3</P>
                        </Rounds>
                </Cards>
                <Cards>
                    <img src={Item2} alt="" />
                    <Prodhead>Midweight Cotton Tee</Prodhead>
                    <P>$30.00-32.00</P>
                     <Rounds>
                        <img src={Color1} alt="" />
                        <img src={Color2} alt="" />
                        <P>+3</P>
                        </Rounds>
                </Cards>
                <Cards>
                    <img src={Item3} alt="" />
                    <Prodhead>Youth Short Sleeve Tee</Prodhead>
                    <P>$22.00-25.00</P>
                     <Rounds>
                        <img src={Color1} alt="" />
                        <img src={Color2} alt="" />
                        <P>+3</P>
                        </Rounds>
                </Cards>
                <Cards>
                    <img src={Item4} alt="" />
                    <Prodhead>Fine Jersey Tee</Prodhead>
                    <P>$31.00</P>
                    <Rounds>
                        <img src={Color1} alt="" />
                        <img src={Color2} alt="" />
                        <P>+3</P>
                        </Rounds>
                       
                        
                    
                </Cards>
             </Cardcontains>

        </Contains>
        <Subcons>
            <Cardview1>
                <TEXTS>
                    <HEADS>Thousands of
free templates</HEADS>
                <Qut>Free and easy way to bring
your ideas to life</Qut>
                <BUTTONS>Explore More</BUTTONS>
                </TEXTS>
            </Cardview1>
            <Cardview2>
                 <TEXTS>
                    <HEADS>Create your
unique style</HEADS>
                <Qut>Free and easy way to bring
your ideas to life</Qut>
                <BUTTONS>Shop Now</BUTTONS>
                </TEXTS>
            </Cardview2>
        </Subcons>
        <Maincontains1>
            <Subcontains>
                <TEXTCONTAIN>
                    <Customize>
                        Why customize
                        products with
                        TeeSpace?
                    </Customize>
                    <Pa>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, adipisci?
                    </Pa>
                    <Buts>
                        View All Features
                    </Buts>
                </TEXTCONTAIN>
                <Cardcons>
                    <Gridcard>
                        <Card1></Card1>
                        <Card2></Card2>
                        <Card3></Card3>
                        <Card4></Card4>
                        <Card5></Card5>
                        <Card6></Card6>

                    </Gridcard>
                </Cardcons>
            </Subcontains>
        </Maincontains1>
    </Maincontains>

   

  )
}

export default Products


const Maincontains=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    justify-content: center;
    align-items: center;
    color: black;
`

const Contains=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const Topic=styled.div`
    width: 45%;
`
const Title=styled.h1`
    font-size: Plus Jakarta Sans;
`
const Subhead=styled.p`
    color:gray;
`
const Cardcontains=styled.div`
    display: flex;
    gap: 10px;
`
const Cards =styled.div`

img{
    padding: 0 8px 0 5px;
}

    
`
const Prodhead=styled.h5`
    margin: 10px 0;
`
const P=styled.p`
    margin: 0 0;
    font-size: 20px;
    
`
const Rounds=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    border: 2px;
    border-color: gray;
    gap: 2px;
   
    img{
        width: 18px;
        height: 18px;
        padding: 0 3px;
    }

`
const Subcons=styled.div`
     
    display: flex;
    
`
const Cardview1 =styled.div`
     width: 630px;
    height: 360px;
    align-content: center;
    background-image: url(${Card1});
    background-size: cover;
    margin: 20px;
    border-radius: 10px;
    
`
const TEXTS =styled.div`
    padding: 30px;
`
const Cardview2 =styled.div`
     width: 630px;
    height: 360px;
    align-content: center;
    background-image: url(${Card2});
    background-size: cover;
    margin: 20px;
    border-radius: 10px;
`
const HEADS=styled.h2`
    width: 250px;
    font-weight: bold;
    font-size: 36px;
`
const Qut=styled.p`
    width: 40%;
    color: gray;
`
const BUTTONS=styled.button`
    background-color: #2EBB77;
`




