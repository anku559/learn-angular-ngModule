import { Component } from '@angular/core';

@Component({
  selector: 'db-interpolation',
  template: `
    <h3 class="text-success">Interpolation or String Interpolation</h3>
    <p class="text-primary">{{ property1 }}</p>
    <p class="text-primary">{{ method1 }}</p>
  `,
  styles: [''],
})
export class DBInterpolationComponent {
  property1 = 'From class PROPERTY 1';

  get method1() {
    return 'From class METHOD 1';
  }
}
