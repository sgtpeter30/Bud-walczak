import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {
  gallery1 = [
    1, 2, 3,4,5,6,7,8,9,10,11,12
  ];
  gallery2 = [
    1, 2, 3,4,5,6,7,8
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
