import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutrosDeusesPageRoutingModule } from './outros-deuses-routing.module';

import { OutrosDeusesPage } from './outros-deuses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutrosDeusesPageRoutingModule
  ],
  declarations: [OutrosDeusesPage]
})
export class OutrosDeusesPageModule {}
