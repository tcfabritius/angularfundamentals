import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [HttpClientModule, CommonModule,],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city: string = "Espoo";
  weather: any;

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe({
        next: (data) => this.weather = data,
        error: (err) => alert('City not found')
      });
    }
  }
}
