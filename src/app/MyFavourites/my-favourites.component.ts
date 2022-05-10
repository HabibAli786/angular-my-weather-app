import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Favourite } from '../redux/models/favourites.model';
import { Weather } from '../Weather/weather';
import { WeatherService } from '../Weather/weather.service';

interface AppState {
  favourites: Favourite
}

@Component({
    selector: 'app-home',
    templateUrl: './my-favourites.component.html',
    styleUrls: ['./my-favourites.component.css']
})
export class MyFavourites implements OnInit {
  title = 'My Favourites';
  myFavourites$ : Observable<Favourite>
  myFavourites: {}

  weather$ : Observable<Weather>

  errorMessage: string

  constructor(private weatherService: WeatherService, private store: Store<AppState>) {
    this.myFavourites$ = this.store.select('favourites')
  }

  ngOnInit(): void {
    this.myFavourites$.subscribe(data => this.myFavourites = data.cities)
  }

  getWeather(city) {
    this.weatherService.setCityWeather(city)
    .pipe(
      // tap((data) => console.log(data)),
      catchError((err) => {
        this.errorMessage = "This city does not exist"
        return EMPTY
      })
    ).subscribe(data => {
      // this.selectedWeather
      console.log(data)      
    })    
  }

}

// london : {
//   displayText: false,
//   data: {

//   }
// }
