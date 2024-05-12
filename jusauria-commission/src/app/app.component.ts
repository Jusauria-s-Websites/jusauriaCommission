import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, RouteReuseStrategy, RouterOutlet } from '@angular/router';
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
export class AppComponent {
  title = 'jusauria-commission';

  //clears localstorage after the page is gone
  @HostListener('window:beforeunload', ['$event'])
  clearLocalStorage(event: any) {
    console.log("cleared")
    localStorage.clear();
  }
}
