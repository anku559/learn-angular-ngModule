import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p>Success</p>`,
  styles: [
    `
      p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid green;
      }
    `,
    `
      p {
        font-size: 1em;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
