import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NroComponent } from "./nro/nro.component";
import { Nro1Component } from './nro1/nro1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, NroComponent, Nro1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment3';
  nro: number | undefined;

  updateNro(newValue: number): void {
    this.nro = newValue;
  }
}
