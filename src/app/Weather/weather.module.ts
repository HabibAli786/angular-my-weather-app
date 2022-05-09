import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';
import { StoreModule } from '@ngrx/store';
import { FavouriteReducer } from '../redux/reducers/favourites.reducer';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('favourites' , FavouriteReducer),
  ],
  exports: [
    WeatherComponent
  ],
  providers: [WeatherService],
  bootstrap: [WeatherComponent]
})
export class WeatherModule { }
