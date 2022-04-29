import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    WeatherComponent
  ],
  providers: [WeatherService],
  bootstrap: [WeatherComponent]
})
export class WeatherModule { }
