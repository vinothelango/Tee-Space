import React from 'react'
import styled from 'styled-components'
// import constructWithOptions from 'styled-components/dist/constructors/constructWithOptions'
import cardview1 from "../assets/image/Link → blog-2.jpg.png"
import cardview2 from "../assets/image/Link → blog-6.jpg.png"
import Adminicon from "../assets/image/Acticel.png"

const Resources = () => {
  return (
    <MainContainer>
        <Subcontains>
            <Topic>
            <Bodyhd>More resources</Bodyhd>
            <Bodyp>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, officiis.amet consectetur adipisicing elit. Velit, officiis</Bodyp>
            </Topic>
        <Cardconsts>    
        <Cardview>
            <img src={cardview1} alt="" />
            <Card1>
                <But>
                    Design Services
                </But>
                <Cardh>Make yourself happy withour T-shirt customer…</Cardh>
                <Admin>
                    <img src={Adminicon} alt="" />
                    <Byadmin>
                        <P1>by admin</P1>
                        <P2>August 20, 2022</P2>
                    </Byadmin>
                </Admin>
            </Card1>
        </Cardview>
         <Cardview3>
            <img src={cardview2} alt="" />
            <Card2>
                <But>
                    Print Company
                </But>
                <But>
                    Print Shop
                </But>
                <Cardh>Make yourself happy withour T-shirt customer…</Cardh>
                <Admin>
                    <img src={Adminicon} alt="" />
                    <Byadmin>
                        <P1>by admin</P1>
                        <P2>August 20, 2022</P2>
                    </Byadmin>
                </Admin>
            </Card2>
        </Cardview3>
        </Cardconsts>
        </Subcontains>
    </MainContainer>
  )
}

export default Resources
const MainContainer=styled.div`
display: flex;
justify-content: center;
background-color: #F5F5F5;
color: black;
width: auto;
  
    
`
const Subcontains =styled.div`
   display: flex;
   flex-direction: column;
   justify-content :center ;


`
const Cardview=styled.div`
       display: flex;
       flex-direction: row;
       gap: 20px;
       align-items: center;
        justify-content: center;
        img{
            width: 300px;
           height: 200px;
           justify-content: center;
        }
`
const Cardview3=styled.div`
       display: flex;
       flex-direction: row;
       gap: 20px;
       align-items: center;
        justify-content: center;
        img{
            width: 300px;
            height: 200px;
        }
`
const Topic=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p{

    }
`
const Cardconsts=styled.div`
   display :flex ;
   justify-content: center;
   margin: 20px 0;
`

const Card1 =styled.div`
   width: 380px;
   
`
const Card2 =styled.div`
width: 380px;

`
const But=styled.button`
    border-radius: 20px;
    padding: 8px;
    background-color: #2EBB77;
    
`
const Cardh=styled.h2`
    width: 80%;
`
const Admin=styled.div`
    display: flex;
    align-items: center;
  
    img{
        width: 52px;
        height: 52px;
    }
`
const Byadmin=styled.div`
    
`
const P1=styled.p`
    
`
const P2=styled.p`
   color :gray ;
`
const Bodyhd=styled.h1`
    
`
const Bodyp=styled.p`
    
`