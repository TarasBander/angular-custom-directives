import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomDirective } from './directives/zoom.directive';
import { WhileDirective } from './directives/structure-while.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    ZoomDirective,
    WhileDirective,
    OnlyNumbersDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ZoomDirective,
    WhileDirective,
    OnlyNumbersDirective,
    TooltipDirective
  ]
})
export class AppModule { }
