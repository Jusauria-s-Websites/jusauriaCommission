import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../ReuseComponents/navbar/navbar.component';
import { FooterComponent } from '../../ReuseComponents/footer/footer.component';
import { Albums } from '../../Pojos/enums/Albums.enum';
import { ImgurAPIService } from '../../Services/ImgurService/imgurAPI.service';

@Component({
  selector: 'app-about-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './about-profile.component.html',
  styleUrl: './about-profile.component.css'
})
export class AboutProfileComponent{
  age: number;
  picture: string | undefined;
  constructor(private imgurService: ImgurAPIService){
    //age update
    if(new Date().getMonth()<3){
      this.age=new Date().getFullYear()-2006;
    }else{
      this.age=new Date().getFullYear()-2005;
    }

    //picture inside the serviceIcons
    imgurService.accessAlbum(Albums.ServiceIconAlbum).then(item=>{
      this.picture=item.at(item.length-1)?.link;
    })
  }
}
