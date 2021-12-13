import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutrosDeusesPage } from './outros-deuses.page';

const routes: Routes = [
  {
    path: '',
    component: OutrosDeusesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutrosDeusesPageRoutingModule {}
