import { Component } from "@angular/core";


@Component({
  selector:'pm-root',
  template: 
  `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <p class='navbar-brand'>{{pageTitle}}</p>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/test'>Test</a></li>
     
          </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div> 
    `
})
export class AppComponent{
  pageTitle: string='Angular';
}   