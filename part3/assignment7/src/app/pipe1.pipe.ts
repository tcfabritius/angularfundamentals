import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1',
  standalone: true
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: string): string {
    return value.split("").reverse().join("");
  }

}
