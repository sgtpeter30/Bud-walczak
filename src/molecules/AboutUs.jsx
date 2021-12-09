import React from 'react';
import { NavLink } from 'react-router-dom';
  import "../styles/aboutUs.scss";
  
  const AboutUs = () => {
    return (
      <div id="about-us" className="container">
        <div className="w-100 py-1 fw-bold mt-3 mb-1 d-flex justify-content-center">
          <h2 className="pb-2 text-uppercase">O firmie</h2>
        </div>
        <div className="row container_inner justify-content-center text-left px-md-5">

          <p className="pb-2 px-4 w-100 w-md-75">Budowa domów, domy jednorodzinne, domy energooszczędne</p>
          <p className="pb-2 px-4 w-100 w-md-75">Firma Z.U.H. Walczak (usługi budowlane) prowadzi działalność budowlaną w zakresie zaspokajania mieszkaniowych potrze indywidualnych odbiorców. Posiadamy wyspecjalizowaną kadrę pracowniczą oraz własny sprzęt budowlany, co ogranicza problemy związane z ewentualną nieterminowością kontrahentów.</p>
          <p className="pb-2 px-4 w-100 w-md-75">Budowa domów wymaga często zaangażowania dużej siły roboczej oraz specjalistycznego sprzętu budowlanego - dzięki naszym zasobom potrafimy doskonalne sprostać oczekiwaniom naszych klientów.</p>
          <p className="pb-2 px-4 w-100 w-md-75">Domy jednorodzinne, które mieliśmy okazję wybudować, charakteryzują się wysoką jakością wykonania - nasze obiekty wykonane są na wysokim poziomie.</p>
          <p className="pb-2 px-4 w-100 w-md-75">Dzięki własnemu zapleczu sprzętowemu świadczymy również szereg dodatkowych usług: stany surowe, szalunki, rusztowania, wynajem rusztowań, budowy.</p>
          {/* <NavLink to="/gallery" className="mb-5">Zapraszamy do obejrzenia galerii zdjęć z prowadzonych przez nas inwestycji.</NavLink> */}
            
          
          
          
          <div className="certificate d-flex flex-wrap justify-content-center align-items-center w-100 w-md-50 px-3">
            <img src={process.env.PUBLIC_URL+'/images/certificates/logo_xella.jpg' }></img>
            <span className="d-flex w-100 justify-content-center mt-4">Certyfikowany wykonawca firmy</span>
          </div>
          <div className="certificate d-flex flex-wrap justify-content-center align-items-center w-100 w-md-50 px-3">
            <img src={process.env.PUBLIC_URL+'/images/certificates/logo_silka_ytong.jpg' }></img>
            <span className="d-flex w-100 justify-content-center mt-4">Certyfikaty na budowę w systemie</span>
          </div>

        </div>
      </div>
    );
  };
  
  export default AboutUs;
  