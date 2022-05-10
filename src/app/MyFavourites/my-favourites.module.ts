import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MyFavourites } from './my-favourites.component';
import { FavouriteReducer } from '../redux/reducers/favourites.reducer';
import { StoreModule } from '@ngrx/store';
import { WeatherService } from '../Weather/weather.service';

@NgModule({
  declarations: [
    MyFavourites
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('favourites' , FavouriteReducer),
  ],
  exports: [
    MyFavourites
  ],
  providers: [WeatherService],
  bootstrap: [MyFavourites]
})
export class MyFavouritesModule { }
