import { Injectable } from '@angular/core';
import { CommissionDetails } from '../../Pojos/Objects/CommissionDetails';
import { Albums } from '../../Pojos/enums/Albums.enum';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {
  /* --- Art Commissions --- */ 
  static basicArtComms: CommissionDetails[]=[
    new CommissionDetails("Headshots","Your character will be drawn from shoulders up.",[
      "Sketch (no colored): 2$",
      "Sketch (colored): 6$",
      "Lineart: 5$",
      "Colored: 14$",
      "Shaded: 20$",
      "Shaded with Colored Lineart: 22$"
    ],Albums.HeadshotAlbum),
    new CommissionDetails("HalfBody","Your character will be drawn from knees up.",[
      "Sketch (no colored): 3$",
      "Sketch (colored): 7$",
      "Lineart: 8$",
      "Colored: 18$",
      "Shaded: 28$",
      "Shaded with Colored Lineart: 30$"
    ],Albums.HalfBodyAlbum),
    new CommissionDetails("FullBody","Your character will be drawn withoud limits",[
      "Sketch (no colored): 4$",
      "Sketch (colored): 10$",
      "Lineart: 15$",
      "Colored: 25$",
      "Shaded: 38$",
      "Shaded with Colored Lineart: 40$"
    ],Albums.FullBodyAlbum),
    new CommissionDetails("Emotes","Very simple headshot for emote usage. Drawing will be with trasparent background",[
      "Sketch (colored): 2$",
      "Lineart: 3$",
      "Colored: 5$",
      "Colored with Colored Lineart: 7$"
    ],Albums.EmoteAlbum),
    new CommissionDetails("Sticker","Your character will be drawn in a style suited for stickers. Drawing will be with transparent background",[
      "Sketch (no colored): 2$",
      "Sketch (colored): 4$",
      "Lineart: 6$",
      "Colored: 15$",
      "Colored with Colored Lineart: 17$"
    ],Albums.StickerAlbum)
  ]
  static specialArtComms: CommissionDetails[]=[
    new CommissionDetails("Charactersheet","I draw a detailed Character sheet for you.",[
      "Character front with color palett: 30$",
      "Character front and back with color palett: 50$",
      "Add expressions: +10$",
      "Add Items: +10$",
      "Include textareas: +5$",
    ],Albums.RefSheetAlbum),
    new CommissionDetails("Custom_Base","Base for adopt use, own drawing, etc.",[
      "Headshot: 3$",
      "Halfbody: 5$",
      "Fullbody: 12$",
      "Humans/Humanoids: +1$",
      "Furry (doesn't matter species): +2$",
      "Feral (doesn't matter species): +3$",
    ],Albums.CustomBaseAlbum),
    new CommissionDetails("Animations","Not Frame by Frame. Animation will be made with Live2d",[
      "Base price: From above options",
      "Animation price: Live2d Commission",
    ],Albums.AnimationAlbum),
    new CommissionDetails("Backgrounds","I draw a background scene for you.",[
      "Between 10$ to 60$. Depends much from the scene I should draw and my experiences drawing this.",
    ],Albums.BackgroundAlbum),
  ]
  static backgroundType: CommissionDetails[]=[
    new CommissionDetails("Simple-Background","Solid color, gradiant, or pattern",[
      "1$ - 5$",
    ],Albums.SimpleBackgroundAlbum),
    new CommissionDetails("Detailed-Background","Rooms, Enviroments, etc.",[
      "5$>",
    ],Albums.DetailedBackgroundAlbum),
   
  ]
  constructor() { }
  
}
