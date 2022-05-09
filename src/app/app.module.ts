import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SimpleReducer } from './simple.reducer'
import { PostReducer } from './post.reducer'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './Weather/weather.module';
import { AboutModule } from './About/about.module';
import { HomeComponent } from './Home/home.component';
import { HomeModule } from './Home/home.module';
import { MyFavouritesModule } from './MyFavourites/my-favourites.module';
import { FavouriteReducer } from './redux/reducers/favourites.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    WeatherModule,
    AboutModule,
    HomeModule,
    MyFavouritesModule,
    StoreModule.forRoot({ 
      message: SimpleReducer,
      post: PostReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
