import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-popup',
  templateUrl: './base-popup.component.html',
  styleUrls: ['./base-popup.component.scss']
})
export class BasePopupComponent implements OnInit {

  @Input() showPopup: boolean;
  @Output() showPopupChange = new EventEmitter<boolean>();
  
  @Input() data:any;

  vehicles: any;
  activeVehicle: any;

  constructor() {
  }

  isActive(reg) {
    return this.activeVehicle.reg == reg
  }

  closePopup(){
    this.showPopup = false;
    this.showPopupChange.emit(false);
  }

  setActive(vehicle){
    this.activeVehicle = vehicle;
  }

  getColour(val){
    switch(val){
      case 0: 
        return "red";
      case 1: 
        return "amber";
      case 2: 
        return "green";
      default: 
        return "red";
    }
  }

  ngOnInit(): void {
    this.showPopup = false;
    this.vehicles = [
      {
      make: "Nissan Leaf",
      reg: "AA09 yxx",
      isElectric: true, 
      range: 200,
      mpg:21,
      shouldReplace: 0
    },
    {
      make: "BMW I3",
      reg: "AA10 ryy",
      isElectric: true, 
      range: 200,
      mpg:21,
      shouldReplace: 1
    },
    {
      make: "Ford Ranger",
      reg: "AA09 axe",
      isElectric: false, 
      range: 200,
      mpg:10,
      shouldReplace: 2
    }];
    this.activeVehicle = this.vehicles[0];
  }

}
