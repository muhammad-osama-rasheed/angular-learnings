import { Component } from '@angular/core';
import { Component2Component } from '../component2/component2.component';

@Component({
  selector: 'app-component1',
  imports: [Component2Component],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

}
