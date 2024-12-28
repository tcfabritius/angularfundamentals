import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment6';
  isActive: boolean = false;
  buttonMessage: string = "";

  setActive(){
    this.isActive = !this.isActive;
    this.showText();
  }
  showText(){
    if (this.isActive) {
      this.buttonMessage = "You have clicked button";
    } else {
      this.buttonMessage = "";
    }
  }
}
