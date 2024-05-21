import { Component } from '@angular/core';

@Component({
  selector: 'db-property',
  template: ` <h3 class="text-success">Property Binding</h3> `,
  styles: [''],
})
export class DBPropertyComponent {
  property1 = 'From class PROPERTY 1';

  get method1() {
    return 'From class METHOD 1';
  }
}
