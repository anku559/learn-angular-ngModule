import { Component } from '@angular/core';

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
  `,
  styles: [
    '.online {color: green; font-weight: bold}',
    '.offline {color: grey; font-weight: bold}',
  ],
})
export class StructuralDirectivesComponent {
  username = 'Alex';
  isOnline = false;
}
