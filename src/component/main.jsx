import React from "react";
import styled from "styled-components";
import image from "../images/33e19ed98a1ce22306046554f4fe5b14-removebg-preview.png";
function Main() {
  const Container = styled.div`
    display: flex;
  `;
  const Box = styled.div`
    background-color: ${({ theme }) => theme.secondBg.backgroundColor};
    height: 36rem;
    width: 40%;
    margin-left: 5rem;
    @media (max-width: 1000px) {
      display: none;
    }
  `;
  const SecondBox = styled.div`
    background-color: ${({ theme }) => 
    theme.secondBg.backgroundColor};
    display: flex;
    flex-direction: column;
    height: 28rem;
    width: 70%;
  `;
  const Heading1 = styled.div`
    margin-top: 5rem;
    margin-right: 4rem;
    
    h3 {
      font-weight: 600;
    }
    p {
      font-weight: 600;
      font-size: 0.8rem;
    }
    button {
      background-color: ${({ theme }) => theme.secondBg.backgroundColor};
      font-weight: 700;
      border: none;
    }

    button:after {
      content: "";
      position: absolute;
      width: 7.5%;
      display: block;
      height: 3px;
      background-color: #000000;
    }
   
    @media (max-width: 1000px) {
      margin-left: 2rem;
    }
    @media (max-width: 600px) {
      margin-left: 1rem;
    }
  `;
  const ThirdBox = styled.div`
    background-color: ${({ theme }) => theme.thirdBg.backgroundColor};

    height: 30rem;
    width: 55%;
    margin-top: -10rem;
    @media (max-width: 1000px) {
      display: none;
    }
  `;
  const YeahBox = styled.div`
    background-color: ${({ theme }) => theme.secondBg.backgroundColor};

    height: 8rem;
    width: 100%;
    margin-top: 30rem;
  `;

  const Image = styled.div`
    margin-top: -35rem;
    margin-left: 26rem;
    img{
      width: 29.3%;

    }
    @media (max-width: 1000px) {
      margin-right : 4rem;
      img{
      width: 29.3%;
      display: none;
    }
    }
  `;
  const Heading = styled.h1`
    color: ${({ theme }) => theme.secondBg.backgroundColor};
    font-size: 40px;
    -webkit-text-stroke: 0.7px black;
    font-size: 8rem;
    margin-top: -15rem;
    margin-left: 3rem;
    @media (max-width: 1000px) {
      display: none;
    }
  `;
  const Footer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
    margin-left: 20rem;
    justify-content: space-around;
    font-weight: 600;
    @media (max-width: 1000px) {
      display: none;
    }
    ul:after {
      content: "";
      position: absolute;
      width: 7.7%;
      display: block;
      height: 3px;
      background-color: #000000;
    }
  `;
  const NewImage = styled.div`
    img{
      display: none;
    }
    @media (max-width: 1000px) {
      img{
      width: 30%;
      display: block;
      margin-top: 6rem;
      margin-left : 35rem;

    }
    }
    @media (max-width: 800px) {
      img{
      width: 40%;
      display: block;
      margin-top: 10rem;
      margin-left : 22rem;

    }
    }
    @media (max-width: 550px) {
      img{
      
      margin-left : 18rem;

    }
    }
    @media (max-width: 300px) {
      img{
        width: 80%;
      margin-left : 10rem;

    }
    }
  `
  return (
    <>
      <Container>
        <Box></Box>

        <ThirdBox>
          <YeahBox></YeahBox>
        </ThirdBox>
        <SecondBox>
          <Heading1>
            <h3>Breathing in the aroma of creativity.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Laborum rem veniam quam ratione adipisci ut? Cum sit <br />
              ullam natus aliquid,{" "}
            </p>
<button>Learn More </button>
          </Heading1>
        </SecondBox>
      </Container>
      <Image>
        <img src={image} alt=""  />
      </Image>
      <Heading>
        SUL <br />
        TAN
      </Heading>
      <Footer>
        <ul>download cv </ul>
        <ul>latest work </ul>
        <ul>case studies</ul>
      </Footer>
      <NewImage>
      <img src={image} alt="" />
      </NewImage>
    </>
  );
}

export default Main;
