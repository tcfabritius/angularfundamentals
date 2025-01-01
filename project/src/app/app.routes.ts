import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'texteditor', component: TexteditorComponent },
    { path: 'weather', component: WeatherComponent }
];
