import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2',
  standalone: true
})
export class Pipe2Pipe implements PipeTransform {

  transform(value: string): string {
    let array = value.split("");
    let array2 = array.filter(item => isNaN(Number(item)));
    let str1 = array2.join();
    let str2 = str1.replace(/,/g, '');
    return str2;
  }

}
