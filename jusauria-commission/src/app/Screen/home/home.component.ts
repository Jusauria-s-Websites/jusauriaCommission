import { Component } from '@angular/core';
import { NavbarComponent } from '../../ReuseComponents/navbar/navbar.component';
import { CommStatusService } from '../../Services/CommStatus/comm-status.service';
import { CommonModule } from '@angular/common';
import { WorkOffersEnum } from '../../Pojos/enums/work-offers-enum';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  commStatusService: CommStatusService= new CommStatusService();

  constructor(){}
}
