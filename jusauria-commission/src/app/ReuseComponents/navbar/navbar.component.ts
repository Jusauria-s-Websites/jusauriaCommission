import { Component, OnInit } from '@angular/core';
import { WorkOffersEnum } from '../../Pojos/enums/work-offers-enum';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  serviceOffers!: string[];
  spinScreen: boolean=false;

  constructor(){
    this.serviceOffers = Object.values(WorkOffersEnum)
  }
  ngOnInit(): void {
  }
  spin(){
    if(this.spinScreen){
      this.spinScreen=false;
      document.body.classList.remove("fa-spin")
    }else{
      document.body.classList.add("fa-spin")
      this.spinScreen=true;
    }
  }
}
