import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Weather } from './weather';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, EMPTY } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title = 'Weather';
  cityForm : FormGroup

  errorMessage = null

  weather = new BehaviorSubject(null);
  weather$ = this.weather.asObservable()

  constructor(private weatherService: WeatherService, private FormBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.cityForm = this.FormBuilder.group({
      'cityName': this.FormBuilder.control('')
    })
  }

  handleSumbit() {
    this.clearText()
    this.weatherService.setCityWeather(this.cityForm.get('cityName').value)
    .pipe(
      tap((data) => console.log(data)),
      catchError((err) => {
        this.errorMessage = "This city does not exist"
        return EMPTY
      })
    ).subscribe(data => this.weather.next(data))    
  }

  clearText() {
    this.weather.next(null)
  }
}
