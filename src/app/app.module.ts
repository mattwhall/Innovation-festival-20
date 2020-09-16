import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnovationMapComponent } from './map/map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { BasePopupComponent } from './base-popup/base-popup.component';
import { IncidentPopupComponent } from './incident-popup/incident-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    InnovationMapComponent,
    BasePopupComponent,
    IncidentPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
