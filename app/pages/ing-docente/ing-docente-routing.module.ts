import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngDocentePage } from './ing-docente.page';

const routes: Routes = [
  {
    path: '',
    component: IngDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngDocentePageRoutingModule {}
