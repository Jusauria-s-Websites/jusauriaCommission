import { Injectable } from '@angular/core';
import { CommissionDetails } from '../../Pojos/Objects/CommissionDetails';
import { Albums } from '../../Pojos/enums/Albums.enum';

@Injectable({
  providedIn: 'root'
})
export class EmbServiceService {
  
  constructor() { }
  static embCommType: CommissionDetails[] = [
    new CommissionDetails("Custom Patches 7$","Our custom patches are carefully crafted by hand or with a sewing machine. For designs with more than three colors, there may be a small additional fee.",[
      "additional colors: + 0.25$",
      "Velcro Backing: + 1$",
      "Sticky Backing: +1$",
      "Safety Pin Backing: 0.5$"
    ],Albums.programCommTypeIcon),
    new CommissionDetails("Wall Art","Circle 30cm border.",[
      "Price: 10$",
      "Any design!",
      "colored BG: + 2$",
    ],Albums.programCommTypeIcon)
  ]
  static crochetCommype: CommissionDetails[] = [
    new CommissionDetails("Amigurumi","More than 3$ costed extra",[
      "Price: 8$ ",
      "More detailed designs: + 3$",
      "color adding: + 1$",
    ],Albums.programCommTypeIcon),
  ]
}
