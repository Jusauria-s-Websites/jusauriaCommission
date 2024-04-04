import { Injectable } from '@angular/core';
import { Social } from '../../Pojos/Objects/Social';

@Injectable({
  providedIn: 'root'
})
export class SocialServiceService {
  static currentSocials: Social[]=[
    new Social("Discord","https://discord.gg/RVK5XGZ2","fa-discord"),
    new Social("Instagram","https://www.instagram.com/jusauria_me/?next=%2F", "fa-instagram"),
    new Social("Reddit", "https://www.reddit.com/user/jusauria_sfw/", "fa-reddit"),
    new Social("DeviantArt", "https://www.deviantart.com/jusauria", "fa-deviantart"),
    new Social("Tiktok", "https://www.tiktok.com/@jusauriaspeedpaint", "fa-tiktok")
  ]
constructor() { }

}
