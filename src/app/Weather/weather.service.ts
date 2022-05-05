import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    // API Key f6db6883d8684c6c931100901213103

    apiKey = 'f6db6883d8684c6c931100901213103'

    constructor(private http: HttpClient) {

    }

    setCityWeather(city: string) {
      console.log(city)
      return this.http.get(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=no`)
      .pipe(
          tap(data => console.log('Data returned: ', data)),
          catchError(this.handleError)
      );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Backend returned code ${err.status}: ${err.message}`;
        }
        console.error(err);
        return throwError(errorMessage);
      }
}