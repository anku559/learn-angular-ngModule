import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { AngularModule } from './learn/angular/angular.module';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './learn/angular/components/directives/dir-attribute.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    AttributeDirectivesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    AngularModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
