import React, { useEffect } from "react";
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
import "../styles/contact.scss";
import markerPath from "../icons/leaflet/marker-icon.png";
import markerShadowPath from "../icons/leaflet/marker-shadow.png";
import L from 'leaflet';

const Contact = () => {
  useEffect(() => {
    // let myIcon = L.icon({
    //   iconUrl: myIconPath,
    // });
    const contactMap = L.map('contact_map').setView([53.4186107260396, 14.472418640789389], 20);
    // let marker = L.marker([53.4186107260396, 14.472418640789389], {icon: myIcon}).addTo(contactMap);
    // let marker = L.marker([53.4186107260396, 14.472418640789389]).addTo(contactMap);
    let marker = L.marker([53.41848111, 14.472418640789389]).addTo(contactMap);
    // const mapShadow = L.map('map_shadow').setView([53.4186107260396, 14.472418640789389], 20);

    // marker.bindPopup("Tu nas znajdziesz").openPopup();
    // const mapShadow = document.getElementById('map_shadow');
    // contactMap = document.getElementById('contact_map')
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(contactMap);
    document.querySelector('.leaflet-marker-icon').src = markerPath;
    document.querySelector('.leaflet-marker-shadow').src = markerShadowPath;
    return()=>{
      contactMap.remove();
    }
  });
    
    
    return (
      <div id="contact" >
        {/* <div className="big_label row d-flex d-md-none">
          <h1>Kontakt</h1>
        </div> */}
        
        <div className="contact-data d-flex flex-wrap align-content-start justify-content-center">
          <h2 className="border-bottom pb-2">
            Z.U.H. Witold Walczak
          </h2>
          <span className="d-flex py-1 align-items-center"><i className="icon-phone"></i><a className="phone" href="tel:+48570207020" type="phone" >570 20 70 20</a> </span>
          <span className="d-flex py-1 align-items-center"><i className="icon-mail"></i> <a className="mail" href="mailto:biuro@bud-walczak.pl" type="mail" >biuro@bud-walczak.pl</a> </span>
          <span className="d-flex py-1 align-items-center"><i className="icon-mark"></i> <span>ul. Kielecka 50, 71-037 Szczecin</span> </span>
        </div>
        
        <div id="maps_container">
          <div id="map_shadow"></div>
          <div id="contact_map" className="contact_map w-100 d-flex flex-wrap container"></div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  