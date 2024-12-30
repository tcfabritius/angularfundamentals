import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appTextcolor]',
  standalone: true
})
export class TextcolorDirective {

  @Input('appTextcolor') textColor = "";

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
    this.el.nativeElement.style.color = this.textColor;
  }

}
