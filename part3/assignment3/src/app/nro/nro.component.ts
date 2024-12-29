import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() nroC = new EventEmitter<number>();
  nro1: number | undefined;
  
  randomNumber(fnro: number):void{
    this.rnd = Math.floor(Math.random()*100);
    let nnro = this.rnd + fnro;
    this.nro1 = nnro;
    this.nroC.emit(nnro);
  }
}
