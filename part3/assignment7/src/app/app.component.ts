import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Pipe1Pipe } from './pipe1.pipe';
import { FormsModule } from '@angular/forms';
import { Pipe2Pipe } from "./pipe2.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Pipe1Pipe, CommonModule, FormsModule, Pipe2Pipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment7';
  stringi: string ="";
  pressed: boolean = false;
  buttonPressed(stri: string){
    this.stringi = stri;
    this.pressed = true;
  }
}
