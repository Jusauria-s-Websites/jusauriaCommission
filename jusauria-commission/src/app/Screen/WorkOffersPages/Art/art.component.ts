import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../../ReuseComponents/navbar/navbar.component';
import { FooterComponent } from '../../../ReuseComponents/footer/footer.component';
import { DropdownComponent } from '../../../ReuseComponents/dropdown/dropdown.component';
import { ArtCommissionDetails } from '../../../Pojos/Objects/ArtCommissionDetails';
import { OfferServiceService } from '../../../Services/ArtService/ArtService.service';
import { ImgurAPIService } from '../../../Services/ImgurService/imgurAPI.service';
import { AlbumImage } from '../../../Pojos/Objects/AlbumImage';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent, DropdownComponent],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css'
})
export class ArtComponent {
  typeBasic: ArtCommissionDetails[];
  special: ArtCommissionDetails[];
  backgrounds: ArtCommissionDetails[];
  typeImages: Array<AlbumImage[]>=[];
  specialImages:Array<AlbumImage[]>=[];
  backgroundImages: Array<AlbumImage[]>=[];
  ychExamples: AlbumImage[]=[];

  constructor(private imgurService: ImgurAPIService){
    this.typeBasic= OfferServiceService.basicArtComms;
    this.special=OfferServiceService.specialArtComms;
    this.backgrounds=OfferServiceService.backgroundType;

    /*for(let i =0; i<this.typeBasic.length;i++){
      imgurService.getAlbumImages(this.typeBasic[i].artExampleAlbum).then(item=>{
        this.typeImages.push(item);
      })
     
    }*/
  }
}
