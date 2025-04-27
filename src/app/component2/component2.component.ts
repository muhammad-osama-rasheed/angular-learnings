import { Component } from '@angular/core';
import { Component3Component } from "../component3/component3.component";

@Component({
  selector: 'app-component2',
  imports: [Component3Component],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {

}
