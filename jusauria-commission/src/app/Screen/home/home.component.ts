import { Component } from '@angular/core';
import { NavbarComponent } from '../../ReuseComponents/navbar/navbar.component';
import { CommStatusService } from '../../Services/CommStatus/comm-status.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../ReuseComponents/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  commStatusService: CommStatusService= new CommStatusService();


  constructor(){}
}
