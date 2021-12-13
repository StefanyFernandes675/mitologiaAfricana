import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrigemPage } from './origem.page';

const routes: Routes = [
  {
    path: '',
    component: OrigemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrigemPageRoutingModule {}
