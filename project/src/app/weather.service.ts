import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apikey: string = "8591af6c8910b21f079ca14948f9d0d1";
  private apilink: string = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apilink}?q=${city}&appid=${this.apikey}&units=metric`;
    return this.http.get(url);
  }

}
