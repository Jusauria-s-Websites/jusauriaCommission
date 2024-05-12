import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FirstjoinService {
  private sharedVariableSubject = new BehaviorSubject<boolean>(true);
  sharedVariable$ = this.sharedVariableSubject.asObservable();

  constructor() { }

  setSharedVariable(value: boolean) {
    this.sharedVariableSubject.next(value);
  }
}
