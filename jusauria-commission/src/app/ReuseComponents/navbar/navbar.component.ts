import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WorkOffersEnum } from '../../Pojos/enums/work-offers-enum';
import { ImgurAPIService } from '../../Services/ImgurService/imgurAPI.service';
import { RouterModule } from '@angular/router';
import { ServiceDetails } from '../../Pojos/Objects/ServiceDetails';
import { CommStatusService } from '../../Services/CommStatus/comm-status.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, AfterViewInit {
  serviceOffers!: string[];
  serviceStatus!:ServiceDetails[];
  spinScreen: boolean=false;
  logoLink: string="";

  constructor(private imgur: ImgurAPIService, private comms: CommStatusService){
    this.serviceOffers = Object.values(WorkOffersEnum)
    this.serviceStatus= comms.commServiceOffers;
    if(this.logoLink==""){
      this.imgur.getLogoImage().then(value=>this.logoLink=value)
    }
  }
  ngAfterViewInit(): void {
    
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
