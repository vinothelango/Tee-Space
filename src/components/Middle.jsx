import React from 'react'
import Spoti from '../assets/image/Item → Link → logo-spotify.png.jpg'
import Feedly from '../assets/image/Item → logo-feedly.png.png'
import Lattice from '../assets/image/Item → Link → logo-lattice.png.png'
import Hopin from '../assets/image/Item → logo-hopin.png.png'
import Upwork from '../assets/image/Item → Link → logo-upwork.png.png'
import styled from 'styled-components'

const Middle = () => {
  return (
    <Maincontainer>
        <Para>
            “We've got custom T-shirts in a range of fits and sizes, so
             everyone can wear your brand or message.”
        </Para>
        <Subcontainers>
            <img src={Spoti} alt="" />
            <img src={Feedly} alt="" />
            <img src={Lattice} alt="" />
            <img src={Hopin} alt="" />
            <img src={Upwork} alt="" />
            <img src={Hopin} alt="" />
        </Subcontainers>
    </Maincontainer>
  )
}

export default Middle

const Maincontainer = styled.section`
  padding: 40px 20px;
  text-align: center;
  background: #f9fafb;
`;

const Para = styled.p`
  font-size: 18px;
  color: #333;
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1;
  font-weight:bold;
`;

const Subcontainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;

  img {
    height: 85.5px;
    width: 200px;
    object-fit: contain;
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 10;
    }
  }
`;
