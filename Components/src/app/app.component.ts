// ****** External Template & CSS

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }


// ****** Inline Template & CSS

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: '<h1> {{title}} works </h1>',
//   styles: ['h1 { font-weight: bold; }']
// })
// export class AppComponent {
//   title = 'app';
// }



// ****** Inline long Template using Backquotes

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//           <h1> {{title}} works </h1>
//           <p> a long inline template </p>
//            `,
//   styles: ['h1 { font-weight: bold; }']
// })
// export class AppComponent {
//   title = 'app';
// }




import { Component } from '@angular/core';

@Component({
  selector: '[app-root]',
  template: `<h1> {{title}} works </h1>
            `,
  styles: []
})
export class AppComponent {
  title = 'app';
}

