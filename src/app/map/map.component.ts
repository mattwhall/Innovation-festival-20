import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { LngLat,Map,Marker, Popup, } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class InnovationMapComponent implements OnInit,AfterViewInit {

  map: Map;
  showBase: boolean = false;
  showIncident: boolean = false;

  ngOnInit(): void {
    this.map = new Map({
      container: "map-container",
      style: 'mapbox://styles/matthewwhalley/ckf57maro2cu019o9cj9l5zym',
      zoom: 9,
      center:new LngLat(-1.6178, 54.9783),
      accessToken: ''
    });
  }

  ngAfterViewInit(): void {
      console.log("initialising map!!");
      console.log(this.map);
      var _this = this;
      this.map.on("load", function(){
        _this.map.on("click", "missionzero", function(e){
          console.log(e);
          console.log(e.features[0]);
          _this.showIncident = true;
        });
        _this.map.on("click", "northumbriadepotasgeojson-atfs9j", function(e){
          console.log(e);
          console.log(e.features[0]);
          _this.showBase = true;
        });
      });
  }

  placeMarkers(): void {
    var _this = this;
    var baseMarker = new Marker();
    baseMarker.setLngLat(new LngLat(-1.6178, 54.9783));
    baseMarker.on("click", function(){
      console.log("click");
      _this.showBase = true;
    });
    baseMarker.addTo(this.map);

    var incidentMarker = new Marker({
      color: "#FF0000"
    });
    incidentMarker.setLngLat(new LngLat(-1.6068, 54.9603));
    incidentMarker.on("click", function(){
      console.log("click");
      _this.showIncident = true;
    });
    incidentMarker.addTo(this.map);
  }


}
