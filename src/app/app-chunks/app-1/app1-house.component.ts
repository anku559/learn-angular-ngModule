import { Component } from '@angular/core';

@Component({
  selector: 'app1-house',
  template: `
    <app1-header></app1-header>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <app1-recipes></app1-recipes>
          <app1-shopping-list></app1-shopping-list>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class App1HouseComponent {}
