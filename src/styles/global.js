import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin : 0px ; 
    padding : 0px ;
    font-family: 'Open Sans', sans-serif ; 
}
body {
    
    background-color : ${({ theme }) => theme.firstBg.backgroundColor}
  }
 button{
  font-size: 1em;
    margin: 1em;
    padding: 1rem 1rem;
    border: none;
    font-weight: 800;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.thirdBg.backgroundColor};
 }
footer{
  background-color: ${({ theme }) => theme.thirdBg.backgroundColor};
  
}

`;
