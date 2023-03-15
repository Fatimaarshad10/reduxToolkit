import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./component/navbar";
import Page from "./list/page";
import Home from "./component/home";
import Main from './component/main'
import InitialArticles from "./list/data";
import styled , {ThemeProvider} from 'styled-components'
import { GlobalStyle } from '../src/styles/global';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route index element={<Main />} />
      <Route path="/list" element={<Page data={InitialArticles} />} />
      <Route path="/main" element={<Home/>} />

    </Route>
  )
);
function App() {
  const theme = {
    color :{
        color : "#110C00",
    }, 
    firstBg:{
      backgroundColor : "#FFFFFF "

    },
    secondBg:{
      backgroundColor : "#FFF2C5"
      
    } , 
    thirdBg:{
    
      backgroundColor : "#F0D0AA"
      
    } , 
    
    Responseive:{
        mobile : '768px'
    }
}
  return (
    

    <ThemeProvider theme={theme}>

<GlobalStyle/>

    <>
      <RouterProvider router={router} />
    </>
    </ThemeProvider>
  );
}

export default App;
