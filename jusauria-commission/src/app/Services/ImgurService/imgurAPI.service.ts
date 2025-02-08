import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums } from '../../Pojos/enums/Albums.enum';
import { AlbumImage } from '../../Pojos/Objects/AlbumImage';
import { LocalStoreServiceService } from '../LocalStoreService/local-store-service.service';

@Injectable({
  providedIn: 'root'
})
export class ImgurAPIService {
  private clientId:string= "26408f54d0638dc";
  private apiUrlBase:string="https://api.imgur.com/3/";
  private accessToken:string="04a84fa23d73bf9b4c8d0268a6794f1ee0da0142";
  private refreshToken:string="faf5b311ed57253a94c4122b84846dbc8d8fb57d";
  
  constructor(private http: HttpClient, private localService: LocalStoreServiceService) {}
  accessAlbum(folderName: Albums):Promise<AlbumImage[]>{
    return new Promise((resolve,reject)=>{
      if(window.location.href.includes("http://localhost:4200")){
        reject()
        return
      } 
      this.localService.getFromStore(folderName).then(array=>{
        resolve(array)
      }).catch(()=>{
        this.getAlbumImages(folderName).then((array)=>{
          resolve(array)
        }).catch(()=>{
          reject();
        })
      })
    })
  }
  getAlbumImages(album:Albums): Promise<AlbumImage[]>{    
    return new Promise((resolve,reject)=>{this.http.get<any>(this.apiUrlBase+`account/Jusauria/album/${album}`, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`
      }
    }).subscribe(result=>{
      if(result.status==200){
        //cuts the result so that you get the name and the link of image
        const albumImages: AlbumImage[] = result.data.images.map((image: any) => {
          return new AlbumImage(image.link, image.name);
        });
        resolve(albumImages);
        this.localService.addToStore(album, albumImages);
      }else{
        reject(result);
      }
    })
    });
  }
  getAlbumImagesDescription(album:Albums): Promise<AlbumImage[]>{    
    return new Promise((resolve,reject)=>{this.http.get<any>(this.apiUrlBase+`account/Jusauria/album/${album}`, {
      headers: {
        'Authorization': `Bearer ${this.accessToken}`
      }
    }).subscribe(result=>{
      if(result.status==200){
        //cuts the result so that you get the name and the link of image
        const albumImages: AlbumImage[] = result.data.images.map((image: any) => {
          return new AlbumImage(image.link, image.description);
        });
        resolve(albumImages);
        this.localService.addToStore(album, albumImages);
      }else{
        reject(result);
      }
    })
    });
  }
  accessLogo():Promise<string>{
    return new Promise((resolve,reject)=>{
      if(window.location.href.includes("http://localhost:4200/")){
        reject()
        return
      }
      this.localService.getFromStoreImage("logo").then(array=>{
        resolve(array)
      }).catch(()=>{
        this.getLogoImage().then((array)=>{
          resolve(array)
        }).catch(()=>{
          reject();
        })
      })
    })
    
  }
  getLogoImage():Promise<string>{
    return new Promise((resolve, reject)=>{
      this.http.get<any>(this.apiUrlBase+`account/Jusauria/image/TK0XLod`, {
        headers: {'Authorization': `Bearer ${this.accessToken}`}
      }).subscribe(result=>{
        if(result.status==200){
          resolve(result.data.link)
          this.localService.addToStoreImage("logo", result.data.link);
        }else{
          reject(result);
        }
      })
    })
  };
}
