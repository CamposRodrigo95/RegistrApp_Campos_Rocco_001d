import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngAlumnoPageRoutingModule } from './ing-alumno-routing.module';

import { IngAlumnoPage } from './ing-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngAlumnoPageRoutingModule
  ],
  declarations: [IngAlumnoPage]
})
export class IngAlumnoPageModule {}
