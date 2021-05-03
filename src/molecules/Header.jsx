// import React, { useContext } from "react";
import { useLocation } from 'react-router-dom';

// import "./Header.scss";

const Header = () => {
  let location = useLocation();
  console.log("taki sobie ten headerek")
  console.log(location)
  location.pathname === '/' &&  document.querySelector('header') !== null ? document.querySelector('header').classList.add('d-none') : console.log("a tutaj już nie")

  return (
    <header className="navbar navbar-dark navbar-expand-md bg-primary d-flex justify-content-between flex-wrap align-items-center">
      <span>To jest nasz header</span>
      <ul className="navbar-nav justify-content-start">
        <li className="nav-item"></li>
        <li className="nav-item"></li>
      </ul>
      <button className="btn btn-secondary">Nowy button</button>
    </header>
  );
};

export default Header;
