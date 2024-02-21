import { Injectable } from '@angular/core';
import { CommissionDetails } from '../../Pojos/Objects/CommissionDetails';
import { Albums } from '../../Pojos/enums/Albums.enum';

@Injectable({
  providedIn: 'root'
})
export class ProgramServiceService {
  static programCommType: CommissionDetails[] = [
    new CommissionDetails("Websites - 20$","They can be used for private or business purposes. ",[
      "Languages: JavaScript or TypeScript",
      "Frameworks: Angular, open to use React too",
      "Css + Bootstrap <- Usual combination",
      "If you desire, I should use something different, please tell me in advance.",
    ],Albums.programCommTypeIcon),
    new CommissionDetails("Discrod Bots - 10$","Their functions depend on what you want and need",[
      "Languages: JavaScript",
      "Can be linked to database or APIs",
      "Hosting will be done by customer.",
    ],Albums.programCommTypeIcon),
    new CommissionDetails("Opera Mod - 5$","Custom Opera Mod for private usage",[
      "Using offical mod template",
      "Please provide general mod Theme, Art, Sounds, etc.",
      "If needed I can help searching for ideas",
    ],Albums.programCommTypeIcon),
    new CommissionDetails("Not defined here Comm - 10$","If you want me to program something which is not a typical commission, tell me the details and I'll tell you if I can do this or not.",[
    ],Albums.programCommTypeIcon),
  ]
  
constructor() { }

}
