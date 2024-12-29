import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nro1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nro1.component.html',
  styleUrl: './nro1.component.css'
})
export class Nro1Component {
    nro2: number | undefined;
    @Input() nro:any;
    
    divideNumber(fnro: number):void{
      if (this.nro !== undefined) {
        this.nro2 = this.nro / fnro;
      } 

    }
}
