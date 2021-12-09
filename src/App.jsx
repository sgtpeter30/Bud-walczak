import React, { useState, useMemo, useEffect, useReducer, useContext } from "react";
import { HashRouter as Router, Redirect, Route, useLocation } from 'react-router-dom'
import Blazy from "blazy";
import Main_banner from './molecules/Main_banner';
import './styles/main.scss';
import Menu_welcome from "./molecules/Menu_welcome";

import Header from "./molecules/Header";
import AboutUs from "./molecules/AboutUs";
import Contact from "./molecules/Contact";
import Houses from "./molecules/Houses";
import Equipment from "./molecules/Equipment";
import Gallery from "./molecules/Gallery";
import Footer from "./molecules/Footer";




const App = () => {
  // console.log(object)
  // let location = useLocation();
  const bLazy = new Blazy();
  useEffect(() => {
    bLazy.revalidate();
    return () => {
      bLazy.revalidate();
    }
  });
  const menu1 = [
    {
      link: "gallery" ,
      name: "Galeria"
    },
    {
      link: "about-us" ,
      name: "O firmie"
    },
    {
      link: "contact" ,
      name: "Kontakt"
    }
  ]
  const menu2 = [
    {
      link: "about-us" ,
      name: "O firmie"
    },
    {
      link: "contact" ,
      name: "Kontakt"
    }
  ]

  return (
    <Router basename={process.env.PUBLIC_URL}>
      
      <Route path="/equipment">
        <Header Menu={menu2} />
        <Equipment />
        <AboutUs />
        <Contact />
        <Footer />
      </Route>
      <Route path="/houses">
        <Header Menu={menu1} />
        <Houses />
        <Gallery />
        <AboutUs />
        <Contact />
        <Footer />
      </Route>


        <Route exact path="/">
          <div id="container">
              <Main_banner />
              <Menu_welcome />
          </div>
        </Route>
    </Router>
  );
};

export default App;
