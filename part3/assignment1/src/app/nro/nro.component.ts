import { Component } from '@angular/core';

@Component({
  selector: 'app-nro',
  standalone: true,
  imports: [],
  templateUrl: './nro.component.html',
  styleUrl: './nro.component.css'
})
export class NroComponent {
  rnd: number | undefined;
  
  randomNumber(){
    this.rnd = Math.floor(Math.random()*100)
  }
}
