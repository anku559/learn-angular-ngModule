import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularModule } from './learn/angular/angular.module';
import { routes as angularLearnRoutes } from './learn/angular/angular-routing.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: 'angular', children: angularLearnRoutes }];

@NgModule({
  imports: [RouterModule.forRoot(routes), AngularModule, CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
