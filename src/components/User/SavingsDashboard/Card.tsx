import React from "react";
import styled from "styled-components";
import img1 from "../../Assets/bank.png";
import img2 from "../../Assets/naira.png";
import img3 from "../../Assets/lock.png";
import { NavLink } from "react-router-dom";

const Cards = () => {
  return (
    <Container>
      <NavLink to="/usersavings" style={{ textDecoration: "none" }}>
        <Card1>
          <Img src={img1} />
          <Bold>
            <p>Savings</p>
          </Bold>
          <P>
            <p>
              Strict savings automatically. Daily, weekly or Monthly. 10% p.a
            </p>
          </P>
          <Bold>
            <p>₦0.00</p>
          </Bold>
        </Card1>
      </NavLink>

      <NavLink to="/userbacktoschool" style={{ textDecoration: "none" }}>
        <Card2>
          <Img src={img2} />
          <Bold2>
            <p>Back To School</p>
          </Bold2>
          <P>
            <p>
              Flexible savings for emergencies. Free transfers, withdrawals etc.
              8% p.a
            </p>
          </P>
          <Bold2>
            <p>₦0.00</p>
          </Bold2>
        </Card2>
      </NavLink>

      <NavLink to="/savings/safelock" style={{ textDecoration: "none" }}>
        <Card3>
          <Img src={img3} />
          <Bold3>
            <p>Safelock</p>
          </Bold3>
          <P>
            <p>
              Lock funds to avoid temptations. Upfront interest. Up to 13% p.a
            </p>
          </P>
          <Bold3>
            <p>₦0.00</p>
          </Bold3>
        </Card3>
      </NavLink>
      <NavLink to="/savings/safelock" style={{ textDecoration: "none" }}>
        <Card3>
          <Img src={img3} />
          <Bold3>
            <p>Safelock</p>
          </Bold3>
          <P>
            <p>
              Lock funds to avoid temptations. Upfront interest. Up to 13% p.a
            </p>
          </P>
          <Bold3>
            <p>₦0.00</p>
          </Bold3>
        </Card3>
      </NavLink>
      <NavLink to="/savings/safelock" style={{ textDecoration: "none" }}>
        <Card3>
          <Img src={img3} />
          <Bold3>
            <p>Safelock</p>
          </Bold3>
          <P>
            <p>
              Lock funds to avoid temptations. Upfront interest. Up to 13% p.a
            </p>
          </P>
          <Bold3>
            <p>₦0.00</p>
          </Bold3>
        </Card3>
      </NavLink>
    </Container>
  );
};

export default Cards;
const Bold6 = styled.div`
  p {
    color: rgb(117, 63, 246);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card6 = styled.div`
  background-color: rgb(241, 236, 254);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
`;
const Bold5 = styled.div`
  p {
    color: rgb(0, 0, 0);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card5 = styled.div`
  background-color: rgb(239, 244, 245);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
`;
const Bold4 = styled.div`
  p {
    color: rgb(39, 174, 96);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card4 = styled.div`
  background-color: rgb(220, 255, 235);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
`;
const Bold3 = styled.div`
  p {
    color: rgb(34, 149, 242);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card3 = styled.div`
  background-color: rgb(231, 246, 255);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
  margin-bottom: 15px;
`;
const Bold2 = styled.div`
  p {
    color: rgb(231, 67, 156);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card2 = styled.div`
  background-color: rgb(255, 234, 245);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
  margin-bottom: 15px;
`;
const P = styled.div`
  p {
    color: #4a5568;
    font-family: Karla, sans-serif;
    line-height: 1.5;
    font-size: 14px;
  }
`;
const Bold = styled.div`
  p {
    color: rgb(13, 96, 216);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Img = styled.img`
  margin-top: 10px;
`;
const Card1 = styled.div`
  background-color: rgb(204, 240, 254);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
  margin-bottom: 15px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 45px;
  justify-content: space-between;
  margin-bottom: 45px;
  /* background-color: red; */
`;
