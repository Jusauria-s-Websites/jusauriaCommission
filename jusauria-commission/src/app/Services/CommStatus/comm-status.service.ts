import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommStatusService {
  commStatusText: string[]=["Commission Open", "Commission Closed"];
  commState: boolean=true;

  constructor() { }

  getCommStatusText():string{
    return this.commState?this.commStatusText[0]:this.commStatusText[1];
  }
}
