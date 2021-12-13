import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtniaPageRoutingModule } from './etnia-routing.module';

import { EtniaPage } from './etnia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtniaPageRoutingModule
  ],
  declarations: [EtniaPage]
})
export class EtniaPageModule {}
