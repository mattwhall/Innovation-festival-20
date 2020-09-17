import { Component, OnInit } from '@angular/core';
import { MapToggleService } from '../map-toggle.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public mapService: MapToggleService) { }

  public layers: any = {
    showIncidents: true,
    showFleet: false,
    showDepots: true
  }
}

