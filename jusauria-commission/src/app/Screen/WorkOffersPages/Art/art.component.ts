import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../../../ReuseComponents/navbar/navbar.component';
import { FooterComponent } from '../../../ReuseComponents/footer/footer.component';
import { DropdownComponent } from '../../../ReuseComponents/dropdown/dropdown.component';
import { CommissionDetails } from '../../../Pojos/Objects/CommissionDetails';
import { OfferServiceService } from '../../../Services/ArtService/ArtService.service';
import { ImgurAPIService } from '../../../Services/ImgurService/imgurAPI.service';
import { AlbumImage } from '../../../Pojos/Objects/AlbumImage';
import { Albums } from '../../../Pojos/enums/Albums.enum';
import {FormsModule} from '@angular/forms'
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent, DropdownComponent, FormsModule, CalculatorComponent],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent{
  typeBasic: CommissionDetails[];
  special: CommissionDetails[];
  backgrounds: CommissionDetails[];
  albumImages: Map<string,AlbumImage[]>= new Map();
  
  constructor(private imgurService: ImgurAPIService){
    this.typeBasic= OfferServiceService.basicArtComms;
    this.special=OfferServiceService.specialArtComms;
    this.backgrounds=OfferServiceService.backgroundType;
    
    for(let i =0; i<this.typeBasic.length;i++){
      imgurService.accessAlbum(this.typeBasic[i].artExampleAlbum).then(item=>{
        this.albumImages.set(this.typeBasic[i].type,item);
      })
    }
    for(let i =0; i<this.special.length;i++){
      imgurService.accessAlbum(this.special[i].artExampleAlbum).then(item=>{
        this.albumImages.set(this.special[i].type,item);
      })
    }
    for(let i =0; i<this.backgrounds.length;i++){
      imgurService.accessAlbum(this.backgrounds[i].artExampleAlbum).then(item=>{
        this.albumImages.set(this.backgrounds[i].type,item);
      })
    }
    imgurService.accessAlbum(Albums.YCHAlbum).then(item=>{
      this.albumImages.set('ych',item);
    })
  }
}
