import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./component/navbar";
import Page from "./list/button";
import Emails from "./component/home";
import Home from "./component/email";
import InitialArticles from "./list/data";
import  { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/global";
import Footer from "./component/footer";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/articles" element={<Page data={InitialArticles} />} />
      <Route path="/emails" element={<Emails />} />
    </Route>
  )
);
function App() {
  const theme = {
    color: {
      color: "#110C00",
    },
    firstBg: {
      backgroundColor: "#FFFFFF ",
    },
    secondBg: {
      backgroundColor: "#FFF2C5",
    },
    thirdBg: {
      backgroundColor: "#F0D0AA",
    },

    Responseive: {
      mobile: "768px",
    },
  };
  return (
    <>

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <RouterProvider router={router} />
      </>
<Footer/>

    </ThemeProvider>
    </>
  );
}

export default App;
