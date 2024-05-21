import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: false,
  template: `
    <button class="btn btn-primary">Add Server</button>
    <!-- <app-server serverId="12345" status="ONLINE"></app-server>
    <app-server serverId="12345" status="OFFLINE"></app-server> -->
  `,
  styleUrl: './servers.components.scss',
})
export class ServersComponent {}
