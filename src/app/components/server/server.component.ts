import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '[app-server]', // In this way it will be attribute selector Usage - <div app-server></div>
  standalone: false,
  styles: ['p {color: grey}', 'p {font-weight: bold}'],
  template: `
    <p>
      {{ 'Server' }} with {{ serverId }}:
      <span
        [style]="getServerStatus === 'ONLINE' ? 'color:green' : 'color:red'"
        >{{ status }}</span
      >
    </p>
  `,
})
export class ServerComponent {
  @Input() serverId: string;
  @Input() status: string;

  get getServerStatus() {
    return this.status;
  }
}
