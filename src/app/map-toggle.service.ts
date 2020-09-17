import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapToggleService {
  public markers$: BehaviorSubject<any> = new BehaviorSubject<any>({
    showIncidents: true,
    showFleet: true,
    showDepots: true
  });

  constructor() { }
}
