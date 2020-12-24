import {Directive, Input, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() textElement: string;
  public tooltip: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
      this.show();
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) this.hide();
  }

  show() {
    this.create();
    this.setPosition();
  }

  hide() {
    this.renderer.removeChild(this.el.nativeElement, this.tooltip);
    this.tooltip = null;
  }

  create() {
    this.tooltip = this.renderer.createElement('span');
    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.textElement));

    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    this.renderer.appendChild(this.el.nativeElement, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
  }

  setPosition() {
    let leftPadding = 10;

    this.renderer.setStyle(this.tooltip, 'padding-left', `${leftPadding}px`);
  }
}
