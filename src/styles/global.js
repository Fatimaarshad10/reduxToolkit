import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin : 0px ; 
    padding : 0px ;
    font-family: 'Open Sans', sans-serif ; 
}
body {
    
    background-color : ${({theme})=> theme.firstBg.backgroundColor  }
  }

`;
