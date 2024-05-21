import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DBInterpolationComponent } from './components/data-bindings/db-interpolation.component';
import { DBTwoWayComponent } from './components/data-bindings/db-two-way.component';
import { StructuralDirectivesComponent } from './components/directives/dir-structural.component';

@NgModule({
  declarations: [
    DBInterpolationComponent,
    DBTwoWayComponent,
    StructuralDirectivesComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class AngularModule {}
