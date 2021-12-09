// import React, {} from "react";
import Blazy from "blazy";
// import banner_1 from "../images/banners/main_page/banner_1/CAT_320_excavator.jpg";
import banner_1 from "../images/banners/main_page/banner_1/image_1.jpg";
import banner_2 from "../images/banners/main_page/banner_1/image_2.jpg";
import spinner from "../icons/spinner_1.svg";
// import '../styles/Main_standard_banner.scss';

const Main_standard_banner = () => {
  const bLazy = new Blazy();
  

  return (
    
      <div id="main_standard_banner" className="vw-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="vh-100 vw-50 position-relative opacity-col-0">
          
            <div className="position-absolute w-100 d-flex px-5 py-4 bottom-0 bg-opacity-secondary-75">
              <span className="text-white">WYPOŻYCZALNIA SPRZĘTU BUDOWLANEGO</span>
            </div>
            <picture>
              <source media="(min-width:979px)" data-srcset={banner_2}/>
              <source media="(min-width:757px)" data-srcset={banner_1}/>
              <img src={spinner} alt="banner1" className="b-lazy img-fluid" data-src={banner_2}/>
            </picture>
            <a target="_self" href="/" title="banner1" className="d-flex vw-100 vh-100 position-absolute">test</a>
        </div>
        <div className="vh-100 vw-50 position-relative">
          <a target="_self" href="/" title="banner_2" className="loading">
            <div className="position-absolute w-100 px-5 py-4 d-flex bg-opacity-primary-75 justify-content-end">
              <span className="text-white">BUDOW DOMÓW</span>
            </div>
            <picture>
              <source media="(min-width:979px)" data-srcset={banner_2}/>
              <source media="(min-width:757px)" data-srcset={banner_2}/>
              <img src={spinner} alt="banner_2" className="b-lazy img-fluid" data-src={banner_2}/>
            </picture>
          </a>
        </div>

        {/* obrazy na połowie */}
        {/* <div className="col-6 px-0 position-relative opacity-col-0">
          <a target="_self" href="/" title="banner1" className="d-flex">
            <div className="position-absolute w-100 d-flex px-5 py-4 bottom-0 bg-opacity-secondary-75">
              <span className="text-white">WYPOŻYCZALNIA SPRZĘTU BUDOWLANEGO</span>
            </div>
            <picture>
              <source media="(min-width:979px)" data-srcset={banner_1}/>
              <source media="(min-width:757px)" data-srcset={banner_1}/>
              <img src={spinner} alt="banner1" className="b-lazy img-fluid" data-src={banner_1}/>
            </picture>
          </a>
        </div>
        <div className="col-6 px-0 position-relative">
          <a target="_self" href="/" title="banner_2" className="loading">
            <div className="position-absolute w-100 px-5 py-4 d-flex bg-opacity-primary-75 justify-content-end">
              <span className="text-white">BUDOW DOMÓW</span>
            </div>
            <picture>
              <source media="(min-width:979px)" data-srcset={banner_2}/>
              <source media="(min-width:757px)" data-srcset={banner_2}/>
              <img src={spinner} alt="banner_2" className="b-lazy img-fluid" data-src={banner_2}/>
            </picture>
          </a>
        </div> */}
        
      </div>
    
  );
};

export default Main_standard_banner;