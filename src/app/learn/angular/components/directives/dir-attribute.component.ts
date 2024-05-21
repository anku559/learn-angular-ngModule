import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dir-attribute',
  template: `<h3 class="text-success">Attribute Directives</h3>
    <h4 class="text-success">[style]</h4>

    <p
      [ngStyle]="
        day === 'SATURDAY' || day === 'SUNDAY'
          ? { color: 'green', fontWeight: 'bold' }
          : { color: 'red', fontWeight: 'bold' }
      "
    >
      {{ day }}
    </p>
    <button (click)="setDay()">Click</button>`,
  styles: [
    '.online {color: green; font-weight: bold}',
    '.offline {color: grey; font-weight: bold}',
  ],
})
export class AttributeDirectivesComponent {
  day = '';
  currentStyles: Record<string, string> = {};
  randomIdx: number;

  setDay(): void {
    this.randomIdx = Math.floor(Math.random() * 7);
    switch (this.randomIdx) {
      case 0:
        this.day = 'SUNDAY';
        break;
      case 1:
        this.day = 'MONDAY';
        break;
      case 2:
        this.day = 'TUESDAY';
        break;
      case 3:
        this.day = 'WEDNESDAY';
        break;
      case 4:
        this.day = 'THURSDAY';
        break;
      case 5:
        this.day = 'FRIDAY';
        break;
      case 6:
        this.day = 'SATURDAY';
        break;
      default:
        this.day = 'INVALID_DAY';
        break;
    }
    console.log(this.randomIdx);
    return;
  }
}
