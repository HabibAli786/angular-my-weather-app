import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  exports: [
    WeatherComponent
  ],
  providers: [],
  bootstrap: [WeatherComponent]
})
export class WeatherModule { }
