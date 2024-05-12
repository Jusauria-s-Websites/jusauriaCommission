import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../ReuseComponents/navbar/navbar.component';
import { CommStatusService } from '../../Services/CommStatus/comm-status.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../ReuseComponents/footer/footer.component';
import { AlbumImage } from '../../Pojos/Objects/AlbumImage';
import { Albums } from '../../Pojos/enums/Albums.enum';
import { ImgurAPIService } from '../../Services/ImgurService/imgurAPI.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  commStatusService: CommStatusService= new CommStatusService();
  albumImages: Map<string,AlbumImage[]>= new Map();
  
  
  constructor(private imgurService: ImgurAPIService){
    imgurService.accessAlbum(Albums.homeAlbum).then(item=>{
      this.albumImages.set('home',item);
    })
    imgurService.accessAlbum(Albums.ServiceIconAlbum).then(item=>{
      this.albumImages.set('icons',item);
    })
  }
}
