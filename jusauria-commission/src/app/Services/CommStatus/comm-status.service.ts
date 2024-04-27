import { Injectable } from '@angular/core';
import { ServiceDetails } from '../../Pojos/Objects/ServiceDetails';
import { WorkOffersEnum } from '../../Pojos/enums/work-offers-enum';

@Injectable({
  providedIn: 'root'
})
export class CommStatusService {
  private commStatusText: string[]=["✓ All Commission Open ✓ ", "✕ Commission Partially Closed ✕"];
  commState: boolean=false;
  commServiceOffers: ServiceDetails[]=[
    new ServiceDetails("Art Commission","Commissions can range from simple Icons to detailed refsheets.","/"+WorkOffersEnum.art,"",true),
    new ServiceDetails("Programming Commission","Commissions include hiring as solo programmer or team member for a project.","/"+WorkOffersEnum.program,"",true),
    new ServiceDetails("Needlecraft Commission","Commissions include Embroidery (Patches, Wall art) and Crochet (Plushies)","/"+WorkOffersEnum.embroidery,"",false),
    new ServiceDetails("Live2d Commission","Live2d only includes Rigging a character or making custom animations for them.","/"+WorkOffersEnum.live2d,"",false),
  ]
  cheapServiceOffers: ServiceDetails[]=[
    new ServiceDetails("YCH Commissions","Your Character Here - Pose is decided and you can see your character drawn in this pose and scene. Cheaper than regular drawings but also less change opportunities.","https://www.deviantart.com/jusauria/gallery/78700756/ych","",false),
  ]
  
  constructor() { }
  
  getCommStatusText():string{
    return this.commState?this.commStatusText[0]:this.commStatusText[1];
  }
}
