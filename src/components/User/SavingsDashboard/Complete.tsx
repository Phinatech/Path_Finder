import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/complete.jpg"

const Complete = () => {
  return (
    <Container>
        <Left>
            <p>Total Balance</p>
            <h3>₦0.00</h3>
        </Left>
        <Right>
            <Comp><p>COMPLETE YOUR SETUP</p></Comp>
            <Imghold>
            <Img src={img} />
            </Imghold>
        </Right>
    </Container>
  )
}

export default Complete
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Imghold = styled.div`
    width: 100%;
    display: flex;
    height: 130px;
    overflow: hidden;
    border-radius: 7px;
    margin-top: 5px;
`
const Comp = styled.div`
    /* margin-left: 30px; */
    p{
        color: #2d3748;
        font-family: U8,sans-serif;
        font-size: 12px;
        margin: 0;
    }
`
const Right = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
`

const Left = styled.div`
    width: 63%;
    display: flex;
    height: 150px;
    border: 1px solid #e2e8f0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    padding-left: 15px;
    flex-direction: column;
    justify-content: center;
    h3{
        color: #083e9e;
        font-weight: 700;
        font-family: U8,sans-serif;
        margin: 0;
        font-size: 40px;
    }
    p{
        color: #4a5568;
        font-family: Karla,sans-serif;
        font-size: 12px;
        margin: 0;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
`