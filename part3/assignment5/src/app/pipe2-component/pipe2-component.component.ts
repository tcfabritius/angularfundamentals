import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe2-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe2-component.component.html',
  styleUrl: './pipe2-component.component.css'
})
export class Pipe2ComponentComponent {
  testObject = { name: 'Sam', age: 51, job: 'Teacher' };
  testArray = [5, 15, 53, 1, 2];
}
