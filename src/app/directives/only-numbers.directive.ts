import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]',
  // exportAs: 'appOnlyNumber',
})

export class OnlyNumbersDirective {
  constructor(){}

  @HostListener('keypress', ['$event'])
  onlyNumbersValidator(e: KeyboardEvent) {
    const charCode = e.charCode;
    const charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^-?\d*[.,]?\d*$/)) {
      e.preventDefault();
    }
  }
}
