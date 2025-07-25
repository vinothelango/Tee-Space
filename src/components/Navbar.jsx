import React from 'react'
import styled from 'styled-components';
import Titleimg from '../assets/image/Link.jpg'
import Addcart from '../assets/image/Addbag.jpg'
const Navbar = () => {
  return (
    <Container>
        
        <Subcontainer>
            <Logo>
               <img src={Titleimg} alt="" />
            </Logo>
            <Navitems>
              <Navitem>Home</Navitem>
              <Navitem>Tee space</Navitem>
              <Navitem>Shop</Navitem>
              <Navitem>Blog</Navitem>
              <Navitem>Pages</Navitem>
            </Navitems>
            
           <IconsArea>
            <img src={Addcart} alt="" />
          <Hotline>
            <p>HOTLINE:</p>
            <span>00 1900 8188</span>
          </Hotline>
          <Signup>Sign Up</Signup>
        </IconsArea>
        </Subcontainer>
    </Container>
  )
}

export default Navbar

const Container =styled.div`
  width: 1500px;
  background: white;
  color: black;
  margin: 0;
  border-bottom: 1px solid #eee;`


  const Subcontainer =styled.div`
   
    height: 6.188rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

  `
  const Logo = styled.div`
   display: flex;
  align-items: center;
  img {
    height: 40px;
    margin-right: 8px;
  }
  font-weight: bold;
  font-size: 20px;
`

  const Navitems =styled.ul`
    list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  `
  const Navitem = styled.li`
     cursor:pointer;
  display:flex;
  align-items:center;
  font-weight:500;
  color: #333;
  &:hover {
    color: #0d9488;
  };`
  const IconsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Hotline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 12px;
  line-height: 1.2;
  color: black;
  p {
    margin: 0;
    justify-content: flex-start;
  }
  span {
    font-weight: bold;
    font-size: 14px;
  }
`;

const Signup = styled.div`
  background: black;
  color: white;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-left: 10px;

  &:hover {
    background: #333;
  }
`;