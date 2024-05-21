import { Component } from '@angular/core';

@Component({
  selector: 'db-event',
  template: ` <h3 class="text-success">Event Binding</h3> `,
  styles: [''],
})
export class DBEventComponent {
  property1 = 'From class PROPERTY 1';

  get method1() {
    return 'From class METHOD 1';
  }
}
