import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  title = 'Weather';


  cityForm : FormGroup

  constructor(private weatherService: WeatherService, private FormBuilder: FormBuilder) {
    this.getWeather()
  }

  ngOnInit(): void {
    this.cityForm = this.FormBuilder.group({
      'cityName': this.FormBuilder.control('')
    })
  }

  handleSumbit() {
    console.log(this.cityForm.value)
  }

  getWeather() {
    this.weatherService.weather$.subscribe(data => console.log(data))
  }
}
