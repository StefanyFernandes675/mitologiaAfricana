import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtniaPage } from './etnia.page';

const routes: Routes = [
  {
    path: '',
    component: EtniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtniaPageRoutingModule {}
