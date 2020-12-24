import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-directive-project';
  condition = true;

  toggle(): void{
    this.condition = !this.condition;
  }
}
