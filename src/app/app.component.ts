import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { InlineStyleComponent } from "./inline-style/inline-style.component";
import { InlineTemplateComponent } from "./inline-template/inline-template.component";
import { InlineStyleAndTemplateComponent } from "./inline-style-and-template/inline-style-and-template.component";

@Component({
  selector: 'app-root',
  imports: [Component1Component, InlineStyleComponent, InlineTemplateComponent, InlineStyleAndTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
  name = 'Muhammad Osama';
}
