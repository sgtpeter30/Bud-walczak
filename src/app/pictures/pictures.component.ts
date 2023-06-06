import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  @Input() image : any;
  @Input() text : string;
  @Input() classPicture : string;

  constructor() { 
    console.log(this.image);
    
  }

  ngOnInit(): void {
  }

}
