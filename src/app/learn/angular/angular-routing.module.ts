import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DBInterpolationComponent } from './components/data-bindings/db-interpolation.component';
import { DBTwoWayComponent } from './components/data-bindings/db-two-way.component';
import { DBPropertyComponent } from './components/data-bindings/db-property.component';
import { DBEventComponent } from './components/data-bindings/db-event.component';
import { StructuralDirectivesComponent } from './components/directives/dir-structural.component';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './components/directives/dir-attribute.component';

const DataBindingRoutes: Routes = [
  { path: 'db/interpolation', component: DBInterpolationComponent },
  { path: 'db/property', component: DBPropertyComponent },
  { path: 'db/event', component: DBEventComponent },
  { path: 'db/two-way', component: DBTwoWayComponent },
];

const DirectiveRoutes: Routes = [
  { path: 'dir/structural', component: StructuralDirectivesComponent },
  { path: 'dir/attribute', component: AttributeDirectivesComponent },
];

export const routes: Routes = [...DataBindingRoutes, ...DirectiveRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
