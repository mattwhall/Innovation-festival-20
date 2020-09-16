import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incident-popup',
  templateUrl: './incident-popup.component.html',
  styleUrls: ['./incident-popup.component.scss']
})
export class IncidentPopupComponent implements OnInit {

  @Input() showPopup: boolean;
  @Output() showPopupChange = new EventEmitter<boolean>();

  constructor() { 
    this.showPopup = false;
  }

  closePopup(){
    this.showPopup = false;
    this.showPopupChange.emit(false);
  }

  ngOnInit(): void {
  }

}
