import React from 'react'
import styled from 'styled-components'

const Social = () => {
  return (
    <Mainconat>
        <P1>FaceBook</P1>
        <P1>Twitter</P1>
        <P1>Instagram</P1>
        <P1>Youtube</P1>
        <P1>Pinterest</P1>
    </Mainconat>
  )
}

export default Social
const Mainconat=styled.div`
    display: flex;
    gap: 80px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    font-size: 15px;
    font-weight:bold;

`
const P1=styled.p`
    gap: 0px;
    margin-left: 30px;
    margin-right: 30px;
`