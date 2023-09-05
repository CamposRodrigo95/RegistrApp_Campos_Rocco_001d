import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngDocentePageRoutingModule } from './ing-docente-routing.module';

import { IngDocentePage } from './ing-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngDocentePageRoutingModule
  ],
  declarations: [IngDocentePage]
})
export class IngDocentePageModule {}
