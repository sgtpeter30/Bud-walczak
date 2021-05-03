import React from "react";
import { BrowserRouter as Router, Redirect, Route, useLocation } from "react-router-dom";
import Main_banner from './molecules/Main_banner';
import './styles/main.scss';
import Menu_welcome from "./molecules/Menu_welcome";


import Header from "./molecules/Header";





const App = () => { 
  return (
    <Router >
      <Route path="/equipment">
        <Header style="orange" />
      </Route>
      <Route path="/houses">
        <Header style="blue"/>
      </Route>
      <Route path="/about-us">
        <Header style="main"/>
      </Route>
      <Route path="/contact">
        <Header style="main"/>
      </Route>

      <div id="container">
        <Route exact path="/">
          <Main_banner />
          <Menu_welcome />
        </Route>
      </div>
    </Router>
  );
};

export default App;
