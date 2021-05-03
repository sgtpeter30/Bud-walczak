// import React, { useContext } from "react";
import { useLocation } from 'react-router-dom';
import logo from "../icons/logo.svg";
import "../styles/Header.scss";

const Header = () => {
  let location = useLocation();
  console.log("taki sobie ten headerek")
  console.log(location)
  location.pathname === '/' &&  document.querySelector('header') !== null ? document.querySelector('header').classList.add('d-none') : console.log("a tutaj już nie")

  return (
    <header className="navbar navbar-dark navbar-expand-md bg-white d-flex justify-content-between flex-wrap align-items-center mt-5">
      <ul className="navbar-nav justify-content-between align-items-center w-100 container">
        <li className="nav-item col-2"><a href="/equipment" className="btn p-5 text-end">Wypożyczalnie sprzętu</a></li>
        <li className="nav-item col-2"><a href="/houses" className="btn p-5 text-end">Usługi budowlane</a></li>
        <li className="nav-item col-2 logo"><a href="/bud-walczak"><img src={logo} alt="bud-walczak_logo" /></a></li>
        <li className="nav-item col-2"><a href="/about-us" className="btn p-5">O firmie</a></li>
        <li className="nav-item col-2"><a href="/contact" className="btn p-5">Kontakt</a></li>
      </ul>
    </header>
  );
};

export default Header;
