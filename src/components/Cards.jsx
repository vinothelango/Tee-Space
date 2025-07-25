import React from 'react'
import Main from '../assets/image/Main.png'
import Main1 from '../assets/image/Main (1).png'
import Main2 from '../assets/image/Main (2).png'
import styled from 'styled-components'
const Cards = () => {
  return (
    <Maincontainer>
        <Topic>How to create custom shirts</Topic>
        <Para>Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet,
cowec tetopak ec tetur duis necgi</Para>
        <Subcontainer>
          
            <Card>
              
              <Cardsection>
                <Card1>
                    <img src={Main} alt="" />
                </Card1>
               <Num>
                <p>1</p>
               </Num>
                <Card2>
                    <Head>Add your shirt design</Head>
                    <P>Lorem ipsum det, cowec tetur duis nec fringi det,
consec t eturlagix adipiscing eliet, cowec tetopak nec
fringi det adipiscing</P>
                </Card2>
                </Cardsection>
                <Cardsection>
                <Card3>
                    <Head>Custom artwork &review</Head>
                    <P>Lorem ipsum det, cowec tetur duis nec fringi det,
consec t eturlagix adipiscing eliet, cowec tetopak nec
fringi det adipiscing</P>
                </Card3>
                <Num>
                <p>2</p>
               </Num>
                <Card4>
                    <img src={Main1} alt="" />
                </Card4>
              </Cardsection>
              <Cardsection>
                <Card5>
                    <img src={Main2} alt="" />
                </Card5>
                <Num>
                <p>3</p>
               </Num>
                <Card6>
                    <Head>Enjoy your product</Head>
                    <P>Lorem ipsum det, cowec tetur duis nec fringi det,
consec t eturlagix adipiscing eliet, cowec tetopak nec
fringi det adipiscing</P>
                </Card6>
                </Cardsection>
            </Card>
        </Subcontainer>
    </Maincontainer>
  )
}

export default Cards
const Maincontainer = styled.section`
  padding: 60px 20px;
  max-width: 1500px;
  margin: auto;
  background-color: white;
  text-align: center;
`;

const Topic = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

const Para = styled.p`
  font-size: 16px;
  color: #555;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const Subcontainer = styled.div`
  display: flex;

  justify-content: center;
  padding: 30px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 900px;
  /* width: 500px; */
`

const Cardsection= styled.div`
  display: flex;
  gap: 20px;
`

const Num=styled.div`
  width: 70px;
  height: 40px;
  box-shadow: 10px;
  background-color: aliceblue;
  color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  align-items: center;

 

`

  
  
  
const Card1 = styled.div`
  img {
    width: 350px;
    height: 200px;
    border-radius: 8px;
  }
`;

const Card2 = styled.div`
  background: #FFFF;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
`;

const Card3 = styled(Card2)``;

const Card4 = styled(Card1)``;

const Card5 = styled(Card1)``;

const Card6 = styled(Card2)``;

const Head = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #111;
`;

const P = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
`;
