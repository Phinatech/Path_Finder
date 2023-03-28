import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "../../Assets/person.png";
// import SideBar from "../Dashboard/SideBar";
import Targetacc from "./Targetacc";

const Target = () => {
  return (
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <Bold>
                <h1>WithDraw</h1>
              </Bold>
            </Left>
            <Right>
              <Img src={img} />
            </Right>
          </Top>
          <Bottom>
            <NavLink to="/usersavings" style={{ textDecoration: "none" }}>
              <Navs2>Savings</Navs2>
            </NavLink>
            <NavLink to="/backtoschool" style={{ textDecoration: "none" }}>
              <Navs2>BackToSchool</Navs2>
            </NavLink>
            <NavLink to="/withdraw" style={{ textDecoration: "none" }}>
              <Navs>WithDraw</Navs>
            </NavLink>
            <NavLink to="/deposit" style={{ textDecoration: "none" }}>
              <Navs2>Deposit</Navs2>
            </NavLink>
            <Navs2>Flex Dollar</Navs2>
          </Bottom>
          <Targetacc />
        </Wrapper>
      </Container>
  );
};

export default Target;
const Navs2 = styled.div`
  color: #a0aec0;
  font-family: U8, sans-serif;
  /* margin-bottom: 5px; */
  /* border-bottom: 3px solid rgb(8, 62, 158); */
  width: 80px;
  margin-left: 40px;
  line-height: 40px;
  display: flex;
`;
const Navs = styled.div`
  color: #1a202c;
  font-family: U8, sans-serif;
  /* margin-bottom: 5px; */
  border-bottom: 3px solid #27ae60;
  width: 80px;
  line-height: 40px;
  margin-left: 40px;
  display: flex;
`;
const Bottom = styled.div`
  width: 100%;
  border-bottom: 1px solid #e2e8f0;
  margin-top: 10px;
  display: flex;
`;
const Img = styled.img`
  height: 45px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.div`
  p {
    color: #718096;
    font-family: Karla, sans-serif;
    font-size: 0.875rem;
    margin: 0;
  }
  margin-top: 7px;
`;
const Bold = styled.div`
  h1 {
    font-size: 29px;
    color: #27ae60;
    font-weight: 700;
    font-family: U8, sans-serif;
    margin: 0;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  margin-left: 250px;
  /* background-color: red; */
  overflow: hidden;
  margin-bottom: 60px;
`;
