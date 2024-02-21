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
    new ServiceDetails("Art Commission","Art commissions can range from simple Icons to detailed refsheets.","/"+WorkOffersEnum.art,""),
    new ServiceDetails("Programming Commission","Programming commissions include hiring me as solo programmer or team member for a project.","/"+WorkOffersEnum.program,""),
    new ServiceDetails("Embroidery Commission","Embroidery includes making handmade Patches or wall decorations. Furthermore is Crochet work also an option to select.","/"+WorkOffersEnum.embroidery,""),
    new ServiceDetails("Live2d Commission","Live2d only includes Rigging a character or making custom animations for them.","/"+WorkOffersEnum.live2d,""),
  ]
  cheapServiceOffers: ServiceDetails[]=[
    new ServiceDetails("YCH Commissions","Your Character Here - Pose is decided and you can see your character drawn in this pose and scene. Cheaper than regular drawings but also less change opportunities.","https://www.deviantart.com/jusauria/gallery/78700756/ych",""),
    new ServiceDetails("Redbubble Shop","Redbubble is a website to buy physical items with the art you desire. Stickers and more can be ordered there. By request Jusauria can upload her art there for you to purchase.", "https://www.redbubble.com/de/people/Jusauria-tryout/shop?asc=u","")
  ]
  
  constructor() { }
  
  getCommStatusText():string{
    return this.commState?this.commStatusText[0]:this.commStatusText[1];
  }
}
