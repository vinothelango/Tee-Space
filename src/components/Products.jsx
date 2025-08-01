import React from 'react'
import styled,{keyframes} from 'styled-components'
import Item1 from '../assets/image/Link → 3-330x440.jpg.png'
import Item2 from '../assets/image/Item (1).png'
import Item3 from '../assets/image/Item (2).png'
import Item4 from '../assets/image/Item (3).png'
import Color1 from "../assets/image/span.color-variation.png"
import Color2 from "../assets/image/span.color-variation (1).png"
import Cardimg from "../assets/image/Link → banner-26.png.png"
import Cardimg1 from "../assets/image/Link → banner-27.jpg.png"
import Cardvireimg from "../assets/image/Link → banner-28.png.png"
import Link1 from "../assets/image/Link.png"
import Link2 from "../assets/image/Link (1).png"
import Link3 from "../assets/image/Vector.png"
import Link4 from "../assets/image/Vector (1).png"
import Link5 from "../assets/image/Link (2).png"
import Link6 from "../assets/image/Link (3).png"

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
                        <Card1>
                            
                                <img src={Link1} alt="" />
                            
                            <Ichd>NO Die & plate
charges</Ichd>
                            <Icp>Lorem ipsum det, cowec
tetur duis necgi det, consect
eturlagix adipiscing eliet duis
necgi det, con</Icp>
                        </Card1>
                        <Card2>
                              
                                <img src={Link2} alt="" />
                            
                            <Ichd>High quality offset
printing</Ichd>
                            <Icp>Lorem ipsum det, cowec
tetur duis necgi det, consect
eturlagix adipiscing eliet duis
necgi det, con</Icp>
                        </Card2>
                        <Card3>
                              
                                <img src={Link3} alt="" />
                            
                            <Ichd>Secure payment</Ichd>
                            <Icp>Lorem ipsum det, cowec
tetur duis necgi det, consect
eturlagix adipiscing eliet duis
necgi det, con</Icp>
                        </Card3>
                        <Card4>
                              
                                <img src={Link4} alt="" />
                            
                            <Ichd>Custom size & style</Ichd>
                            <Icp>Lorem ipsum det, cowec
tetur duis necgi det, consect
eturlagix adipiscing eliet dui</Icp>
                        </Card4>
                        <Card5>
                             
                                <img src={Link5} alt="" />
                            
                            <Ichd>Fast & free delivery</Ichd>
                            <Icp>Lorem ipsum det, cowec
tetur duis necgi det, consect
eturlagix adipiscing</Icp>
                        </Card5>
                        <Card6>
  
                                <img src={Link6} alt="" />
                             
                            <Ichd>Low minimum order quantity</Ichd>
                            <Icp>Lorem ipsum det, cowec
tetur duis necgi det, consect
eturlagix adipiscing eliet duis
necgi det, con</Icp>
                        </Card6> 

                    </Gridcard>
                                       <Cardview>
                    <Bagtext>
                    <Create>
                        Create your own
custom products online!
                    </Create>
                    <Freebag>
                        Free and easy way to bring your ideas to life
                    </Freebag>
                    <Butcus>
                        Order Custom Shirts
                    </Butcus>
                    </Bagtext>
                </Cardview>
                </Cardcons>
                
            </Subcontains>
 
        </Maincontains1>

    </Maincontains>

   

  )
}

export default Products

const fadeSlideUp=keyframes`
  0%{
    opacity: 0;
    transform: translateY(30px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`


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
    border-radius: 15px;
    animation: ${fadeSlideUp} 1.5s ease-out;
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
    background-image: url(${Cardimg});
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
    background-image: url(${Cardimg1});
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
const Maincontains1=styled.div`
    display: flex;
    flex-direction: column;
  
    width: auto;
    height: auto;
    
`
const Subcontains=styled.div`
    display: flex;
    
    gap: 10px;
    margin: 0;
    align-items: baseline;
    width: 100%;
`
const Cardcons=styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    padding: 40px;
    
`
const Gridcard=styled.div`
  display: grid;
  grid-template-columns: repeat(3, 258px);
  gap: 20px;
  
  

`
const Card6=styled.div`
  background-color: #f4efef;
  color: black;
  width: 218px;
  height: 300px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;


  img{
    width: 53px;
    height: 53px;
  }
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* On hover: stronger shadow */
    transform: translateY(-5px); /* Slight lift on hover */
  }
  
`
const Card5=styled.div`
  background-color: #f4efef;
  color: black;
  width: 218px;
  height: 300px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
   /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
   img{
    width: 53px;
    height: 53px;
  }
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* On hover: stronger shadow */
    transform: translateY(-5px); /* Slight lift on hover */
  }
`
const Card4=styled.div`
  background-color: #f4efef;
  color: black;
  width: 218px;
  height: 300px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
   /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
  img{
    width: 53px;
    height: 53px;
  }
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* On hover: stronger shadow */
    transform: translateY(-5px); /* Slight lift on hover */
  }
`
const Card3=styled.div`
  background-color: #f4efef;
  color: black;
  width: 218px;
  height: 300px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
   /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
  img{
    width: 53px;
    height: 53px;
  }
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* On hover: stronger shadow */
    transform: translateY(-5px); /* Slight lift on hover */
  }
`
const Card2=styled.div`
 background-color: #f4efef;
  color: black;
  width: 218px;
  height: 300px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
   /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
  img{
    width: 53px;
    height: 53px;
  }
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* On hover: stronger shadow */
    transform: translateY(-7px); /* Slight lift on hover */
  }
`
const Card1=styled.div`
  background-color: #f4efef;
  color: black;
  width: 218px;
  height: 300px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
   /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
   img{
    width: 53px;
    height: 53px;
  }
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* On hover: stronger shadow */
    transform: translateY(-5px); /* Slight lift on hover */
  }
`

const Icon=styled.img`
    
`
const Ichd=styled.h2`
    
`
const Icp=styled.p`
    
`
const TEXTCONTAIN=styled.div`
    width: 500px;
    
`
const Customize=styled.h1`
    
`
const Pa =styled.p`
    width: 60%;
    font-size: medium;
    font-size: 18px;
    color: gray;
`
const Buts=styled.button`
 background-color: #2EBB77;
`
const Cardview= styled.div`
    background: url(${Cardvireimg});
    width: 810px;
    height: 277px;
    display: flex;
    border-radius: 10px;
    
`
const Bagtext=styled.div`
    width: 50%;
    margin: 30px 40px;

`
const Create=styled.h2`
    
`
const Freebag=styled.p`
    
`
const Butcus=styled.button`
    background-color: #2EBB77;
`






