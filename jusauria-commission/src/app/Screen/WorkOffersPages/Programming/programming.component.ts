import { Component } from '@angular/core';
import { CommissionDetails } from '../../../Pojos/Objects/CommissionDetails';
import { ProgramServiceService } from '../../../Services/ProgramService/ProgramService.service';

@Component({
  selector: 'app-programming',
  standalone: true,
  imports: [],
  templateUrl: './programming.component.html',
  styleUrl: './programming.component.css'
})
export class ProgrammingComponent {
  commType: CommissionDetails[];
  languages: string[]= ['JavaScript', 'TypeScript', 'C/C++', 'Java', 'Python']
  examples: string[]=[
    '3 Discord Bots: used in my discord server, connection to MongoDB; -> NightSky: handling admin related things; -> PointLink: in server currency; -> Somsily: playing games and other silly features',
    'Websites: this one is made by me, made one with websocket for life time interactions with users',
    'Bots: website bots for liking social media and Typewriter',
    '3 Opera Mods: made 3 custom opera mods for friends and myself',
    'worked with Android Studio with Java as language',
    'experiences with Hybrid-Apps and frameworks like React and Angular',
    'Animation CSS Library: Juflair[destroyed...]'
  ]
  constructor(){
    this.commType= ProgramServiceService.programCommType;
  }
}
