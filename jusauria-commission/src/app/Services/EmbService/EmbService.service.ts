import { Injectable } from '@angular/core';
import { CommissionDetails } from '../../Pojos/Objects/CommissionDetails';
import { Albums } from '../../Pojos/enums/Albums.enum';

@Injectable({
  providedIn: 'root'
})
export class EmbServiceService {
  
  constructor() { }
  static embCommType: CommissionDetails[] = [
    new CommissionDetails("Custom Patches","Those are handmade Patches with just needlework or a sewing machine. More than 3 colors will cost slightly extra.",[
      "Price: 7$ ",
      "color adding: + 0.15$",
      "Velcro: + 1$",
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
