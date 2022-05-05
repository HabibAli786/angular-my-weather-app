import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'

import { SimpleReducer } from './simple.reducer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './Weather/weather.module';
import { AboutModule } from './About/about.module';
import { HomeComponent } from './Home/home.component';
import { HomeModule } from './Home/home.module';
import { MyFavouritesModule } from './MyFavourites/my-favourites.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherModule,
    AboutModule,
    HomeModule,
    MyFavouritesModule,
    StoreModule.forRoot({ message: SimpleReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
