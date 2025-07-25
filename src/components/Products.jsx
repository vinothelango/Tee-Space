import React from 'react'
import styled from 'styled-components'
import Item1 from '../assets/image/Item.png'
import Item2 from '../assets/image/Item (1).png'
import Item3 from '../assets/image/Item (2).png'
import Item4 from '../assets/image/Item (3).png'

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

                </Cards>
                <Cards>
                    <img src={Item2} alt="" />
                    <Prodhead>Midweight Cotton Tee</Prodhead>
                    <P>$30.00-32.00</P>
                </Cards>
                <Cards>
                    <img src={Item3} alt="" />
                    <Prodhead>Youth Short Sleeve Tee</Prodhead>
                    <P>$22.00-25.00</P>
                </Cards>
                <Cards>
                    <img src={Item4} alt="" />
                    <Prodhead>Fine Jersey Tee</Prodhead>
                    <P>$31.00</P>
                </Cards>
             </Cardcontains>

        </Contains>
    </Maincontains>
  )
}

export default Products


const Maincontains=styled.div`
    display: flex;
    width: 100%;
    
    justify-content: center;
    align-items: center;
`

const Contains=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const Topic=styled.div`
    
`
const Title=styled.h1`
    font-size: Plus Jakarta Sans;
`
const Subhead=styled.p`
    
`
const Cardcontains=styled.div`
    display: flex;
    gap: 10px;
`
const Cards =styled.div`

img{
    width: 330px;
    height: 440px;
}
    
`
const Prodhead=styled.h5`
    margin: 10px 0;
`
const P=styled.p`
    margin: 0 0;
`




