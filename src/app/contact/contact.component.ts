import { Component, OnInit } from '@angular/core';
// import L from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const contactMap = L.map('contact_map').setView([53.4186107260396, 14.472418640789389], 20);
    
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(contactMap);
    let icon = {
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 0 ],
        iconUrl: '../../assets/icons/leaflet/marker-icon.png',
        shadowUrl: '../../assets/icons/leaflet/marker-icon.png'
    })
    };
    let marker = L.marker([53.41859911, 14.472418640789389], icon).addTo(contactMap);
    return()=>{
      contactMap.remove();
    }
  }

}
