import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  equipment = [
    {
      "link": "about-us" ,
      "name": "O firmie"
    },
    {
      "link": "contact" ,
      "name": "Kontakt"
    }
  ];
  homes= [
    {
      "link": "gallery" ,
      "name": "Galeria"
    },
    {
      "link": "about-us" ,
      "name": "O firmie"
    },
    {
      "link": "contact" ,
      "name": "Kontakt"
    }
  ];
  // menu$ = this.homes;
  menu$: any;
  constructor(
    private location: Location,
  ) {}
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  ngOnInit(): void {
    if(this.location.path().includes('/houses')){
      this.menu$ = this.homes;
    }else if(this.location.path().includes('/equipment')){
      this.menu$ = this.equipment;
    }

    const mobile = window.matchMedia("(max-width: 768px)")
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
  }
}
