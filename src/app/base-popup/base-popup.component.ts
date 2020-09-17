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
