import { Component } from '@angular/core';
import { SocialServiceService } from '../../Services/SocialService/SocialService.service';
import { Social } from '../../Pojos/Objects/Social';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentDate: Date = new Date();
  currentSocials:Social[]= SocialServiceService.currentSocials;
}
