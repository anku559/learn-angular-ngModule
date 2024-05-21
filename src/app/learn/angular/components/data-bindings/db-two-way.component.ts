import { Component } from '@angular/core';

@Component({
  selector: 'db-two-way',
  template: `
    <h3 class="text-success">Two-Way Binding</h3>
    <input [(ngModel)]="username" type="text" />
    <p>{{ username }}</p>
    <button (click)="resetUserName()" [disabled]="!username.length">
      Click
    </button>
  `,
  styles: [''],
})
export class DBTwoWayComponent {
  username = 'alexdoe1';

  resetUserName() {
    this.username = '';
  }
}
