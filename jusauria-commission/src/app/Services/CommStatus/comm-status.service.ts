import { Injectable } from '@angular/core';
import { ServiceDetails } from '../../Pojos/Objects/ServiceDetails';
import { WorkOffersEnum } from '../../Pojos/enums/work-offers-enum';

@Injectable({
  providedIn: 'root'
})
export class CommStatusService {
  private commStatusText: string[]=["✓ All Commission Open ✓ ", "✕ All Commission Closed ✕", "▷ Commission Partly Open ◁"];
  commState: number = 1;
  commServiceOffers: ServiceDetails[]=[
    new ServiceDetails("Art Commission","Commissions can range from simple Icons to detailed refsheets.","/"+WorkOffersEnum.art,"",true),
    new ServiceDetails("Programming Commission","Commissions include hiring as solo programmer or team member for a project.","/"+WorkOffersEnum.program,"",true),
    new ServiceDetails("Needlecraft Commission","Commissions include Embroidery (Patches, Wall art) and Crochet (Plushies)","/"+WorkOffersEnum.embroidery,"",false),
    new ServiceDetails("Live2d Commission","Live2d only includes Rigging a character or making custom animations for them.","/"+WorkOffersEnum.live2d,"",false),
  ]

  
  constructor() { }
  
  getCommStatusText():string{
    return this.commStatusText[this.commState];
  }
}
