import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'dir-structural',
  template: `
    <h3 class="text-success">Structural Directives</h3>
    <h4 class="text-success">ngIf</h4>
    <p *ngIf="isOnline">Available</p>

    <hr />
    <h4 class="text-success">ngIf and Else (Using Template)</h4>
    <p *ngIf="isOnline; else offline">Available</p>
    <ng-template #offline>User is offline</ng-template>

    <hr />
    <h4 class="text-success">&#64;if and &#64;else</h4>
    @if(isOnline) {
    <p class="online">{{ username }} Online</p>
    } @else {
    <p class="offline">{{ username }} Offline</p>
    }

    <hr />
    <h4 class="text-success">ngFor</h4>
    <p
      *ngFor="let user of users; let i = index"
      [ngStyle]="(i + 1) % 2 === 0 ? { color: 'red' } : { color: 'blue' }"
    >
      {{ i + 1 }}. {{ user }}
    </p>
    <button class="btn btn-primary" (click)="addUser()">Add User</button>

    <button class="btn btn-primary" (click)="removeUser()">Remove User</button>

    <hr />
    <h4 class="text-success">&#64;for</h4>

    <h5 class="text-danger">Users starting with Vowel</h5>
    @for (user of users; track $index) { @if(user[0].toLowerCase() === 'a' ||
    user[0].toLowerCase() === 'e' || user[0].toLowerCase() === 'i' ||
    user[0].toLowerCase() === 'o' || user[0].toLowerCase() === 'u') {
    <p>{{ $index + 1 }}.{{ user }}</p>
    } }
  `,
  styles: [
    '.online {color: green; font-weight: bold}',
    '.offline {color: grey; font-weight: bold}',
  ],
})
export class StructuralDirectivesComponent {
  username = 'Alex';
  isOnline = false;
  users: string[] = ['Alex', 'Bryan', 'Carl', 'Drake', 'Ellie'];

  addUser() {
    this.users.push(faker.person.firstName());
  }

  removeUser() {
    this.users.pop();
  }
}
