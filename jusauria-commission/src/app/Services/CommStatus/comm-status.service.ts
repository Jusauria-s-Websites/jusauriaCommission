import { Injectable } from '@angular/core';
import { ServiceDetails } from '../../Pojos/Objects/ServiceDetails';
import { WorkOffersEnum } from '../../Pojos/enums/work-offers-enum';

@Injectable({
  providedIn: 'root'
})
export class CommStatusService {
  private commStatusText: string[]=["✓ Commission Open ✓ ", "✕ Commission Closed ✕"];
  commState: boolean=true;
  commServiceOffers: ServiceDetails[]=[
    new ServiceDetails("Art Commission","Art commissions can range from simple Icons to detailed character refsheets.","/"+WorkOffersEnum.art,""),
    new ServiceDetails("Programming Commission","Programming commissions include being hired as solo programmer or team member for a project.","/"+WorkOffersEnum.program,""),
    new ServiceDetails("Embroidery Commission","Embroidery includes making handmade Patches or wall decorations. Furthermore is Crochet work also an option to select.","/"+WorkOffersEnum.embroidery,""),
    new ServiceDetails("Live2d Commission","Live2d only includes Rigging a character or making custom animations for them.","/"+WorkOffersEnum.live2d,""),
  ]

  constructor() { }

  getCommStatusText():string{
    return this.commState?this.commStatusText[0]:this.commStatusText[1];
  }
}
