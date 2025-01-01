import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-texteditor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './texteditor.component.html',
  styleUrl: './texteditor.component.css'
})
export class TexteditorComponent {
  text: string = '';
  mode: string = 'default';

  save(value: string){
    this.text = value;
  }

  original() {
    this.mode = 'default';
  }

  reverse() {
    this.mode = 'reverse';
    this.text = this.text.split('').reverse().join('');
  }

  capitalize() {
    this.mode = 'capitalize';
    this.text = this.text.toUpperCase();
  }

  onInputChange(event: any) {
    this.text = event.target.value;
  }
}
