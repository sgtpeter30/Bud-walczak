import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bud_walczak_angular';
  currentHome$ = true;
  private history: string[] = []
  
  constructor(
    private router: Router,
  ){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
        if(event.urlAfterRedirects === '/'){
          this.currentHome$ = true;
        }else{
          this.currentHome$ = false;
        }
      }
    })
  }
}
