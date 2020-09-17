import { Component, OnInit } from '@angular/core';
import { MapToggleService } from '../map-toggle.service';
import { slideInAnimation } from '../utilities/slideInAnimation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [slideInAnimation]
})
export class MenuComponent {
  constructor(public mapService: MapToggleService) { }
  public menuOpen = true;

  public layers: any = {
    showIncidents: true,
    showFleet: false,
    showDepots: true
  }
}

