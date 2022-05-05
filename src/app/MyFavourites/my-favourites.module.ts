import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MyFavourites } from './my-favourites.component';

@NgModule({
  declarations: [
    MyFavourites
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    MyFavourites
  ],
  providers: [],
  bootstrap: [MyFavourites]
})
export class MyFavouritesModule { }
