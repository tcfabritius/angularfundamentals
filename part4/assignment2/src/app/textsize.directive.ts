import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextsize]',
  standalone: true
})
export class TextsizeDirective {

  @Input('appTextsize') textSize = "";

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
    this.el.nativeElement.style.textSize = this.textSize;
  }
}
