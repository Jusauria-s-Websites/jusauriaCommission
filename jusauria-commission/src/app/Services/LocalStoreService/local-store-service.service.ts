import { Injectable } from '@angular/core';
import { Albums } from '../../Pojos/enums/Albums.enum';
import { AlbumImage } from '../../Pojos/Objects/AlbumImage';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreServiceService {

  constructor() { }

  addToStore(folderName: Albums, values:AlbumImage[]):Promise<void>{
    return new Promise((resolve)=>{
      localStorage.setItem(folderName, JSON.stringify(values));
      resolve();
    })
  }
  addToStoreImage(pictureName: string, value:any):Promise<void>{
    return new Promise((resolve)=>{
      localStorage.setItem(pictureName, value);
      resolve();
    })
  }
  getFromStore(folderName:Albums): Promise<AlbumImage[]>{
    return new Promise((resolve,reject)=>{
      let array =localStorage.getItem(folderName)

      if(array){
        resolve(JSON.parse(array));
      } 
      else reject();
    })
    
  }
  getFromStoreImage(pictureName: string): Promise<string>{
    return new Promise((resolve,reject)=>{
      let imageLink =localStorage.getItem(pictureName)

      if(imageLink){
        resolve(imageLink);
      } 
      else reject();
    })
  }
  deleteFromStore(folderName:Albums): Promise<void>{
    return new Promise((resolve)=>{
      localStorage.removeItem(folderName);
      resolve();
    })
  }
  deleteStore(): Promise<void>{
    return new Promise((resolve)=>{
      localStorage.clear();
      resolve();
    })
  }
}
