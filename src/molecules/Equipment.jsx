import React from 'react';
import "../styles/equipment.scss";
import SmallContact from "../atoms/SmallContact";

  const Equipment = () => {
    return (
      <div id="equipment" className="container_main container">
        <div className="w-100 py-1 fw-bold pt-3 mt-3 mb-3 d-flex justify-content-center text-uppercase">
          <h2 className="pt-3 pb-2">WYPOŻYCZENIE SPRZĘTU</h2>
        </div>
        {/* <div className="w-100 py-1 fw-bold mb-3">
          <h1 className="border-bottom pb-2">WYPOŻYCZENIE SPRZĘTU</h1>
        </div> */}
        <div className="d-flex w-100 equipment_wrapper">
          <div className="col-12 col-md-3 mb-5 mb-md-0 equipment_piece">
            <img src={process.env.PUBLIC_URL+'/images/equipment/eq_1.png'} alt="Pojazdy"></img>
            <span>Pojazdy</span>
            <SmallContact />
          </div>
          <div className="col-12 col-md-3 mb-5 mb-md-0 equipment_piece">
            <img src={process.env.PUBLIC_URL+'/images/equipment/eq_2.png'} alt="Narzędzia"></img>
            <span>Narzędzia</span>
            <SmallContact />
          </div>
          <div className="col-12 col-md-3 mb-5 mb-md-0 equipment_piece">
            <img src={process.env.PUBLIC_URL+'/images/equipment/eq_3.png'} alt="Rusztowania"></img>
            <span>Rusztowania</span>
            <SmallContact />
          </div>
        </div>
      </div>
    );
  };
  
  export default Equipment;
  