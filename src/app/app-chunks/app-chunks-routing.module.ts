import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1HouseComponent } from './app-1/app1-house.component';

export const routes: Routes = [
  { path: 'app-1', component: App1HouseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppChunksRoutingModule {}
