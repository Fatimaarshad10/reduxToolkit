import React from "react";
import styled from "styled-components";
import image from '../images/36c45c4cb9c9674a1b0188a054702012.jpg'
function Main() {
    const Container = styled.div`
        display: flex;
    `;
    const Box = styled.div`
          background-color: ${({theme})=> theme.secondBg.backgroundColor}; 
  height: 36rem; 
  width: 30%;
  margin-left: 5rem;
       
    `;
     const SecondBox = styled.div`
     background-color: ${({theme})=> theme.secondBg.backgroundColor}; 
     display: flex;
     flex-direction: column;
height: 28rem; 
width: 70%;
  
`;
const ThirdBox = styled.div`
background-color: ${({theme})=> theme.thirdBg.backgroundColor}; 
height: 30rem; 
width: 50%;
margin-top: -10rem;

`;
const YeahBox = styled.div`
     background-color: ${({theme})=> theme.secondBg.backgroundColor}; 
height: 8rem; 
width: 100%;
margin-top: 30rem;

`;
  return <>
  <Container>

  <Box></Box>
<img src={image} alt="image" />

<ThirdBox>
<YeahBox></YeahBox>
   
</ThirdBox>
<SecondBox></SecondBox>
  </Container>

  </>;
}

export default Main;
