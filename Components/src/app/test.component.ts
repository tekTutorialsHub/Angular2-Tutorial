import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1> {{title}} works </h1>`,
  styles: []
})
export class TestComponent {
  title = 'test';
}
