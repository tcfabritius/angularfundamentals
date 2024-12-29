import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-component.component.html',
  styleUrl: './pipe-component.component.css'
})
export class PipeComponentComponent {
  today: Date = new Date();
  amount: number = 5365.75;
  percent: number = 0.111;
}
