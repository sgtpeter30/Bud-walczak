import React, { useEffect } from "react";
// import { NavLink} from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from "../icons/logo.png";
import "../styles/Header.scss";


const Header = (MenuList) => {
  console.log(MenuList)
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 700px)")

    let menu = document.getElementById('menu_categories');
    const menuPrepend = (mobile)=>{
      if(mobile.matches){
        document.querySelector('aside').append(menu);
      }else{
        document.querySelector('header .main_menu_wrapper').append(menu);
      }
    }
    menuPrepend(mobile);
    window.addEventListener('resize', ()=>{
      menuPrepend(mobile);
    })
    document.getElementById('menu_open').addEventListener('click', ()=>{
      let menu = document.querySelector('aside');
      if(menu.classList.contains('d-none')){
        menu.classList.remove('d-none')
        menu.classList.add('d-flex')
      }else{
        menu.classList.add('d-none')
        menu.classList.remove('d-flex')
      }
    })
    document.querySelector('.container_main').addEventListener('click', ()=>{
      let menu = document.querySelector('aside');
        menu.classList.add('d-none')
        menu.classList.remove('d-flex')
      
    })
  });
  return (
    <header className="d-flex flex-wrap align-content-start py-0">
      <div className="container d-flex flex-wrap main_menu">
        <div className="col-4 logo d-flex justify-content-center align-items-start"><NavLink to="/"><img src={logo} alt="bud-walczak_logo" /></NavLink></div>
        <div className="d-flex col-8 flex-wrap main_menu_wrapper"> 
          <i id="menu_open" className="icon-menu-mobile d-flex d-md-none align-items-center"></i>
          <ul id="menu_categories" className="d-flex w-100 flex-wrap flex-md-nowrap justify-content-end align-content-start align-items-center container">
            {
              Object.keys(MenuList.Menu).map(element => 
                <li><HashLink smooth="true" to={"#" + MenuList.Menu[element].link} className="btn text-center text-uppercase h-100 scrollTo"> {MenuList.Menu[element].name} </HashLink></li>
              )
            }
          </ul>
        </div>
      </div>
      <aside className="d-none flex-wrap"></aside>
    </header>
  );
};

export default Header;
