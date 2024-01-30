import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../ReuseComponents/navbar/navbar.component';
import { FooterComponent } from '../../ReuseComponents/footer/footer.component';

@Component({
  selector: 'app-about-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './about-profile.component.html',
  styleUrl: './about-profile.component.css'
})
export class AboutProfileComponent {
  age: number;
  constructor(){
    if(new Date().getMonth()<4){
      this.age=new Date().getFullYear()-2006;
    }else{
      this.age=new Date().getFullYear()-2005;
    }
  }
}
