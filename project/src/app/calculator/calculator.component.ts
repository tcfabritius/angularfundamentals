import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;

  sum(number1: number, number2:number):number{
    return number1 + number2;
  }

  difference(number1: number, number2:number):number{
    return number1 - number2;
  }

  division(number1: number, number2:number):number{
    return number1 / number2;
  }

  product(number1: number, number2:number):number{
    return number1 * number2;
  }
}
