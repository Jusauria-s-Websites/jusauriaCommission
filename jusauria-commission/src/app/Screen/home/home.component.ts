import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../ReuseComponents/navbar/navbar.component';
import { CommStatusService } from '../../Services/CommStatus/comm-status.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../ReuseComponents/footer/footer.component';
import { AlbumImage } from '../../Pojos/Objects/AlbumImage';
import { Albums } from '../../Pojos/enums/Albums.enum';
import { ImgurAPIService } from '../../Services/ImgurService/imgurAPI.service';
import { GalleryComponent } from '../../ReuseComponents/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  commStatusService: CommStatusService= new CommStatusService();
  albumImages: Map<string,AlbumImage[]>= new Map();
  
  
  constructor(private imgurService: ImgurAPIService){
    imgurService.accessAlbum(Albums.homeAlbum).then(item=>{
      this.albumImages.set('home',item);
    }).catch(()=>{
      this.albumImages.set('home', [new AlbumImage('../../../assets/cheap_ych.png',"ychAd")] );
    })
    imgurService.accessAlbum(Albums.ServiceIconAlbum).then(item=>{
      this.albumImages.set('icons',item);
    }).catch(()=>{
      this.albumImages.set('icons', [new AlbumImage('../../../assets/eyyyy.png',"icons"),new AlbumImage('../../../assets/eyyyy.png',"icons"),new AlbumImage('../../../assets/eyyyy.png',"icons"),new AlbumImage('../../../assets/eyyyy.png',"icons"),new AlbumImage('../../../assets/eyyyy.png',"icons"),new AlbumImage('../../../assets/eyyyy.png',"icons"),new AlbumImage('../../../assets/eyyyy.png',"icons"),new AlbumImage('../../../assets/eyyyy.png',"icons")] );
    })
    imgurService.accessAlbumDescription(Albums.homeYCHAlbum).then(item=>{
      this.albumImages.set('ych',item);
    }).catch(()=>{
      this.albumImages.set('ych', [new AlbumImage('../../../assets/eyyyy.png',"Big Hug - Flat: 3$; Shaded: 5$"),new AlbumImage('../../../assets/eyyyy.png',"Hug - Flat: 10$; Shaded: 15$"),new AlbumImage('../../../assets/eyyyy.png',"ych"),new AlbumImage('../../../assets/eyyyy.png',"ych"),new AlbumImage('../../../assets/eyyyy.png',"ych"),new AlbumImage('../../../assets/eyyyy.png',"ych"),new AlbumImage('../../../assets/eyyyy.png',"ych"),new AlbumImage('../../../assets/eyyyy.png',"ych")] );
    })
  }

}
