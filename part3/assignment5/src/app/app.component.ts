import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Pipe1ComponentComponent } from './pipe1-component/pipe1-component.component';
import { Pipe2ComponentComponent } from './pipe2-component/pipe2-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Pipe1ComponentComponent, Pipe2ComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment5';
}
