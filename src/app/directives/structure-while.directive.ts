import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWhile]'
})
export class WhileDirective {

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef)
    { }

    @Input('appWhile') set while(condition: boolean) {
        if (condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
    }
}
