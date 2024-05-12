import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, NavigationStart, provideRouter, Router, RouteReuseStrategy, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ReuseComponents/navbar/navbar.component';
import { FooterComponent } from './ReuseComponents/footer/footer.component';
import { CustomReuseStrategy } from './Services/ReuseStragety/CustomReuseStrategy';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavbarComponent,
    FooterComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: provideRouter(routes),
      useClass: CustomReuseStrategy,
    },
 ],
})
export class AppComponent implements OnInit {
  title = 'jusauria-commission';
  
  ngOnInit(): void {
    if(window.location.href=="https://jusauria-s-websites.github.io/jusauriaCommission/" || window.location.href=="http://localhost:4200/"){
      localStorage.clear()
      console.log("cleared")
    } 
  }
}
