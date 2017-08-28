import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title= 'Data Binding in Angular';

  count= 0;
  name= '';
  color= 'red';

  inputId= 'id1';
  inputType= 'text';
  inputName= 'name';
  inputValue = 'value';
  inputPlaceHolder= 'Please enter name';

  getTitle(): string {
    return this.title;
  }

  buttonClicked(): void {
    this.count = this.count + 1;
    console.log('Button Clicked');
  }


}
