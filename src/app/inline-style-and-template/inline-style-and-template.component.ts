import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style-and-template',
  imports: [],
  template: `
    <div>
      <span>Inline Style And Template</span>
    </div>
  `,
  styles: [`
  div{
  width: 100px;
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
  padding: 5px;
}
span{
  font-size: 14px;
  color: #fff;
  text-align: center;
}
    `]
})
export class InlineStyleAndTemplateComponent {

}
