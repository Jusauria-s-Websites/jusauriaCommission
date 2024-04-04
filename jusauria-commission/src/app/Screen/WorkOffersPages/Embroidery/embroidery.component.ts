import { Component } from '@angular/core';
import { CommissionDetails } from '../../../Pojos/Objects/CommissionDetails';
import { EmbServiceService } from '../../../Services/EmbService/EmbService.service';

@Component({
  selector: 'app-embroidery',
  standalone: true,
  imports: [],
  templateUrl: './embroidery.component.html',
  styleUrl: './embroidery.component.css'
})
export class EmbroideryComponent {
  embComms:CommissionDetails[];
  crochetComms: CommissionDetails[];

  constructor(){
    this.embComms = EmbServiceService.embCommType;
    this.crochetComms = EmbServiceService.crochetCommype;
  }
}
