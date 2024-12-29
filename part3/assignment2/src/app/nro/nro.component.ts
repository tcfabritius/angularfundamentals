import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nro.component.html',
  styleUrl: './nro.component.css'
})
export class NroComponent {
  rnd: number | undefined;
  nro: number | undefined;
  
  randomNumber(fnro: number):void{
    this.rnd = Math.floor(Math.random()*100);
    this.nro = this.rnd + fnro;
  }
}
