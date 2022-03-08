import React from "react";

import Topbar from "./layout/Topbar";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./layout/Footer";
import Opportunities from "./components/home/Opportunities";
import Works from "./Pages/Works";
import Resources from "./Pages/Resources";
import OurProcess from "./Pages/OurProcess";
import ContactUs from "./Pages/ContactUs";

const App = () => {
    const [getlocation, setGetlocation] = React.useState("/")
    React.useEffect(() => {
      console.log(getlocation)
      if (getlocation === "/process") {
        document.body.style.background = "#fff"
      } else if (getlocation === "/resources") {
        document.body.style.background = "#fff"
      } else {
        document.body.style.background = "#f7f4f4"
      }

    }, [getlocation])

    return ( <
        div className = " min-h-screen" >
        <
        BrowserRouter >
        <
        Topbar / >
        <
        Routes >
        <
        Route index element = {
          <
          Home setGetlocation = {
            setGetlocation
          }
          />} / >
          <
          Route path = "works"
          element = {
            <
            Works setGetlocation = {
              setGetlocation
            }
            />} / >
            <
            Route path = "resources"
            element = {
              <
              Resources setGetlocation = {
                setGetlocation
              }
              />} / >
              <
              Route path = "process"
              element = {
                <
                OurProcess setGetlocation = {
                  setGetlocation
                }
                />} / >
                <
                Route path = "contact"
                element = {
                  <
                  ContactUs setGetlocation = {
                    setGetlocation
                  }
                  />} / >
                  <
                  /Routes> <
                  Opportunities / >
                  <
                  Footer / >
                  <
                  /BrowserRouter> < /
                  div >
                );
              };

              export default App;