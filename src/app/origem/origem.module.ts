import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrigemPageRoutingModule } from './origem-routing.module';

import { OrigemPage } from './origem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrigemPageRoutingModule
  ],
  declarations: [OrigemPage]
})
export class OrigemPageModule {}
