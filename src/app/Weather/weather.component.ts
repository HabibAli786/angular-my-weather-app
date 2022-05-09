import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Weather } from './weather';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Favourite } from './../redux/models/favourites.model';
import * as FavourtesAction from '../redux/actions/favourites.action'
import { WeatherService } from './weather.service';

interface AppState {
  favourites: Favourite
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title = 'Weather';
  cityForm : FormGroup
  isDisable: boolean = false

  errorMessage = null
  weather = new BehaviorSubject(null);
  weather$ = this.weather.asObservable()

  favourites$: Observable<Favourite>

  constructor(private weatherService: WeatherService, 
              private FormBuilder: FormBuilder,
              private store: Store<AppState>) {
    
    this.favourites$ = this.store.select('favourites')

  }

  ngOnInit(): void {
    this.cityForm = this.FormBuilder.group({
      'cityName': this.FormBuilder.control('')
    })
  }

  checkFavourites(selectedCity) {
    console.log(selectedCity)
    this.favourites$.subscribe(data => {
      
      for(let i=0; i < data.cities.length; i++) {
        console.log(data.cities[i])
        if(selectedCity.toLowerCase() === data.cities[i]) {
          console.log("This city was selected" + data.cities[i])
          this.isDisable = true
          break
        } else {
          this.isDisable = false
        }
      }
    })
  }

  handleSumbit() {
    this.clearText()
    this.checkFavourites(this.cityForm.get('cityName').value)
    console.log(this.isDisable)
    this.weatherService.setCityWeather(this.cityForm.get('cityName').value)
    .pipe(
      tap((data) => console.log(data)),
      catchError((err) => {
        this.errorMessage = "This city does not exist"
        return EMPTY
      })
    ).subscribe(data => {
      this.weather.next(data)
      this.errorMessage = null
    })    
  }

  clearText() {
    this.weather.next(null)
  }

  addToFav(city: string) {
    console.log(city)
    this.store.dispatch(new FavourtesAction.AddFavourite(city.toLowerCase()))
  }
}
