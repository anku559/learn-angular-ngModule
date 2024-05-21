import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>Warning</p>`,
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
      }
    `,
    `
      p {
        font-size: 1em;
      }
    `,
  ],
})
export class WarningAlertComponent {}
