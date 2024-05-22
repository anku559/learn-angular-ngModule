import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  username = 'alexdoe1';

  constructor(private router: Router) {}

  resetUserName() {
    this.username = '';
  }

  isRootRoute() {
    return this.router.url === '/' || this.router.url === '/home';
  }
}
