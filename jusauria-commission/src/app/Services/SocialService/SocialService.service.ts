import { Injectable } from '@angular/core';
import { Social } from '../../Pojos/Objects/Social';

@Injectable({
  providedIn: 'root'
})
export class SocialServiceService {
  static currentSocials: Social[]=[
    new Social("Discord","https://discord.gg/UvpV7SSPzj","fa-discord"),
    new Social("Furaffinity", "https://www.furaffinity.net/user/jusauria", "fa-solid fa-paw"),
    new Social("Instagram","https://www.instagram.com/jusauria_me", "fa-instagram"),
    new Social("Reddit", "https://www.reddit.com/user/jusauria_sfw/", "fa-reddit"),
    new Social("Tiktok", "https://www.tiktok.com/@jusauriaspeedpaint", "fa-tiktok"),
    new Social("Youtube", "https://www.youtube.com/@jusaurias", "fa-youtube"),
    new Social("DeviantArt", "https://www.deviantart.com/jusauria", "fa-deviantart")
  
  ]
  static socialsNSFW: Social[]=[
    new Social("Instagram","https://www.instagram.com/furryclubroxy", "fa-instagram"),
    new Social("Furaffinity", "https://www.furaffinity.net/user/jusauriansfw", "fa-solid fa-paw"),
    new Social("Bluesky", "https://bsky.app/profile/jusauria.bsky.social", "fa-bluesky"),
    new Social("Reddit", "https://www.reddit.com/user/NSFW_Ju/", "fa-reddit")
    
  ]
constructor() { }

}
