import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  imports: [],
  templateUrl: './inline-style.component.html',
  styles: [`
  .inline-style-box{
    width: 100px;
    height: 100px;
    background-color: midnightblue;
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
  }
    `]
})
export class InlineStyleComponent {

}
