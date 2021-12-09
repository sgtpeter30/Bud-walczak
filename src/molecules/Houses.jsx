import React from 'react';
  import "../styles/houses.scss";
  
  const Houses = () => {
    return (
      <div id="houses" className="container">
        {/* <div className="big_label row">
          <h1>Usługi budowlane</h1>
        </div> */}
        <div className="w-100 py-1 fw-bold pt-3 mt-3 mb-3 d-flex justify-content-center text-uppercase">
          <h2 className="pt-3 pb-2">Zakres usług</h2>
        </div>
        <div className="row container_inner justify-content-md-center">
          <div className="col-12 col-md-3 d-flex flex-wrap justify-content-center align-items-start align-content-start">
            <div className="icon-wrapper">
              <i className="icon-house"></i>
            </div>
            <ul>
              <li>budowa domów</li>
              <li>stany surowe</li>
            </ul>
          </div>
          <div className="col-12 col-md-3 d-flex flex-wrap justify-content-center align-items-start align-content-start">
            <div className="icon-wrapper">
              <i className="icon-brick"></i>
            </div>
            <ul>
              <li>dachy</li>
              <li>elewacje</li>
              <li>szalunki</li>
              <li>rusztowania</li>
            </ul>
          </div>
          <div className="col-12 col-md-3 d-flex flex-wrap justify-content-center align-items-start align-content-start">
            <div className="icon-wrapper">
              <i className="icon-garden"></i>
            </div>
            <ul>
              <li>roboty ziemne</li>
              <li>ogrodzenia</li>
            </ul>
          </div>
          <div className="col-12 col-md-3 d-flex flex-wrap justify-content-center align-items-start align-content-start">
            <div className="icon-wrapper">
              <i className="icon-tools"></i>
            </div>
            <ul>
              <li>wynajem szalunków stropowych</li>
              <li>wynajem rusztowań</li>
              <li>wynajem sprzętu budowlanego</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  export default Houses;