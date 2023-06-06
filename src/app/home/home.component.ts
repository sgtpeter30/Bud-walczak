import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banners = [];

  constructor() {

    this.banners = [
      {
        title: 'Wypożyczalnia',
        link: '/equipment',
        image: {
          path:"/banners/main_page",
          name:"image_1",
          extension:"jpg"
        }
      },
      {
        title: 'Budowa domów',
        link: '/houses',
        image: {
          path:"/banners/main_page",
          name:"image_2",
          extension:"jpg"
        }
      }

    ]
  }

  ngOnInit(): void {
  }

}
