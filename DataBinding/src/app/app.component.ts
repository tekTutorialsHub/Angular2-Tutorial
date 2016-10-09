import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

      bankName: string = 'ABC Bank Ltd' ;
      count: number= 0;
      name: string= '';
      color: string= 'red';

      getBankName(): string {
        return this.bankName;
      }

      buttonClicked(): void {
        this.count = this.count + 1;
        console.log('Button Clicked')
      }
}
