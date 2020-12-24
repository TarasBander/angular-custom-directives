import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appZoom]'
  })
  export class ZoomDirective{
    @Input('zoomSize') size;

    private defaultSize: number;

    constructor(private el: ElementRef){
      this.defaultSize = 12;
    }

    @HostListener('mouseover') onMouseIn(){
      this.setFontSize(this.size);
    }

    @HostListener('mouseout') onMouseOut(){
      this.setFontSize(this.defaultSize);
    }

    setFontSize(value: number | string): void{
      this.el.nativeElement.style.fontSize = `${value}px`;
    }
}
