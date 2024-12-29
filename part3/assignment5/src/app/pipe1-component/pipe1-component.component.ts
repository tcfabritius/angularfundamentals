import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe1-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe1-component.component.html',
  styleUrl: './pipe1-component.component.css'
})
export class Pipe1ComponentComponent {
  today: Date = new Date();
  amount: number = 5365.75;
  percent: number = 0.111;
}
