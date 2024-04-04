import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums } from '../../Pojos/enums/Albums.enum';
import { AlbumImage } from '../../Pojos/Objects/AlbumImage';

@Injectable({
  providedIn: 'root'
})
export class ImgurAPIService {
  clientId:string= "26408f54d0638dc";
  apiUrlBase:string="https://api.imgur.com/3/";
  accessToken:string="04a84fa23d73bf9b4c8d0268a6794f1ee0da0142";
  refreshToken:string="faf5b311ed57253a94c4122b84846dbc8d8fb57d";
  
  constructor(private http: HttpClient) {}
  getAlbumImages(album:string): Promise<AlbumImage[]>{    
    return new Promise((resolve,reject)=>{this.http.get<any>(this.apiUrlBase+`account/Jusauria/album/${album}`, {
      headers: {'Authorization': `Bearer ${this.accessToken}`}
    }).subscribe(result=>{
      if(result.status==200){
        //cuts the result so that you get the name and the link of image
        const albumImages: AlbumImage[] = result.data.images.map((image: any) => {
          return new AlbumImage(image.link, image.name);
        });
        resolve(albumImages);
      }else{
        reject(result);
      }
    })
    });
  }
    getLogoImage():Promise<string>{
      console.log("My try");
      return new Promise((resolve, reject)=>{
        this.http.get<any>(this.apiUrlBase+`account/Jusauria/image/TK0XLod`, {
          headers: {'Authorization': `Bearer ${this.accessToken}`}
        }).subscribe(result=>{
          if(result.status==200){
            resolve(result.data.link)
          }else{
            reject(result);
          }
        })
      })
      };
  }
  