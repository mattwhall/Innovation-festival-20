import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnovationMapComponent } from './map/map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { BasePopupComponent } from './base-popup/base-popup.component';
import { IncidentPopupComponent } from './incident-popup/incident-popup.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MapToggleService } from './map-toggle.service';

@NgModule({
  declarations: [
    AppComponent,
    InnovationMapComponent,
    BasePopupComponent,
    IncidentPopupComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MapToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
